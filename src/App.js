import AppRoutes from './Routes/index';
import { BrowserRouter as Router } from 'react-router-dom'
import { MoviesProvider } from './Context/moviesContext'
function App() {
  return (
    <MoviesProvider>
      <Router>
        <AppRoutes />
      </Router>
    </MoviesProvider>
  );
}

export default App;
