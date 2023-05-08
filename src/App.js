import Home from "./components/Home/home";
import Profile from "./components/profile/profile";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Profile/>
    </div>
  );
}

export default App;
