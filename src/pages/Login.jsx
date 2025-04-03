import React, { useState } from "react";
import { ChefHat, Coffee, Lock, Mail, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import CheifOnWork from "../components/CheifOnWork";

const Login = () => {
  const authFirebase = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value.trim() });
    setError(""); // Clear errors when user starts typing
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!loginData.email || !loginData.password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      setLoading(true);
      await authFirebase.loginUser(loginData.email, loginData.password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Try again.");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex sm:flex-col lg:flex-row justify-center  gap-3 ml-10 py-12 bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
      <div className="w-full max-w-md transform transition-all">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 bg-gradient-to-r from-orange-400 to-red-500">
            <div className="text-center">
              <ChefHat className="h-12 w-12 text-white mx-auto" />
              <h2 className="mt-4 text-3xl font-bold text-white">
                Welcome Back Chef!
              </h2>
              <p className="mt-2 text-white/90">
                Sign in to access your recipe collection
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-4 bg-red-100 text-red-600 py-2 px-4 rounded-lg text-center">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg hover:from-orange-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* Signup Redirect */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/signup")}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-center">
              <Coffee className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-500 text-sm">
                Brew your culinary journey with us
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-lg">
        <CheifOnWork />
      </div>
    </div>
  );
};

export default Login;