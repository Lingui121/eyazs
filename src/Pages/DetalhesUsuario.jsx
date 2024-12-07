import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SquarePlus } from "lucide-react";

export default function DetalhesUsuario() {
  const [detalhe, setDetalhe] = useState({});
  const [dataSubscricao, setDataSubscricao] = useState("");
  const [status, setStatus] = useState(0);
  const { id } = useParams();

  async function mostrarDetalhesUsuario() {
    try {
      const dados = await axios.get(
        `https://api-eyazs-production.up.railway.app/detalheusuario/${id}`
      );
      if (dados) {
        setDetalhe(dados.data);
        const dataTransacao = new Date(dados.data.dataSubscricao);
        const dia = String(dataTransacao.getDate()).padStart(2, "0");
        const mes = String(dataTransacao.getMonth() + 1).padStart(2, "0");
        const ano = String(dataTransacao.getFullYear());
        const dataFormatada = `${dia}-${mes}-${ano}`;
        setDataSubscricao(dataFormatada);
      } else {
        console.log("Dados Nao Disponiveis!");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    mostrarDetalhesUsuario();
    console.log(detalhe);
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="bg-blue-500 h-[180px]">
        <NavBar />
      </div>
      <div className="flex justify-center">
        <div className="w-[1000px] flex justify-center">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                    Nome
                  </th>
                  <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                    Contacto
                  </th>
                  <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                    Endereço
                  </th>
                  <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                    Nuit
                  </th>
                  <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                    Plano
                  </th>
                  <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                    Data Subscriçao
                  </th>
                  <th className="border sticky top-0 px-6 py-3 text-center bg-gray-200">
                    Colab. Associado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border text-center text-md py-4 lowercase">
                    {detalhe.nome}
                  </td>
                  <td className="border text-center text-md py-4 lowercase">
                    {detalhe.contacto}
                  </td>
                  <td className="border text-center text-md py-4 lowercase">
                    {detalhe.endereco}
                  </td>
                  <td className="border text-center text-md py-4 lowercase">
                    {detalhe.nuit}
                  </td>
                  <td className="border text-center text-md py-4 lowercase">
                    {detalhe.plano}
                  </td>
                  <td className="border text-center text-md py-4 lowercase">
                    {dataSubscricao}
                  </td>
                  <td className="border text-center text-md py-4 lowercase">
                    {detalhe.colaboradorAssociado}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
      <div className="bg-blue-500">
        <Footer />
      </div>
    </div>
  );
}
