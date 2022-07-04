import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/main';
import Login from './components/Register-Login/login';
import Register from './components/Register-Login/register';
import Admin from './components/Register-Login/admin';
import PrivateRoute from './components/privateRoute';
function App() {

  
  return (
    <Router>
    <Routes>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/" element={ <Register/> }/>

    <Route path="/admin" element= { <Admin />}/>
      
    <Route
          path="/task"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
    </Routes>
  </Router>
  );
}

export default App;
