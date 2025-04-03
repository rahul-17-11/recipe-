import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
// import RecipeDetail from "./components/RecipeDetail"
import RecipeCard from "./components/RecipeCard"
import CheifOnWork from "./components/CheifOnWork"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <div className="bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe/:recipeId" element={<RecipeCard />} />
        </Routes>
    </div>
  )
}

export default App

    // <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
    //   {/* Header with search */}
    //   <header className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
