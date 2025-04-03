import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
// import RecipeDetail from "./components/RecipeDetail"
import RecipeCard from "./components/RecipeCard"

function App() {

  return (
    
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe/:recipeId" element={<RecipeCard />} />
        </Routes>
  )
}

export default App

    // <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
    //   {/* Header with search */}
    //   <header className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
