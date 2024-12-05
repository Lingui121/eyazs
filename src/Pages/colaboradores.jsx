import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { ShieldPlus } from "lucide-react";
import axios from "axios";

export default function Colaboradores() {

  const [usuarios, setUsuarios] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  const navigate = useNavigate();

  async function mostrarColaboradores() {
    try {
      const dados = await axios.get("http://localhost:8000/usuariosids");
      if (dados) {
        setColaboradores(dados.data);
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  async function habilitarColaborador(id) {
    try {
      const dados = await axios.get(`http://localhost:8000/habilitar/${id}`);
      if (dados) {
        console.log("Colaborador Habilitado com Sucesso!");
      } else {
        console.log("Falha ao Habilitar Colaborador!");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    //mostrarUsuarios();
    mostrarColaboradores();
    console.log(usuarios);
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="bg-blue-500">
        <NavBar />
      </div>
      <div className="flex justify-center">
        <div className="w-[1200px] border h-[300px] flex justify-between">
          <div className="border w-full overflow-auto">
            <table className="min-w-full">
              <thead className="bg-gray-200 h-full">
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
                    Habilitar
                  </th>
                </tr>
              </thead>
              <tbody>
                {colaboradores
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((colaborador, i) => {
                    return (
                      <tr key={i}>
                        <td className="border text-center text-sm lowercase">
                          {" "}
                          {i + 1}{" "}
                        </td>
                        <td className="border text-center text-sm lowercase">
                          {" "}
                          {colaborador.name}{" "}
                        </td>
                        <td className="border text-center text-sm lowercase">
                          {" "}
                          {colaborador.disabled === "false"
                            ? "Activo"
                            : "Desativado"}{" "}
                        </td>
                        <td className="border text-center text-sm lowercase">
                          {" "}
                          {colaborador.profile}{" "}
                        </td>
                        <td className="border text-center text-sm lowercase group">
                          <ShieldPlus
                            className="mx-auto h-6 cursor-pointer hover:bg-zinc-100 w-full"
                            onClick={() => {
                             // habilitarColaborador(colaborador.idUsuario);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-blue-500">
        <Footer />
      </div>
    </div>
  );
}
