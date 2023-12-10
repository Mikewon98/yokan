import { Route, Routes } from "react-router-dom";
import FeederLoginPage from "./pages/FeederLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FeederLoginPage />} />
        <Route path='/admin' element={<AdminLoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
