import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Olá Paciente</C.Title>

      <Button Text="Consultas agendadas" onClick={() => [signout(), navigate("/")]}>
      Consultas agendadas
      </Button>

      <Button Text="Consultas canceladas" onClick={() => [signout(), navigate("/")]}>
      Consultas canceladas
      </Button>
    </C.Container>
  );
};

export default Home;