import React, { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const navigate = useNavigate();

  // Debounce Effect (Waits for user to stop typing)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  // Fetch recipes when debouncedQuery changes
  useEffect(() => {
    if (!debouncedQuery) {
      setRecipes([]);
      return;
    }

    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=dd7639a2f78a4d3580356de486a5f2e0&query=${debouncedQuery}`
        );
        setRecipes(response.data.results || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [debouncedQuery]);

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Search for recipes..."
        />
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="mt-4 text-center">
          <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
        </div>
      )}

      {/* Recipe Results */}
      <div className="mt-4 space-y-4">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
              </div>
              {/* View Recipe Button */}
              <button
                onClick={() => navigate(`/recipe/${recipe.id}`)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                View Recipe
              </button>
            </div>
          ))
        ) : (
          !loading &&
          debouncedQuery && (
            <p className="mt-4 text-gray-500 text-center">
              No recipes found. Try another search.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;
