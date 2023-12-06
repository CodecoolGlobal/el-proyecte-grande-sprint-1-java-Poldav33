import './App.css'
import Navigationbar from "./components/navigationbar";
import HomePage from "./pages/HomePage.tsx";

function App() {

  return (
      <div className={"App"}>
            <Navigationbar/>
            <HomePage />
      </div>
  )
}

export default App
