import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage,LoginPage, RegisterPage, AdminPage } from './pages';
import PrivateRoute from './components/privateRoute';
function App() {

  
  return (
    <Router>
    <Routes>
      <Route path="/login" element={ <LoginPage/> }/>
      <Route path="/" element={ <RegisterPage/> }/>
    <Route path="/admin" element= { <AdminPage />}/>
    <Route
          path="/task"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
    </Routes>
  </Router>
  );
}

export default App;
