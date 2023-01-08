import AppRouter from "./AppRouter";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </div>
  );
}

export default App;
