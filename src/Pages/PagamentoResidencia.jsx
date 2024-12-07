import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TiposDePagamentos from "./TiposDePagamentos";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CardTiposDePagamentos from "./CardTiposDePagamentos";
import InputPagamento from "../components/Inputs/InputPagamento";

export default function PagamentoResidencia() {
  const { id } = useParams();
  const [plano, setPlano] = useState({});
  const [contador, setContador] = useState(0);
  const [numeroMpesa, setNumeroMpesa] = useState(null);
  const [numeroEmola, setNumeroEmola] = useState(null);
  const [mensagemInput, setMensagemInput] = useState("");
  const [profile, setProfile] = useState("");
  const [preco, setPreco] = useState()
  const [perfil, setPerfil] = useState("")
  const inputRef = useRef(null);

  async function mostrar() {
    try {
      const dados = await axios.get(`https://api-eyazs-production.up.railway.app/plano/${id}`);
      if(dados.data.plano === "PLANO-6Mbps"){
        setPerfil("Plano ferro 3Mbps")
      }else if(dados.data.plano === "PLANO-8Mbps"){
        setPerfil("Plano Prata 5Mbps")
      }else if(dados.data.plano === "PLANO-10Mbps"){
        setPerfil("Plano Cobre 8Mbps")
      }else if(dados.data.plano === "PLANO-12Mbps"){
        setPerfil("Plano Aluminio 10Mbps")
      }else if(dados.data.plano === "PLANO-14Mbps"){
        setPerfil("Plano Ouro 12Mbps")
      }else if(dados.data.plano === "PLANO-16Mbps"){
        setPerfil("Plano Chumbo 14Mbps")
      }else if(dados.data.plano === "PLANO-18Mbps"){
        setPerfil("Plano Mercurio 16Mbps")
      }else if(dados.data.plano === "PLANO-20Mbps"){
        setPerfil("Plano 18Mbps")
      }
      setProfile(dados.data.plano)
      setPreco(dados.data.preco)
      setPlano(dados.data)
    } catch (erro) {
      console.log(erro);
    }
  }

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
      if (!dadosDoLocalStorage) {
        console.log("Usuário não encontrado no localStorage.");
        return;
      }  
      const dados = await axios.put(
        `https://api-eyazs-production.up.railway.app/pagamento/${dadosDoLocalStorage.idUsuario}`,
        {
          transaction_ref: "EyazsImperium",
          msisdn: `258${numeroMpesa}`,
          amount: parseFloat(preco),
          thirdparty_ref: valoresAleatorios
        }
      );
      if (dados) {
        console.log("Pagamento realizado");
        try{
          const atualizarPlano = await axios.put(`https://api-eyazs-production.up.railway.app/atualizarMikrotik/${dadosDoLocalStorage.idUsuario}`,
            {
              profile:profile
            }
          )
          if(atualizarPlano){
            console.log("plano atualizado!")
            const atualPrecoUsuario = await axios.put(`https://api-eyazs-production.up.railway.app/usuario/${dadosDoLocalStorage.idUsuario}`,
              {
                precousuario:parseFloat(preco),
                profileusuario:profile
              }
            )
            if(atualPrecoUsuario){
              console.log("Preco do usuario Atualizado com Sucesso!")
              try{
                const gerarRecibo = await axios.post("https://api-eyazs-production.up.railway.app/recibo",
                  
                   {
                      idUsuario: dadosDoLocalStorage.idUsuario,
                      userName: dadosDoLocalStorage.username,
                      meioPagamento: "Mpesa",
                      numeroTelefone:numeroMpesa,
                      valor:preco,
                      plano:profile,
                      descricao:plano.descricao
                    }                  
                )
                if(gerarRecibo){
                  console.log("Recibo gerado com Sucesso!")
                }
              }catch(erro){
                console.log(erro)
              }
            }
            console.log("Plano atualizado com Sucesso!")
          }
        }catch(erro){
          console.log(erro)
        }
      } else {
        console.log("Erro ao realizar o pagamento");
        setMensagemInput("Clique novamente em Pagar")
      }
    } catch (erro) {
      console.log("Erro ao recarregar pacote:", erro.message);
    }
  }

  const propsCardPlanoResidencial = {
    url: "../../images/vodacom.png",
    descricao: "Pagamento via M-pesa",
  };

  const propsCardPlanoEmpresarial = {
    url: "../../images/movitel.jpeg",
    descricao: "Pagamento via E-mola",
  };

  const propsInputPagamentoMpesa = {
    type: "number",
    placeholder: "digite o numero do Mpesa",
    mudar: (e) => setNumeroMpesa(e.target.value),
    numeroMpesa: numeroMpesa
  };
  const propsInputPagamentoEmola = {
    type: "number",
    placeholder: "digite o numero do Emola",
    mudar: (e) => setNumeroEmola(e.target.value),
    value: numeroEmola
  };
  useEffect(() => {
    mostrar();
    console.log(plano);
    console.log("Plano: " + profile)
  }, []);

  return (
    <div className="flex h-screen flex-col justify-between">
  {/* NavBar */}
  <div className="bg-blue-500 h-[300px]">
    <NavBar />
  </div>

  {/* Conteúdo Principal */}
  <div className="flex-grow px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mx-auto my-6">
    {contador === 0 ? (
      <div className="flex flex-wrap justify-center sm:mt-[40px] sm:justify-between gap-4 max-w-2xl mx-auto px-4">
      <button
        onClick={() => setContador(1)}
        className="flex flex-wrap justify-center sm:justify-between gap-4 max-w-2xl mx-auto px-4"
      >
        <CardTiposDePagamentos {...propsCardPlanoResidencial} />
      </button>
    
      <button
        onClick={() => {
          alert("Tipo de pagamento em Manutençao!")
        }}
        className="flex flex-wrap justify-center sm:justify-between gap-4 max-w-2xl mx-auto px-4"
      >
        <CardTiposDePagamentos {...propsCardPlanoEmpresarial} />
      </button>
    </div>
    
    ) : (
      <div className="flex flex-col h-full font-questrial">
        <div className="h-14 border flex items-center justify-center bg-gray-100">
          <h2 className="font-semibold">Detalhes de Pagamento</h2>
        </div>

        <div className="mt-6 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap justify-between gap-6">
          <div className="flex flex-wrap justify-between gap-6">
  {/* Descrição do Plano e Dados Bancários */}
  <div className="w-full md:w-[68%] flex flex-col text-sm text-gray-600 md:mx-auto">
    <div className="border bg-gray-50 p-4">
      <h2 className="text-center font-semibold mb-2">Descrição do Plano</h2>
      <p>
        <strong>Plano:</strong> {plano.plano}
      </p>
      <p>
        <strong>Descrição:</strong> {plano.descricao}
      </p>
      <p>
        <strong>Validade/Renovação:</strong> {plano.validade} dias
      </p>
      <p>
        <strong>Taxa de Mensalidade:</strong> {plano.preco} MZN
      </p>
    </div>
    <div className="border bg-gray-50 p-4 mt-4">
      <h2 className="text-center font-semibold mb-2">Dados Bancários para Pagamento</h2>
      <p>
        <strong>Banco:</strong> Banco Comercial de Investimento (BCI)
      </p>
      <p>
        <strong>Titular:</strong> EYAZS IMPERIUM
      </p>
      <p>
        <strong>Conta:</strong> 183 034 830 100 01
      </p>
      <p>
        <strong>NIB:</strong> 0008 0000 8303 4830 101 95
      </p>
      <p>
        <strong>IBAN:</strong> MZ59 0008 0000 8303 4830 101 95
      </p>
      <p>
        <strong>SWIFT:</strong> CGDIMZM
      </p>
    </div>
  </div>

  {/* Pagamento e Resumo */}
  <div className="w-full md:w-[68%] md:mx-auto border bg-gray-50 p-4">
    <div className="flex justify-center mb-4">
      <img className="w-32" src="../../images/vodacom.png" alt="Vodacom" />
    </div>
    <div className="flex justify-between mb-4">
      <span>Total</span>
      <span className="font-semibold">{plano.preco} MZN</span>
    </div>
    <InputPagamento {...propsInputPagamentoMpesa} />
    <button
      onClick={recarregarPacote}
      className="w-full mt-4 bg-blue-500 p-2 text-white rounded-lg"
    >
      Pagar
    </button>
    <p className="mt-2 text-center text-sm">{mensagemInput}</p>
    <p className="text-xs text-gray-400 mt-4">
      Ao clicar "Pagar", eu confirmo que li e estou de acordo{" "}
      <Link className="text-blue-500" to="/termosdeuso">
        com os termos e condições de uso
      </Link>
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    )}
  </div>

  {/* Footer */}
  <div className="bg-blue-500 text-gray-200">
    <Footer />
  </div>
</div>

  );
}
