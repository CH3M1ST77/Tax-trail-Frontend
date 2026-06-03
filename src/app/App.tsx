import { useState, useEffect } from "react";
import { LoginModal } from "./components/LoginModal";
import { UrbanStart } from "./components/UrbanStart";
import { UrbanCharacterSelection } from "./components/UrbanCharacterSelection";
import { UrbanCityView } from "./components/UrbanCityView";
import { UrbanDecisionCard } from "./components/UrbanDecisionCard";
import { UrbanConsequence } from "./components/UrbanConsequence";
import { UrbanEndScreen } from "./components/UrbanEndScreen";

// Types
interface User {
  id: string;
  email: string;
  fullName: string;
  accountType: string;
  totalPoints: number;
  currentLevel: number;
}

type GameScreen =
  | "start"
  | "how-it-works"
  | "character-selection"
  | "city-view"
  | "decision"
  | "consequence"
  | "end";

interface Building {
  name: string;
  maintained: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Decision {
  icon: "building" | "document" | "office";
  title: string;
  description: string;
  options: Array<{
    text: string;
    id: string;
  }>;
}

function App() {
  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Game state
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("start");
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  const [decisionCount, setDecisionCount] = useState(0);
  const [lastChoice, setLastChoice] = useState<string>("");
  const [cityScore, setCityScore] = useState(50);

  const [buildings, setBuildings] = useState<Building[]>([
    {
      name: "Apartment Complex",
      maintained: true,
      x: 80,
      y: 60,
      width: 100,
      height: 180,
    },
    {
      name: "Office Building",
      maintained: true,
      x: 220,
      y: 60,
      width: 90,
      height: 200,
    },
    {
      name: "Shopping Center",
      maintained: false,
      x: 350,
      y: 60,
      width: 110,
      height: 160,
    },
    {
      name: "Public Services",
      maintained: true,
      x: 500,
      y: 60,
      width: 80,
      height: 140,
    },
  ]);

  // Check for existing login on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setAuthLoading(false);
  }, []);

  // Urban decisions with realistic scenarios
  const decisions: Decision[] = [
    {
      icon: "document",
      title: "Tax Payment Notice",
      description:
        "You've started earning steadily. You haven't recorded all your income yet and tax payments haven't started filling in.",
      options: [
        { text: "Pay all your tax on time", id: "pay-all" },
        { text: "Withhold some of your income", id: "withhold" },
        { text: "Ask a friend for advice", id: "advice" },
      ],
    },
    {
      icon: "office",
      title: "Registration Decision",
      description:
        "Your income is growing. Formal registration would open new opportunities, but comes with responsibilities.",
      options: [
        { text: "Register officially", id: "register" },
        { text: "Stay informal for now", id: "stay-informal" },
        { text: "Look into the requirements first", id: "research" },
      ],
    },
    {
      icon: "building",
      title: "City Infrastructure Fee",
      description:
        "A new city development levy has been introduced. It applies to all earners in your bracket.",
      options: [
        { text: "Pay the levy as required", id: "pay-levy" },
        { text: "Delay until the deadline", id: "delay" },
        { text: "Find a way around it", id: "avoid" },
      ],
    },
  ];

  const getCurrentDecision = (): Decision => {
    return decisions[Math.min(decisionCount, decisions.length - 1)];
  };

  const handleDecisionChoice = (choiceId: string) => {
    setLastChoice(choiceId);
    setCurrentScreen("consequence");
  };

  const getConsequenceData = () => {
    const isPositiveChoice =
      lastChoice === "pay-all" ||
      lastChoice === "register" ||
      lastChoice === "pay-levy";
    const isNeutralChoice =
      lastChoice === "advice" || lastChoice === "research";

    if (isPositiveChoice) {
      return {
        positive: true,
        title: "The economy is getting better",
        description:
          "At first, not much seems to change. Over time, improvements begin to show. Infrastructure works, services run smoother.",
      };
    } else if (isNeutralChoice) {
      return {
        positive: true,
        title: "Understanding the system",
        description:
          "You took time to learn. The information you gained helps you make better choices moving forward.",
      };
    } else {
      return {
        positive: false,
        title: "Small gaps begin to show",
        description:
          "At first, nothing around you seems to change. Over time, small gaps begin to show. Services slow down. Roads deteriorate.",
      };
    }
  };

  const handleConsequenceContinue = () => {
    const consequence = getConsequenceData();

    // Update city score
    if (consequence.positive) {
      setCityScore((prev) => Math.min(100, prev + 15));
    } else {
      setCityScore((prev) => Math.max(0, prev - 20));
    }

    // Update buildings based on city score
    setBuildings((prev) =>
      prev.map((building, idx) => ({
        ...building,
        maintained: cityScore > 40 && idx < 3,
      })),
    );

    setDecisionCount((prev) => prev + 1);

    // Check if game should end
    if (decisionCount >= 2 || cityScore <= 20 || cityScore >= 85) {
      setCurrentScreen("end");
    } else {
      setCurrentScreen("city-view");
    }
  };

  const handlePlayAgain = () => {
    setCurrentScreen("start");
    setDecisionCount(0);
    setCityScore(50);
    setBuildings([
      {
        name: "Apartment Complex",
        maintained: true,
        x: 80,
        y: 60,
        width: 100,
        height: 180,
      },
      {
        name: "Office Building",
        maintained: true,
        x: 220,
        y: 60,
        width: 90,
        height: 200,
      },
      {
        name: "Shopping Center",
        maintained: false,
        x: 350,
        y: 60,
        width: 110,
        height: 160,
      },
      {
        name: "Public Services",
        maintained: true,
        x: 500,
        y: 60,
        width: 80,
        height: 140,
      },
    ]);
  };

  const getEndGameData = () => {
    let outcome: "City Builder" | "Balanced Player" | "Risk Taker";
    let message: string;

    if (cityScore >= 70) {
      outcome = "City Builder";
      message =
        "Your choices shaped how the city grew. Contributions were made. Infrastructure improved. The system worked because people participated.";
    } else if (cityScore >= 40) {
      outcome = "Balanced Player";
      message =
        "Your path was mixed. Some choices supported the city, others created gaps. The city neither thrived nor failed, it simply existed.";
    } else {
      outcome = "Risk Taker";
      message =
        "Your choices shaped what the city lacked. Short-term gains led to long-term decline. The city struggled because contributions were avoided.";
    }

    return {
      outcome,
      message,
      cityQuality:
        cityScore >= 50 ? ("developed" as const) : ("struggling" as const),
    };
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    // Reset game state
    setCurrentScreen("start");
    setDecisionCount(0);
    setCityScore(50);
  };

  // Show loading
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Show login if not authenticated
  if (!user) {
    return <LoginModal onLogin={handleLogin} />;
  }

  // Game screen rendering (user is logged in)
  if (currentScreen === "start") {
    return (
      <>
        <UrbanStart
          onStart={() => setCurrentScreen("character-selection")}
          onHowItWorks={() => setCurrentScreen("how-it-works")}
        />
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transition cursor-pointer"
        >
          Logout ({user.email})
        </button>
      </>
    );
  }

  if (currentScreen === "how-it-works") {
    return (
      <>
        <div
          className="min-h-screen flex items-center justify-center p-8"
          style={{ backgroundColor: "#5D6F82" }}
        >
          <div
            className="max-w-2xl"
            style={{
              backgroundColor: "#F5F7FA",
              padding: "48px",
              borderRadius: "6px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <h1
              style={{
                fontFamily: "Work Sans, sans-serif",
                fontSize: "2.5rem",
                fontWeight: 600,
                color: "#2A3644",
                marginBottom: "32px",
                letterSpacing: "-0.02em",
              }}
            >
              How It Works
            </h1>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#5A6F84",
                marginBottom: "40px",
              }}
            >
              <p className="mb-4">
                This is a journey through a modern city. You'll face decisions
                about money, responsibility, and the system.
              </p>
              <p className="mb-4">
                Every choice you make affects both your path and the city around
                you. Some choices strengthen infrastructure. Others create gaps.
              </p>
              <p className="mb-4">
                The city runs on contributions. Some people follow the system.
                Others take shortcuts.
              </p>
              <p>Your decisions determine which kind of city emerges.</p>
            </div>
            <button
              onClick={() => setCurrentScreen("start")}
              className="px-6 py-2.5 transition-all hover:brightness-110 cursor-pointer"
              style={{
                backgroundColor: "#8B9BAA",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              Back to Start
            </button>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transition cursor-pointer"
        >
          Logout ({user.email})
        </button>
      </>
    );
  }

  if (currentScreen === "character-selection") {
    return (
      <>
        <UrbanCharacterSelection
          onBack={() => setCurrentScreen("start")}
          onContinue={(characterId) => {
            setSelectedCharacter(characterId);
            setCurrentScreen("city-view");
          }}
        />
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transition cursor-pointer"
        >
          Logout ({user.email})
        </button>
      </>
    );
  }

  if (currentScreen === "city-view") {
    return (
      <>
        <UrbanCityView
          buildings={buildings}
          onNextDecision={() => setCurrentScreen("decision")}
        />
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transition cursor-pointer"
        >
          Logout ({user.email})
        </button>
      </>
    );
  }

  if (currentScreen === "decision") {
    const decision = getCurrentDecision();
    return (
      <>
        <UrbanDecisionCard
          icon={decision.icon}
          title={decision.title}
          description={decision.description}
          options={decision.options}
          onChoice={handleDecisionChoice}
        />
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transition cursor-pointer"
        >
          Logout ({user.email})
        </button>
      </>
    );
  }

  if (currentScreen === "consequence") {
    const consequence = getConsequenceData();
    return (
      <>
        <UrbanConsequence
          positive={consequence.positive}
          title={consequence.title}
          description={consequence.description}
          onContinue={handleConsequenceContinue}
        />
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transition cursor-pointer"
        >
          Logout ({user.email})
        </button>
      </>
    );
  }

  if (currentScreen === "end") {
    const endData = getEndGameData();
    return (
      <>
        <UrbanEndScreen
          outcome={endData.outcome}
          message={endData.message}
          cityQuality={endData.cityQuality}
          onPlayAgain={handlePlayAgain}
        />
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg transition cursor-pointer"
        >
          Logout ({user.email})
        </button>
      </>
    );
  }

  return null;
}

export default App;
