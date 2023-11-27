import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #3498db; /* Primary color - Blue */
`;

const LoginForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  text-align: center;
  color: #2c3e50; /* Dark grayish blue */
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #e74c3c; /* Primary color - Red */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #c0392b; /* Dark red */
  }
`;

// Functional Component
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <LoginPageWrapper>
      <LoginForm>
        <Title>Login</Title>
        <InputWrapper>
          <Input type="text" placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <ToggleButton onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </ToggleButton>
        </InputWrapper>
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginPageWrapper>
  );
};

export default Login;
