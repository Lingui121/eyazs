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
  const [numero, setNumero] = useState();
  const inputRef = useRef(null);

  async function mostrar() {
    try {
      const dados = await axios.get(process.env.URL+"plano/" + id);
      setPlano(dados.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  function pegarNumero() {
    if (inputRef.current) {
      setNumero(inputRef.current.value);
    } else {
      console.log("Referencia nao passada ainda!");
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
    type: "text",
    placeholder: "digite o numero do Mpesa",
    referencia: inputRef,
  };
  const propsInputPagamentoEmola = {
    type: "text",
    placeholder: "digite o numero do Emola",
    referencia: inputRef,
  };
  useEffect(() => {
    mostrar();
    console.log(plano);
  }, []);

  return (
    <div className="flex justify-between h-screen flex-col">
      <div className="bg-blue-500">
        <NavBar />
      </div>
      <div>
        <div>
          {contador == 0 ? (
            <div>
              <div className="-mt-14 flex-grow flex justify-around max-w-[600px] container mx-auto ">
                <div className="w-[43%]">
                  <button
                    onClick={() => {
                      setContador(1);
                    }}
                  >
                    <CardTiposDePagamentos {...propsCardPlanoResidencial} />
                  </button>
                </div>
                <div className="w-[43%]">
                  <button
                    onClick={() => {
                      setContador(2);
                    }}
                  >
                    <CardTiposDePagamentos {...propsCardPlanoEmpresarial} />
                  </button>
                </div>
              </div>
            </div>
          ) : contador == 1 ? (
            <div>
              <div className="h-full flex justify-between flex-col font-questrial">
                <div>
                  <div className="h-[60px] border flex items-center justify-center bg-gray-100">
                    <h2 className="font-semibold">Detalhes de Pagamento</h2>
                  </div>
                </div>
                <div className=" m-4 w-[1000px] mx-auto">
                  <div className="flex justify-between h-[340px]">
                    <div className="w-[68%] flex flex-col justify-between text-sm text-gray-600">
                      <div className="h-[43%] border bg-gray-50">
                        <h2 className="text-center mt-1 font-semibold">
                          Descricao do Plano
                        </h2>
                        <div className="ml-[65px]">
                          <span>
                            <span className=" font-semibold mr-2">Plano:</span>{" "}
                            {plano.plano}
                          </span>
                          <br />
                          <span className="font-semibold">
                            Descricao:{" "}
                            <span className="font-normal text-wrap">
                              {plano.descricao}
                            </span>
                          </span>
                          <br />
                          <span>
                            <span className=" font-semibold mr-2">
                              Validade/Renovacao:
                            </span>
                            {plano.validade} Dias
                          </span>{" "}
                          <br />
                          <span>
                            <span className=" font-semibold mr-2">
                              Taxa de Mensalidade:
                            </span>{" "}
                            {plano.preco} MZN
                          </span>
                        </div>
                      </div>
                      <div className="h-[53%] border bg-gray-50">
                        <h2 className="text-center mt-1 font-semibold">
                          Dados Bancarios para Pagamento
                        </h2>
                        <br />
                        <div className="ml-[65px]">
                          <span>
                            <span className=" font-semibold mr-2">Banco:</span>{" "}
                            Banco Comercia de Investimento(BCI)
                          </span>
                          <br />
                          <span>
                            <span className=" font-semibold mr-2">
                              Titular:
                            </span>{" "}
                            EYAZS IMPERIUM
                          </span>
                          <br />
                          <span>
                            <span className=" font-semibold mr-2">
                              Numero de Conta:
                            </span>{" "}
                            183 034 830 100 01
                          </span>
                          <br />
                          <span>
                            <span className=" font-semibold mr-2">NIB:</span>{" "}
                            0008 0000 8303 4830 101 95
                          </span>{" "}
                          <br />
                          <span>
                            <span className=" font-semibold mr-2">IBAN:</span>{" "}
                            MZ59 0008 0000 8303 4830 101 95
                          </span>
                          <br />
                          <span>
                            <span className=" font-semibold mr-2">SWIFT:</span>{" "}
                            CGDIMZM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border w-[30%] bg-gray-50">
                      <div className="m-6">
                        <div className="flex justify-center mt-4">
                          <img
                            className="w-[160px]"
                            src="../../images/vodacom.png"
                            alt=""
                          />
                        </div>
                        <br />
                        <div className="flex justify-between w-[90%] mx-auto ">
                          <span>Total</span>
                          <span className="font-semibold">
                            {plano.preco} MZN
                          </span>
                        </div>
                        <div className="w-full mt-1">
                          <InputPagamento {...propsInputPagamentoMpesa} />
                        </div>
                        <br />
                        <div>
                          <button
                            onClick={() => {
                              pegarNumero();
                            }}
                            className="w-full bg-blue-500 p-1 border rounded-[50px] text-gray-100"
                          >
                            Pagar
                          </button>
                          <p>{numero}</p>
                        </div>
                        <br />
                        <div className="">
                          <span className="text-[11px] text-gray-400">
                            Ao clicar "Pagar", eu confirmo que li e estou de
                            acordo{" "}
                            <Link className="text-blue-500" to="/termosdeuso">
                              com os termos e condicoes de uso
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" flex justify-center items-center mb-4">
                    <h2 className=" text-gray-400">
                      Efectue Pagamentos de forma facil e rapida usando os
                      metodos Tradicionais comuns sem perder tempo.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ) : contador == 2 ? (
            <div className="h-full flex justify-between flex-col font-questrial">
              <div>
                <div className="h-[60px] border flex items-center justify-center bg-gray-100">
                  <h2 className="font-semibold">Detalhes de Pagamento</h2>
                </div>
              </div>
              <div className="w-[1000px] mx-auto mt-6">
                <div className="flex justify-between h-[340px]">
                  <div className="w-[68%] flex flex-col justify-between text-sm text-gray-600">
                    <div className="h-[44%] border bg-gray-50">
                      <h2 className="text-center mt-1 font-semibold">
                        Descricao do Plano
                      </h2>
                      <div className="ml-[65px]">
                        <span>
                          <span className=" font-semibold mr-2">Plano:</span>{" "}
                          {plano.plano}{" "}
                        </span>
                        <br />
                        <span>
                          Descricao: <span> {plano.descricao} </span>
                        </span>
                        <br />
                        <span>
                          <span className=" font-semibold mr-2">
                            Validade/Renovacao:
                          </span>{" "}
                          {plano.validade} dias
                        </span>{" "}
                        <br />
                        <span>
                          <span className=" font-semibold mr-2">
                            Taxa de Mensalidade:
                          </span>{" "}
                          {plano.preco} MZN
                        </span>
                      </div>
                    </div>
                    <div className="h-[52%] border bg-gray-50">
                      <h2 className="text-center mt-1 font-semibold">
                        Dados Bancarios para Pagamento
                      </h2>
                      <br />
                      <div className="ml-[65px] mb-4">
                        <span>
                          <span className=" font-semibold mr-2">Banco:</span>{" "}
                          Banco Comercia de Investimento(BCI)
                        </span>
                        <br />
                        <span>
                          <span className=" font-semibold mr-2">Titular:</span>{" "}
                          EYAZS IMPERIUM
                        </span>
                        <br />
                        <span>
                          <span className=" font-semibold mr-2">
                            Numero de Conta:
                          </span>{" "}
                          183 034 830 100 01
                        </span>
                        <br />
                        <span>
                          <span className=" font-semibold mr-2">NIB:</span> 0008
                          0000 8303 4830 101 95
                        </span>{" "}
                        <br />
                        <span>
                          <span className=" font-semibold mr-2">IBAN:</span>{" "}
                          MZ59 0008 0000 8303 4830 101 95
                        </span>
                        <br />
                        <span>
                          <span className=" font-semibold mr-2">SWIFT:</span>{" "}
                          CGDIMZM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border w-[30%] bg-gray-50">
                    <div className="m-4">
                      <div className="flex justify-start mt-4">
                        <img
                          className="w-[160px]"
                          src="../../images/movitel.jpeg"
                          alt=""
                        />
                      </div>
                      <br />
                      <div className="flex justify-between w-[90%] mx-auto ">
                        <span>Total</span>
                        <span> {plano.preco} MZN </span>
                      </div>
                      <div className="w-full mt-1">
                        <InputPagamento {...propsInputPagamentoEmola} />
                        <p>{numero}</p>
                      </div>
                      <br />
                      <div>
                        <button onClick={() => {
                          pegarNumero()
                        }} className="w-full bg-blue-500 p-1 border rounded-[50px]  text-gray-100">
                          Pagar
                        </button>
                      </div>
                      <br />
                      <div>
                        <span className="text-[11px] text-pretty text-gray-400">
                          Ao clicar "Pagar", eu confirmo que li e estou de
                          acordo{" "}
                          <Link className="text-blue-500" to="/termosdeuso">
                            com os termos e condicoes de uso
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-[50px] flex justify-center items-center">
                  <h2 className=" text-gray-400">
                    Efectue Pagamentos de forma facil e rapida usando os metodos
                    Tradicionais comuns sem perder tempo.
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bg-blue-500 text-gray-200">
        <Footer />
      </div>
    </div>
  );
}
