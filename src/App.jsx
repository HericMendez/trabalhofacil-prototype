import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes"; // Importando as rotas

const App = () => {
  return (
    <Router>
      <Routes />  {/* Renders the routes configured in Routes.jsx */}
    </Router>
  );
};

export default App;
