import { Button, TextInput, TextInputField } from "evergreen-ui";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { handleLogin } from "../helpers/firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("123456");

  const authContext = useContext(AuthContext);
  const { setUser } = authContext; 

  const emailOnchange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordOnchange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password, setUser);//recibe el email, password y el setState del context para guardar las credenciales de acceso.
    
  }

  return (
    <main className="w-screen h-screen bg-slate-50 flex justify-center items-center">
      <form className="w-80 h-96 shadow-lg rounded-xl bg-white px-4 py-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold text-slate-800 text-center my-6">
          Welcome to Holiday App
        </h1>

        <TextInputField
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={emailOnchange}
          label=""
        />
        <TextInputField
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={passwordOnchange}
          label=""
        />
        <Button marginRight={16} appearance="primary">
          Login
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
