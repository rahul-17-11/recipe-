import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function RecipeInstructions() {
  const navigate = useNavigate();
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=dd7639a2f78a4d3580356de486a5f2e0`
        );

        if (response.data && response.data.length > 0) {
          setInstructions(response.data);
        } else {
          setInstructions([]); // Set to empty array if no instructions are found
        }
      } catch (err) {
        setError('Failed to fetch recipe instructions. Please try again later.');
        console.error('Error fetching recipe instructions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-orange-500 hover:text-orange-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Recipe
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6">
            {instructions.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8 last:mb-0">
                {section.name && (
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {section.name}
                  </h2>
                )}

                <div className="space-y-6">
                  {section.steps.map((step) => (
                    <div key={step.number} className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-orange-600 font-semibold">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 mb-3">{step.step}</p>

                        {(step.ingredients?.length > 0 || step.equipment?.length > 0) && (
                          <div className="flex flex-wrap gap-4 mt-2">
                            {step.ingredients?.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold text-gray-600 mb-1">Ingredients needed:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {step.ingredients.map((ingredient) => (
                                    <span
                                      key={ingredient.id}
                                      className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                                    >
                                      {ingredient.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {step.equipment?.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold text-gray-600 mb-1">Equipment needed:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {step.equipment.map((item) => (
                                    <span
                                      key={item.id}
                                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                                    >
                                      {item.name}
                                      {item.temperature && ` (${item.temperature.number}°${item.temperature.unit})`}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {step.length && (
                          <div className="mt-2 flex items-center">
                            <span className="text-sm text-gray-500">
                              ⏱️ {step.length.number} {step.length.unit}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}