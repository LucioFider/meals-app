import "./App.css";
import { Favorites, Search, Meals, Modal } from "./components";
import { useGlobalContext } from "./context/context";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
