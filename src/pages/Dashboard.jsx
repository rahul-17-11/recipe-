// import { useAuth } from '../context/AuthProvider';
import RecipeSearch from '../components/RecipeSearch';

const Dashboard = () => {
  // const authFirebase = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
      {/* Header with search */}
      <header className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Recipe Dashboard</h1>
          <div className="mt-4">
            <RecipeSearch />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;