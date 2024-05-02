import React, { useState } from 'react';
import { Modal, Button, Form, Breadcrumb } from 'react-bootstrap'; // Importar componentes de Bootstrap
import '../../src/componentes.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Valor predeterminado: estudiante

  const handleLogin = () => {
    // Lógica de autenticación...
    if (username === 'admin' && password === 'admin') {
      // Si el rol seleccionado es "teacher", se llama a la función onLogin con el rol "teacher"
      if (role === 'teacher') {
        onLogin(username, password, 'teacher'); // Pasamos los datos de usuario, contraseña y rol "teacher"
        onClose(); // Cerrar modal después de iniciar sesión
      }
    } else {
      // Si el rol seleccionado es "student", se llama a la función onLogin con el rol "student"
      if (role === 'student') {
        onLogin(username, password, 'student'); // Pasamos los datos de usuario, contraseña y rol "student"
        onClose(); // Cerrar modal después de iniciar sesión
      } else {
        // Si el rol seleccionado no es "student" ni "teacher", mostrar un error
        alert('Rol no válido');
      }
    }
  };

  return (
    <Modal
      show={true}
      onHide={onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Breadcrumbs para seleccionar el rol */}
        <Breadcrumb>
          <Breadcrumb.Item active={role === 'student'} onClick={() => setRole('student')}>Estudiante</Breadcrumb.Item>
          <Breadcrumb.Item active={role === 'teacher'} onClick={() => setRole('teacher')}>Maestro</Breadcrumb.Item>
        </Breadcrumb>
        
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Ingresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
