import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";

export default function Recibo() {
  const { id } = useParams();
  const reciboref = useRef();
  const [recibo, setRecibo] = useState({});
  const [dataTransacao, setDataTranscao] = useState("");
  const [dataDownload, setDataDownload] = useState("");

  async function inserirDataDownloar() {
    try {
      const data = gerarDataAtual();
      console.log(data);
      const dataDownload = await axios.put(
        `https://api-eyazs-production.up.railway.app/recibo/${id}`,
        {
          dataDownload: data,
        }
      );
      if (dataDownload) {
        console("Data Adicionada com Sucesso!");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  const gerarDataAtual = () => {
    const dataAtual = new Date();

    // Obtém as partes da data
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Adiciona zero à esquerda, se necessário
    const dia = String(dataAtual.getDate()).padStart(2, "0");

    // Obtém as partes do horário
    const horas = String(dataAtual.getHours()).padStart(2, "0");
    const minutos = String(dataAtual.getMinutes()).padStart(2, "0");
    const segundos = String(dataAtual.getSeconds()).padStart(2, "0");

    // Constrói a data no formato desejado
    const dataFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}:${segundos}`;

    return dataFormatada;
  };

  function baixarRecibo() {
    const elemento = reciboref.current;
    const option = {
      margin: 10,
      filename: "recibo.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a5", orientation: "portrait" },
    };
    html2pdf().set(option).from(elemento).save();
  }

  async function mostrarRecibo() {
    try {
      const dadosRecibo = await axios.get(`https://api-eyazs-production.up.railway.app/recibo/${id}`);
      if (dadosRecibo) {
        setRecibo(dadosRecibo.data);
        const dataTransacao = new Date(dadosRecibo.data.dataTransacao);
        const dia = String(dataTransacao.getDate()).padStart(2, "0");
        const mes = String(dataTransacao.getMonth() + 1).padStart(2, "0");
        const ano = dataTransacao.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;
        setDataTranscao(dataFormatada);
        //setDataDownload(formatarData(dadosRecibo.data.dataDownload))
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    mostrarRecibo();
  }, []);

  return (
    <div className="flex justify-center font-questrial  bg-gray-400 w-full h-screen shadow-md p-8">
      <div className=" h-auto print-a5 bg-white p-8" ref={reciboref}>
        <div className="border-[1px] border-black p-6">
          <div className="border-[1px] border-black flex justify-between items-center pr-4 mt-[1px] h-[110px] font-medium">
            <div>
              <img width={150} src="../../images/logo.png" alt="Logo" />
            </div>
            <div className="flex flex-col">
              <h1 className="mx-auto text-[16px]">Eyazs Imperium</h1>
              <span className="text-[11px] mx-auto text-wrap">
                8º Bairro Macurungo, rua 33 Beira-Mozambique
              </span>
              <span className="text-[11px]">
                Contacto: Cell: +258 86 601 2012/ +258 87 89 68 000 
                Email: comercial@eyazs.com
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-center font-semibold">
              <div className="flex flex-col">
                <span className="text-[11px] mx-auto">NUIT: 400830053</span>
                <span className="text-[11px]">DELEGACAO DA BEIRA</span>
              </div>
            </div>
            <div className="flex justify-between font-medium">
              <span className="font-medium text-[12px]">
                Comprovativo de Pagamento
              </span>
              <span className="font-medium text-[12px]">
                recibo Nº: {recibo.numeroRecibo}
              </span>
            </div>
            <div className=" mb-1 font-medium text-[12px] ">Dados da Transacao</div>
            <div className="border-[1px] border-black "></div>
            <div className="w-full">
              <table className="w-full mt-1 mb-2">
                <thead>
                  <tr>
                    <th className=" font-medium text-[10px]">username</th>
                    <th className=" font-medium text-[10px]">Meio de Pagamento</th>
                    <th className=" font-medium text-[10px]">Cell da Transacao</th>
                    <th className=" font-medium text-[10px]">Moeda</th>
                    <th className=" font-medium text-[10px]">Valor</th>
                    <th className=" font-medium text-[10px]">Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-light">
                    <td className=" text-[12px] text-center">
                      {recibo.userName}
                    </td>
                    <td className=" text-[12px] text-center">
                      {recibo.meioPagamento}
                    </td>
                    <td className=" text-[12px] text-center">
                      {recibo.numeroTelefone}
                    </td>
                    <td className=" text-[12px] text-center">MZN</td>
                    <td className=" text-[12px] text-center">{recibo.valor}</td>
                    <td className=" text-[12px] text-center">
                      {dataTransacao}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full">
              <table className="w-full mt-1 mb-2">
                <thead>
                  <tr className="border">
                    <th className=" font-medium text-[11px] border-[1px] py-1 pb-1 border-black">
                      Referencia
                    </th>
                    <th className=" font-medium text-[11px] border-[1px] py-1 pb-1 border-black">
                      Descricao
                    </th>
                    <th className=" font-medium text-[11px] border-[1px] py-1 pb-1 border-black">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="text-center py-1 pb-1 border-[1px] text-[11px] border-black">
                      {recibo.numeroRecibo}
                    </td>
                    <td className="text-center py-1 pb-1 border-[1px] text-[11px] border-black">
                      {recibo.descricao}
                    </td>
                    <td className="text-center py-1 text-[11px] pb-1 border-[1px] border-black">
                      {recibo.valor}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between">
              <span className="text-[11px]">
                Documento Processado por Computador.
              </span>
              <span className="text-[11px]"> Data e Hora {dataDownload} </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-start mt-28 ml-8">
        <button
          onClick={() => {
            setDataDownload(gerarDataAtual());
            baixarRecibo();
            console.log(gerarDataAtual());
          }}
          type="button"
          className="bg-gray-300 px-2 py-1 border-none rounded-md text-red-500 font-medium"
        >
          Baixar
        </button>{" "}
        <br /> <br />
        <button
          onClick={() => {
            window.print();
          }}
          className="bg-gray-300 px-2 py-1 border-none rounded-md text-red-500 font-medium"
        >
          Imprimir
        </button>
      </div>
    </div>
  );
}
