import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CardClientes from "../components/Cards/CardClientes";
import CardColaboradores from "../components/Cards/CardColaboradores";
import CardHistoricoUsuarios from "../components/Cards/CardHistoricoUsuarios";

export default function Admin() {
  const [colaboradores, setColaboradores] = useState([]);
  const navigate = useNavigate();

  async function mostrarColaboradores() {
    try {
      const dados = await axios.get("https://api-eyazs-production.up.railway.app/usuariosids");
      if (dados) {
        setColaboradores(dados.data);
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    mostrarColaboradores();
  }, []);

  const propsCardPlanos = { descricao: "Clientes" };
  const propsCardPagamento = { descricao: "Colaboradores" };
  const propsCardHistorico = { descricao: "Histórico" };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Navbar */}
      <div className="bg-blue-500 h-[240px]">
        <NavBar />
      </div>

      {/* Conteúdo Principal */}
      <div className="w-full px-1 sm:px-8 mx-auto lg:-mt-[100px] flex justify-center -mt-[60px]">
        <div className="flex flex-col items-center gap-6 lg:flex-row  lg:justify-center">
          {/* Card Clientes */}
          <button
            onClick={() => navigate("clientes")}
            className="w-full sm:w-[80%] lg:w-1/3"
          >
            <CardClientes {...propsCardPlanos} />
          </button>

          {/* Card Colaboradores */}
          <button
            onClick={() => navigate("colaboradores")}
            className="w-full sm:w-[80%] lg:w-1/3"
          >
            <CardColaboradores {...propsCardPagamento} />
          </button>

          {/* Card Histórico */}
          <button
            onClick={() => alert("Em Manutenção")}
            className="w-full sm:w-[80%] lg:w-1/3"
          >
            <CardHistoricoUsuarios {...propsCardHistorico} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-500 mt-8">
        <Footer />
      </div>
    </div>
  );
}
