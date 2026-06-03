import { useState } from "react";

interface Character {
  id: string;
  title: string;
  description: string;
}

interface UrbanCharacterSelectionProps {
  onContinue: (characterId: string) => void;
  onBack: () => void;
}

const characters: Character[] = [
  {
    id: "yango-driver",
    title: "Yango Driver",
    description: "Earns daily. Not everything is always recorded.",
  },
  {
    id: "freelance-creative",
    title: "Freelance Creative",
    description: "Income varies. Invoices pile up, payments delayed.",
  },
  {
    id: "shop-owner",
    title: "Small Shop Owner",
    description: "Steady but small. Stock and cash, no paper trail.",
  },
];

export function UrbanCharacterSelection({
  onContinue,
  onBack,
}: UrbanCharacterSelectionProps) {
  const [selectedCharacter, setSelectedCharacter] =
    useState<string>("yango-driver");

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "#5D6F82" }}
    >
      {/* Subtle city backdrop */}
      <div className="absolute inset-0 flex items-end justify-center opacity-15">
        <div className="flex gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-16"
              style={{
                height: `${Math.random() * 200 + 100}px`,
                backgroundColor: "#3A4A5A",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
        <h1
          className="mb-16 text-center"
          style={{
            fontFamily: "Work Sans, sans-serif",
            fontSize: "2.25rem",
            fontWeight: 600,
            color: "#F5F7FA",
            letterSpacing: "-0.01em",
          }}
        >
          Choose Your Path
        </h1>

        {/* Character Cards */}
        <div className="flex gap-6 mb-12">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => setSelectedCharacter(character.id)}
              className="relative transition-all hover:transform hover:scale-102"
              style={{
                width: "260px",
                height: "320px",
                backgroundColor: "#F5F7FA",
                border:
                  selectedCharacter === character.id
                    ? "2px solid #8B9BAA"
                    : "1px solid #CBD5E0",
                borderRadius: "8px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              {/* Character Icon/Illustration */}
              <div className="mb-8 flex items-center justify-center">
                {character.id === "yango-driver" && (
                  <div className="relative">
                    {/* Car shape */}
                    <div
                      className="w-32 h-20 rounded-lg relative"
                      style={{ backgroundColor: "#6B8299" }}
                    >
                      {/* Windows */}
                      <div className="absolute top-2 left-4 right-4 h-8 flex gap-1">
                        <div
                          className="flex-1 rounded-t"
                          style={{ backgroundColor: "#8FA8BE" }}
                        ></div>
                        <div
                          className="flex-1 rounded-t"
                          style={{ backgroundColor: "#8FA8BE" }}
                        ></div>
                      </div>
                      {/* Wheels */}
                      <div
                        className="absolute -bottom-2 left-2 w-6 h-6 rounded-full"
                        style={{
                          backgroundColor: "#3A4A5A",
                          border: "2px solid #2A3644",
                        }}
                      ></div>
                      <div
                        className="absolute -bottom-2 right-2 w-6 h-6 rounded-full"
                        style={{
                          backgroundColor: "#3A4A5A",
                          border: "2px solid #2A3644",
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {character.id === "freelance-creative" && (
                  <div className="relative">
                    {/* Laptop */}
                    <div className="w-28 h-20 relative">
                      {/* Screen */}
                      <div
                        className="w-28 h-16 rounded-t"
                        style={{
                          backgroundColor: "#6B8299",
                          border: "2px solid #5A6F84",
                        }}
                      >
                        <div className="p-2">
                          <div
                            className="w-full h-2 mb-1 rounded"
                            style={{ backgroundColor: "#8FA8BE" }}
                          ></div>
                          <div
                            className="w-3/4 h-2 mb-1 rounded"
                            style={{ backgroundColor: "#8FA8BE" }}
                          ></div>
                          <div
                            className="w-full h-2 rounded"
                            style={{ backgroundColor: "#8FA8BE" }}
                          ></div>
                        </div>
                      </div>
                      {/* Base */}
                      <div
                        className="w-32 h-2 -ml-2"
                        style={{
                          backgroundColor: "#5A6F84",
                          clipPath:
                            "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {character.id === "shop-owner" && (
                  <div className="relative">
                    {/* Shop front */}
                    <div
                      className="w-28 h-24 rounded"
                      style={{ backgroundColor: "#6B8299" }}
                    >
                      {/* Awning */}
                      <div
                        className="w-full h-4"
                        style={{ backgroundColor: "#C9A870" }}
                      ></div>
                      {/* Window/display */}
                      <div
                        className="mx-3 mt-3 h-12 rounded"
                        style={{
                          backgroundColor: "#8FA8BE",
                          border: "1px solid #5A6F84",
                        }}
                      >
                        {/* Shelves */}
                        <div className="p-2 space-y-2">
                          <div
                            className="h-2 rounded"
                            style={{ backgroundColor: "#CBD5E0" }}
                          ></div>
                          <div
                            className="h-2 rounded"
                            style={{ backgroundColor: "#CBD5E0" }}
                          ></div>
                        </div>
                      </div>
                      {/* Door */}
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-10 rounded-t"
                        style={{ backgroundColor: "#4A5A6A" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Character Info */}
              <div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Work Sans, sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#2A3644",
                  }}
                >
                  {character.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    color: "#5A6F84",
                    lineHeight: 1.5,
                  }}
                >
                  {character.description}
                </p>
              </div>

              {/* Selection indicator */}
              {selectedCharacter === character.id && (
                <div
                  className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8B9BAA" }}
                >
                  <div className="w-2 h-3 border-white border-r-2 border-b-2 transform rotate-45 -mt-0.5"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="px-8 py-2.5 transition-all hover:brightness-110"
            style={{
              backgroundColor: "transparent",
              color: "#CBD5E0",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 500,
              border: "1px solid #8B9BAA",
              borderRadius: "4px",
            }}
          >
            ← Back
          </button>
          <button
            onClick={() => onContinue(selectedCharacter)}
            className="px-8 py-2.5 transition-all hover:brightness-110"
            style={{
              backgroundColor: "#8B9BAA",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 500,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              borderRadius: "4px",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
