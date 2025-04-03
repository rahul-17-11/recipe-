import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RecipeAppLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 overflow-hidden">
      {/* Minimal Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-orange-600">RecipeVault</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-4"
        >
          <Link to="/login"><motion.span
            to="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Login
          </motion.span></Link>
          <Link to="/signup"><motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Sign Up
          </motion.span></Link>
        </motion.div>
      </nav>

      {/* Asymmetrical Hero Section */}
      <section className="relative py-12">
        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-orange-200 rounded-l-full opacity-50 z-0"
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-5 md:col-start-2 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Recipes, <span className="text-orange-600">Reimagined</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Store, categorize, and access all your favorite recipes in one place.
              Never lose a recipe again with RecipeVault.
            </p>
            <Link to="/signup"><motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-medium text-lg hover:bg-orange-700 transition-colors"
            >
              Get Started Free
            </motion.span></Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 md:col-span-6 md:col-start-7 flex justify-center"
          >
            <img 
              src="/recipeImg.png" 
              alt="Recipe organization dashboard" 
              className="rounded-xl h-5/6 shadow-xl max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Diagonal Feature Section */}
      <section className="relative py-24">
        <motion.div
          initial={{ opacity: 0, skewY: 5 }}
          whileInView={{ opacity: 1, skewY: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-white transform -skew-y-5 z-0"
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600">
              Our app provides powerful features to organize, search, and share your recipes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-amber-50 p-8 rounded-xl shadow-sm transform md:translate-y-12"
            >
              <div className="mb-6 text-orange-600 text-2xl">📁</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Organize Categories</h3>
              <p className="text-gray-600">
                Create custom categories and tags to organize your recipes exactly how you want.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-50 p-8 rounded-xl shadow-sm"
            >
              <div className="mb-6 text-orange-600 text-2xl">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Search</h3>
              <p className="text-gray-600">
                Find any recipe instantly with our powerful search by ingredients, prep time, or dietary preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-amber-50 p-8 rounded-xl shadow-sm transform md:translate-y-24"
            >
              <div className="mb-6 text-orange-600 text-2xl">🍽️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Meal Planning</h3>
              <p className="text-gray-600">
                Plan your meals for the week and automatically generate shopping lists based on selected recipes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offset Showcase Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-5 md:col-start-1 mb-10 md:mb-0 flex justify-center md:justify-start"
            >
              <img 
                src="/mobileView.png" 
                alt="Recipe app mobile view" 
                className="rounded-xl h-2/3 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-6 md:col-start-7"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Access Your Recipes Anywhere
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're in the kitchen or at the grocery store, your recipes are always at your fingertips.
              </p>
              <motion.img 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src="/devicesView.png" 
                alt="Recipe app on different devices" 
                className="rounded-lg shadow-lg mb-8"
              />
              <Link to="/signup"><motion.span              
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Start Organizing
              </motion.span></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Circular Testimonials */}
      <section className="py-16 px-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-96 rounded-full bg-orange-400 z-0"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 md:col-span-4 md:col-start-2 bg-white p-6 rounded-xl shadow-sm"
          >
            <p className="text-gray-600 mb-4">
              "This app has completely transformed how I organize my recipes. No more searching through piles of recipe cards!"
            </p>
            <p className="font-medium text-gray-800">- Sarah K.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-12 md:col-span-4 md:col-start-7 bg-white p-6 rounded-xl shadow-sm transform md:translate-y-12"
          >
            <p className="text-gray-600 mb-4">
              "The meal planning feature saves me so much time every week. I can't believe I ever lived without it."
            </p>
            <p className="font-medium text-gray-800">- Michael R.</p>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action with Floating Elements */}
      <section className="relative py-24 px-8 bg-gradient-to-r from-orange-500 to-red-500 text-white overflow-hidden">
        {/* Decorative floating elements */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
          className="absolute top-12 left-1/4 w-20 h-20 bg-orange-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 right-1/3 w-32 h-32 bg-red-300 rounded-full opacity-20"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Organize Your Recipe Collection?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of home cooks who have simplified their recipe management with RecipeVault.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/signup"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              Sign Up For Free
            </Link>
          </motion.div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. Free plan available forever.
          </p>
        </motion.div>
      </section>

      {/* Minimalist Footer */}
      <footer className="bg-gray-800 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold">RecipeVault</h3>
            <p className="text-gray-400 mt-2">
              Your personal recipe management solution.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/login" className="text-gray-400 hover:text-white">Login</Link>
            <Link to="/signup" className="text-gray-400 hover:text-white">Sign Up</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm max-w-6xl mx-auto">
          <p>© 2025 RecipeVault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}