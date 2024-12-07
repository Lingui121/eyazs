import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import InputPagamento from "../components/Inputs/InputPagamento";
import InputAdd from "../components/Inputs/InputAdd";
import axios from "axios";

export default function AdicionarClientes() {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [contacto, setContacto] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nuit, setNuit] = useState("");
  const [plano, setPlano] = useState("");
  const [data, setData] = useState("");
  const [colaborador, setColaborador] = useState("");

  async function adicionarDadosCliente() {
    try {
      const inserirDados = await axios.post("https://api-eyazs-production.up.railway.app/detalhe", {
        idUsuario: id,
        nome: nome,
        contacto: contacto,
        dataSubscricao: data,
        endereco: endereco,
        nuit: nuit,
        plano: plano,
        colaboradorAssociado: colaborador,
      });
      if(inserirDados){
        console.log("Dados inseridos com Sucesso")
      }else{
        console.log("Hoive algum erro ao cadastrar o cliente!")
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  const propsInputNome = {
    type: "text",
    placeholder: "Nome",
    mudar: (e) => setNome(e.target.value),
  };
  const propsInputContacto = {
    type: "text",
    placeholder: "Contacto",
    mudar: (e) => setContacto(e.target.value),
  };

  const propsInputEndereco = {
    type: "text",
    placeholder: "Endereço",
    mudar: (e) => setEndereco(e.target.value),
  };

  const propsInputNuit = {
    type: "text",
    placeholder: "Nuit",
    mudar: (e) => setNuit(e.target.value),
  };

  const propsInputPlano = {
    type: "text",
    placeholder: "Plano",
    mudar: (e) => setPlano(e.target.value),
  };

  const propsInputData = {
    type: "date",
    placeholder: "Data",
    mudar: (e) => setData(e.target.value),
  };

  const propsInputColab = {
    type: "text",
    placeholder: "Colaborador Associado",
    mudar: (e) => setColaborador(e.target.value),
  };

  return (
    <div className="flex justify-between h-screen flex-col">
      <div className="bg-blue-500 h-[150px]">
        <NavBar />
      </div>
      <div className="flex justify-center">
        <div className="m-6">
          <div className="w-[800px] border py-6 rounded-xl">
            <div className="w-[60%] mx-auto flex flex-col">
              <div className="mx-auto border rounded-xl bg-gray-50 m-2 p-2 py-4">
                <h2 className="mx-auto text-[25px]">Formulario de Clientes</h2>
              </div>
              <div className="m-1">
                <InputAdd {...propsInputNome} />
              </div>
              <div className="flex justify-between m-1">
                <div className="w-[49%]">
                  <InputAdd {...propsInputContacto} />
                </div>
                <div className="w-[49%]">
                  <InputAdd {...propsInputEndereco} />
                </div>
              </div>
              <div className="flex justify-between m-1">
                <div className="w-[49%]">
                  <InputAdd {...propsInputNuit} />
                </div>
                <div className="w-[49%]">
                  <InputAdd {...propsInputPlano} />
                </div>
              </div>
              <div className="flex justify-between m-1">
                <div className="w-[49%]">
                  <InputAdd {...propsInputData} />
                </div>
                <div className="w-[49%]">
                  <InputAdd {...propsInputColab} />
                </div>
              </div>
              <button className="bg-blue-500 w-full py-1 text-white font-medium my-1 border rounded-md" 
                onClick={() => {
                    adicionarDadosCliente()
                }}
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500">
        <Footer />
      </div>
    </div>
  );
}
