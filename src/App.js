import AppRoutes from './Routes/index';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
