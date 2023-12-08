import './App.css'
import Navigationbar from "./components/navigationbar";
import { Outlet } from 'react-router-dom';


function App() {

  return (
      <div className={"App"}>
            <Navigationbar />
            <Outlet />
      </div>
  )
}

export default App;
