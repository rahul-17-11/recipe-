import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Clock, Users, ChefHat, Loader2, ChevronLeft } from 'lucide-react';
import RecipeInstructions from './RecipeInstructions';

export default function RecipeCard() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=dd7639a2f78a4d3580356de486a5f2e0`
        );
        setRecipe(response.data);
      } catch (err) {
        setError('Failed to fetch recipe. Please try again later.');
        console.error('Error fetching recipe:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!recipe) return null;

  if (showInstructions) {
    return (
      <RecipeInstructions
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img 
            className="w-full h-full object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              {recipe.dishTypes?.map((type, index) => (
                <span key={index} className="px-3 py-1 bg-orange-500 rounded-full text-sm font-medium">
                  {type}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-gray-200">{recipe.sourceName}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-8 p-4 bg-orange-50 rounded-xl">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">{recipe.readyInMinutes} minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">{recipe.servings} servings</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-500 font-semibold">
                ${(recipe.pricePerServing / 100).toFixed(2)}
              </span>
              <span className="text-gray-500">per serving</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About this recipe</h2>
            <div 
              className="text-gray-600 prose"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
          </div>

          <div className="grid gap-4 mb-8">
            <button
              onClick={() => setShowIngredients(!showIngredients)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition duration-200"
            >
              <span className="font-medium">
                {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
              </span>
              <ChefHat className="w-5 h-5" />
            </button>

            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition duration-200"
            >
              <span className="font-medium">View Instructions</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>

          {showIngredients && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {recipe.extendedIngredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                  <div>
                    <span className="font-medium">
                      {ingredient.amount} {ingredient.unit}
                    </span>
                    <span className="text-gray-700"> {ingredient.name}</span>
                    {ingredient.meta?.length > 0 && (
                      <span className="block text-sm text-gray-500 mt-1">
                        ({ingredient.meta.join(', ')})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {recipe.winePairing?.pairedWines?.length > 0 && (
            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold mb-4">Wine Pairings</h2>
              <p className="text-gray-600 mb-4">{recipe.winePairing.pairingText}</p>
              <div className="flex flex-wrap gap-2">
                {recipe.winePairing.pairedWines.map((wine, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {wine}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}