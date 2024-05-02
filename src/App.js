import React, { useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import LoginModal from "./components/LoginModal";
import AdminPanel from "./components/AdminPanel";
import Alumnos from "./components/Alumno";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar los estilos CSS de Bootstrap
import "./index.css";

const App = () => {
  const [role, setRole] = useState('student'); // Valor predeterminado: estudiante
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (username, password, role) => {
    setIsLoggedIn(true);
    setRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('student'); // Cambiar el rol de nuevo a estudiante al cerrar sesión
  };

  return (
    <div style={{ position: "relative" }}>
      <Header
        onHamburgerClick={() => setShowModal(true)} 
        onLogout={handleLogout} 
        isLoggedIn={isLoggedIn} // Pasamos el estado de inicio de sesión al Header
      />
      {showModal && !isLoggedIn && (
        <LoginModal onClose={() => setShowModal(false)} onLogin={handleLogin} />
      )}
      {!isLoggedIn && <Carousel />}
      {/* Renderizar el panel de administrador o el área de alumnos según el rol */}
      <div style={{ position: "absolute", top: "60px", left: 0, right: 0 }}>
        {isLoggedIn && role === 'teacher'  && <AdminPanel />}
        {isLoggedIn && role === 'student' && <Alumnos />}
      </div>
    </div>
  );
};

export default App;
