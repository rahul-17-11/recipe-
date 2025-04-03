import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`https://your-api-endpoint/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Recipe not found');
        }
        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading recipe details...</p>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-lg text-red-600 mb-4">{error || 'Recipe not found'}</p>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={handleGoBack}
          className="mb-6 flex items-center text-orange-500 hover:text-orange-700"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Recipes
        </button>
        
        <div className="mb-8">
          <RecipeCard recipe={recipe} />
        </div>
        
        {/* Additional recipe details can be added here */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Details</h2>
          
          {recipe.summary && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Summary</h3>
              <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
            </div>
          )}
          
          {recipe.instructions && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Instructions</h3>
              <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
            </div>
          )}
          
          {recipe.winePairing && recipe.winePairing.pairingText && (
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Wine Pairing</h3>
              <p className="text-gray-700">{recipe.winePairing.pairingText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;