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

  function mostrarPlano() {
    try {
      const dadosDoLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      if (dadosDoLocalStorage.profile === "PLANO-3Mbps") {
        setPreco(2320);
      } else if (dadosDoLocalStorage.profile === "PLANO-6Mbps") {
        setPreco(3480);
      } else if (dadosDoLocalStorage.profile === "PLANO-8Mbps") {
        setPreco(5800);
      } else if (dadosDoLocalStorage.profile === "PLANO-10Mbps") {
        setPreco(8120);
      } else if (dadosDoLocalStorage.profile === "PLANO-12Mbps") {
        setPreco(9628);
      } else if (dadosDoLocalStorage.profile === "PLANO-14Mbps") {
        setPreco(11948);
      } else if (dadosDoLocalStorage.profile === "PLANO-16Mbps") {
        setPreco(13688);
      } else if (dadosDoLocalStorage.profile === "PLANO-18Mbps") {
        setPreco(14500);
      } else if (dadosDoLocalStorage.profile === "PLANO-20Mbps") {
        setPreco(16008);
      }
      setProfile(dadosDoLocalStorage.profile);
    } catch (erro) {
      console.log(erro);
    }
  }

  const propsInputPagamentoMpesa = {
    type: "text",
    placeholder: "digite o numero do Mpesa",
    referencia:inputRef
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
    <div>
      <div className="bg-blue-500">
        <NavBar />
      </div>
      <div className="h-full flex justify-between flex-col font-questrial">
        <div>
          <div className="h-[60px] border flex items-center justify-center bg-gray-100">
            <h2 className="font-semibold"> {profile} </h2>
          </div>
        </div>
      </div>
      <div className="border w-[26%] bg-gray-50 mx-auto m-4 ">
        <div className="m-6">
          <div className="flex justify-center mt-4">
            <img className="w-[170px]" src="../../images/vodacom.png" alt="" />
          </div>
          <br />
          <div className="flex justify-between w-[90%] mx-auto ">
            <span>Total</span>
            <span className="font-semibold">{preco} MZN</span>
          </div>
          <div className="w-full mt-1">
            <InputPagamento {...propsInputPagamentoMpesa} />
          </div>
          <br />
          <div>
            <button
              onClick={() => {
                setNumero(inputRef.current.value)
                recarregarPacote();
              }}
              className="w-full bg-blue-500 p-1 border rounded-[50px] text-gray-100"
            >
              Pagar
            </button>
          </div>
          <br />
          <div className="">
            <span className="text-[11px] text-gray-400">
              Ao clicar "Pagar", eu confirmo que li e estou de acordo{" "}
              <Link className="text-blue-500" to="/termosdeuso">
                com os termos e condicoes de uso
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-gray-200 p-1">
        <Footer />
      </div>
    </div>
  );
}
