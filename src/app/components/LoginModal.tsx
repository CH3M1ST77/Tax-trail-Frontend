import { useState } from "react";

interface User {
  id: string;
  email: string;
  fullName: string;
  accountType: string;
  totalPoints: number;
  currentLevel: number;
}

interface LoginModalProps {
  onLogin: (user: User) => void;
}

export function LoginModal({ onLogin }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    accountType: "student",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let url = "http://localhost:5000/api/auth/login";
      let body: any = {
        email: formData.email,
        password: formData.password,
      };

      if (!isLogin) {
        url = "http://localhost:5000/api/auth/register";
        body = {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          accountType: formData.accountType,
        };
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      onLogin(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "#5D6F82", // Matching UrbanStart background
      }}
    >
      <div
        className="rounded-lg shadow-xl p-8 w-full max-w-md mx-4"
        style={{
          backgroundColor: "#F5F7FA", // Matching Urban card background
          border: "1px solid #CBD5E0",
        }}
      >
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold mb-2"
            style={{
              fontFamily: "Work Sans, sans-serif",
              color: "#2A3644",
              letterSpacing: "-0.02em",
            }}
          >
            The Tax Trail
          </h1>
          <p
            className="text-lg"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#5A6F84",
            }}
          >
            {isLogin ? "Welcome back!" : "Start your journey"}
          </p>
        </div>

        {error && (
          <div
            className="mb-4 p-3 rounded text-sm"
            style={{
              backgroundColor: "#FEE2E2",
              border: "1px solid #FCA5A5",
              color: "#DC2626",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#4A5568",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#CBD5E0",
                    color: "#2D3748",
                  }}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#4A5568",
                  }}
                >
                  Account Type
                </label>
                <select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#CBD5E0",
                    color: "#2D3748",
                  }}
                >
                  <option value="student">Student</option>
                  <option value="employee">Employee</option>
                  <option value="informal">Informal Sector</option>
                </select>
              </div>
            </>
          )}

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#4A5568",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#CBD5E0",
                color: "#2D3748",
              }}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-1"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#4A5568",
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#CBD5E0",
                color: "#2D3748",
              }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded transition-all hover:brightness-110 cursor-pointer"
            style={{
              backgroundColor: "#8B9BAA",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 500,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            {loading ? "Loading..." : isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            className="text-sm hover:underline transition cursor-pointer"
            style={{
              color: "#8B9BAA",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
