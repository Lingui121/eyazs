import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import InputPagamento from "../components/Inputs/InputPagamento";

export default function PagamentoViaMpesa() {
  const inputRef = useRef(null);

  const [profile, setProfile] = useState("");
  const [preco, setPreco] = useState(null);
  const [numero, setNumero] = useState("");

  const gerarLetrasAleatorias = (tamanho) => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let resultado = "";
    for (let i = 0; i < tamanho; i++) {
      resultado += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return resultado;
  };

  async function recarregarPacote() {
    try {
      let valoresAleatorios = gerarLetrasAleatorias(12);
      const dadosDoLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      console.log("valores aleatorios: " + valoresAleatorios)
      console.log("Numero: " + "258" + numero)
      console.log("preco Normal: " + preco)
      console.log("preco Transformado : " + parseFloat(preco))
      console.log("")
      const dados = await axios.put(`http://localhost:8000/pagamento/${dadosDoLocalStorage.idUsuario}`,
        {
          transaction_ref: "EyazsImperium",
          msisdn: `258${numero}`,
          amount: parseFloat(preco),
          thirdparty_ref: valoresAleatorios,
        }
      );
      if (dados) {
        console.log(dados.data)
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  async function mostrarPlano() {
    try {
      const dadosDoLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      const dadosAtuais = await axios.get(`http://localhost:8000/usuario/${dadosDoLocalStorage.idUsuario}`)
      if (dadosDoLocalStorage.profile === "PLANO-6Mbps") {
        setPreco(2320);
      } else if (dadosDoLocalStorage.profile === "PLANO-8Mbps") {
        setPreco(3480);
      } else if (dadosDoLocalStorage.profile === "PLANO-10Mbps") {
        setPreco(5800);
      } else if (dadosDoLocalStorage.profile === "PLANO-12Mbps") {
        setPreco(8120);
      } else if (dadosDoLocalStorage.profile === "PLANO-14Mbps") {
        setPreco(9628);
      } else if (dadosDoLocalStorage.profile === "PLANO-16Mbps") {
        setPreco(11948);
      } else if (dadosDoLocalStorage.profile === "PLANO-18Mbps") {
        setPreco(13688);
      } else if (dadosDoLocalStorage.profile === "PLANO-20Mbps") {
        setPreco(14500);
      } else if (dadosDoLocalStorage.profile === "PLANO-20Mbps") {
        setPreco(16008);
      }else if(dadosDoLocalStorage.profile === "DESATVADO"){
        setPreco(dadosAtuais.data.precousuario)
      }
      setProfile(dadosAtuais.data.profileusuario);
    } catch (erro) {
      console.log(erro);
    }
  }

  const propsInputPagamentoMpesa = {
    type: "text",
    placeholder: "digite o numero do Mpesa",
    mudar: (e) => setNumero(e.target.value)
  };

  function pegarNumero(){
    if(inputRef.current){
      setNumero(inputRef.current.value)
    }else{
      console.log("Referencia ainda nao encontrada!")
    }
  }

  useEffect(() => {
    mostrarPlano();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
    {/* NavBar */}
    <div className="bg-blue-500">
      <NavBar />
    </div>
  
    {/* Conteúdo Principal */}
    <div className="flex-grow flex flex-col justify-between font-questrial">
      {/* Título do Perfil */}
      <div className="h-[60px] border flex items-center justify-center bg-gray-100">
        <h2 className="font-semibold">{profile}</h2>
      </div>
  
      {/* Seção de Pagamento */}
      <div className="border sm:mx-auto sm:w-[40%] w-full md:w-[40%] lg:w-[40%] bg-gray-50 mx-auto my-6 p-6 rounded-lg shadow-md">
        {/* Logotipo */}
        <div className="flex justify-center mb-6">
          <img className="w-[170px]" src="../../images/vodacom.png" alt="Vodacom" />
        </div>
  
        {/* Total */}
        <div className="flex justify-between mb-4 text-lg">
          <span>Total</span>
          <span className="font-semibold">{preco} MZN</span>
        </div>
  
        {/* Input de Pagamento */}
        <div className="w-full mb-4">
          <InputPagamento {...propsInputPagamentoMpesa} />
        </div>
  
        {/* Botão de Pagamento */}
        <button
          onClick={recarregarPacote}
          className="w-full bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition"
        >
          Pagar
        </button>
  
        {/* Aviso sobre termos e condições */}
        <div className="mt-4 text-center text-sm text-gray-400">
          Ao clicar "Pagar", eu confirmo que li e estou de acordo{" "}
          <Link className="text-blue-500 hover:underline" to="/termosdeuso">
            com os termos e condições de uso
          </Link>
        </div>
      </div>
    </div>
  
    {/* Footer */}
    <div className="bg-blue-500 text-gray-200 p-2">
      <Footer />
    </div>
  </div>
  
  );
}
