import React, { useState } from 'react';
import { ChefHat, User, Mail, Lock, UtensilsCrossed, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Signup = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const authFirebase = useAuth();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value.trim() });
    setError("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name) {
      setError("Name is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      setError("Enter a valid email.");
      return;
    }
    if (userData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (userData.password !== userData.confirmpassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      setLoading(true);
      const userinputs = await authFirebase.registerUser(
        userData.email,
        userData.password
      );
      await authFirebase.putData(`users/${userinputs.user.uid}`, {
        name: userData.name,
        email: userData.email,
      });
      alert("Account created successfully!");
      navigate("/dashboard");
    } catch (error) {
      setError(
        error.code === "auth/email-already-in-use"
          ? "Email is already registered. Try logging in."
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md transform transition-all">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-8 py-6 bg-gradient-to-r from-emerald-400 to-teal-500">
          <div className="text-center">
            <div className="relative inline-block">
              <ChefHat className="h-12 w-12 text-white mx-auto" />
              <UtensilsCrossed className="h-6 w-6 text-white absolute -bottom-1 -right-1" />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">Join Our Kitchen!</h2>
            <p className="mt-2 text-white/90">Create your account to start cooking</p>
          </div>
        </div>

        <div className="p-8">
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Full name"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Email address"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Password"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                name="confirmpassword"
                value={userData.confirmpassword}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="confirmpassword"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 flex justify-center items-center bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-lg hover:from-emerald-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate("/login")}
                className="text-emerald-500 hover:text-emerald-600 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            Join thousands of food enthusiasts sharing their recipes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
