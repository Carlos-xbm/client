import "./Home.css";
import CharacterList from "./Characters_list.js";

function Home() {
  return (
    <div className="Home">
      <div className="Home_container">
        <CharacterList />
      </div>
    </div>
  );
}
export default Home;
