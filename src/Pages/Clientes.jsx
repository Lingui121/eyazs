import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoIcon, Plus } from "lucide-react";
import InputPesquisa from "../components/Inputs/InputPesquisa";

export default function Clientes() {
  const [usuarios, setUsuarios] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  const [detalhe, setDetalhe] = useState({});
  const [idUsuario, setIdUsuario] = useState();
  const [usuario, setUsuario] = useState("");
  const [pesquisa, setPesquisa] = useState([]);
  const navigate = useNavigate();

  async function mostrarUsuarios() {
    try {
      const dados = await axios.get("http://localhost:8000/usuarios");
      if (dados) {
        const listaOrdenada = dados.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setUsuarios(listaOrdenada);
      } else {
        console.log("Usuarios Não Encontrados!");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  async function mostrarPesquisa() {
    try {
      const dadosPesquisa = await axios.post(
        "http://localhost:8000/pesquisarcliente",
        {
          username: usuario,
        }
      );
      if (dadosPesquisa.data[0]) {
        setPesquisa(dadosPesquisa.data);
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  // Monitorar mudanças no input de pesquisa
  useEffect(() => {
    if (usuario) {
      mostrarPesquisa();
    } else {
      setPesquisa([]); // Limpar resultados de pesquisa quando o campo estiver vazio
    }
  }, [usuario]);

  // Carregar a lista completa de usuários na inicialização
  useEffect(() => {
    mostrarUsuarios();
  }, []);

  const propsInputPesquisa = {
    type: "search",
    mudar: (e) => setUsuario(e.target.value),
    placeholder: "pesquise o usuário",
    value: usuario,
  };

  return (
    <div>
      <div className="flex flex-col justify-between h-screen">
        <div className="bg-blue-500">
          <NavBar />
        </div>
        <div className="flex justify-center m-8">
          <div className="w-[1000px] flex justify-between flex-col gap-4">
            <div>
              <InputPesquisa {...propsInputPesquisa} />
            </div>
            <div className="border w-full h-full ">
              {pesquisa.length > 0 ? (
                <table className="min-w-full h-auto overflow-y-auto ">
                  <thead>
                    <tr>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Ordem
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Nome
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Estado
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Plano
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Serviço
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Info. Cliente
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Recibos
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Adicionar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pesquisa.map((usuario, i) => (
                      <tr key={i}>
                        <td className="border text-center text-sm lowercase ">
                          {i + 1}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.name}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.disabled === "false" ? "Ativo" : "Desativado"}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.profile}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.service}
                        </td>
                        <td className="border text-center text-sm">
                          <InfoIcon
                            size={22}
                            className="mx-auto hover:bg-zinc-100 w-full"
                            onClick={() => {
                              navigate(`detalhesusuario/${usuario.idUsuario}`);
                            }}
                          />
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 mx-auto w-full cursor-pointer hover:bg-zinc-100"
                            onClick={() => {
                              navigate(`recibosusuario/${usuario.idUsuario}`);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                        </td>
                        <td className="border text-center text-sm hover:bg-zinc-100">
                          <Plus
                            className="mx-auto"
                            onClick={() => {
                              navigate(`adicionarcliente/${usuario.idUsuario}`);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="min-w-full h-screen overflow-y-auto ">
                  <thead className="bg-gray-200 h-full">
                    <tr className="">
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Ordem
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Nome
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Estado
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Plano
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Serviço
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Info. cliente
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Recibos
                      </th>
                      <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                        Adicionar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map((usuario, i) => (
                      <tr key={i}>
                        <td className="border text-center text-sm lowercase ">
                          {i + 1}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.name}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.disabled === "false" ? "Ativo" : "Desativado"}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.profile}
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          {usuario.service}
                        </td>
                        <td className="border text-center text-sm">
                          <InfoIcon
                            size={22}
                            className="mx-auto hover:bg-zinc-100 w-full"
                            onClick={() => {
                              navigate(`detalhesusuario/${usuario.idUsuario}`);
                            }}
                          />
                        </td>
                        <td className="border text-center text-sm lowercase ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 mx-auto w-full cursor-pointer hover:bg-zinc-100"
                            onClick={() => {
                              navigate(`recibosusuario/${usuario.idUsuario}`);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                        </td>
                        <td className="border text-center text-sm hover:bg-zinc-100">
                          <Plus
                            className="mx-auto"
                            onClick={() => {
                              navigate(`adicionarcliente/${usuario.idUsuario}`);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <div className="bg-blue-500 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
