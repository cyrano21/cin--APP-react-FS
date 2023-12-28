import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import { FavoritesProvider } from "./components/FavoritesContexts";
import { GenreProvider } from "./components/GenreContext";

function App() {
  return (
    <FavoritesProvider>
      <GenreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<UserList />} />
          </Routes>
        </BrowserRouter>
      </GenreProvider>
    </FavoritesProvider>
  );
}

export default App;
