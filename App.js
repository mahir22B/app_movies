import "./App.css";
import MovieResults from "./Components/MovieResults/MovieResults";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  // const [sideBar, toggleSidebar] = useState(false);

  // const handletoggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <div className="App">
      <div className="new">
        <SideBar />
        <MovieResults />
      </div>
    </div>
  );
}

export default App;
