import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import InputPagamento from '../components/Inputs/InputPagamento'

export default function PagamentoViaMpesa () {

    const [profile, setProfile] = useState("");
    const [preco, setPreco] = useState(null);
    const [numero, setNumero] = useState("");
    const inputRef = useRef(null)

    async function mostrarPlano(){
        try{
            const dadosDoLocalStorage = JSON.parse(localStorage.getItem("usuario"))
            if(dadosDoLocalStorage.profile=="PLANO-3Mbps"){
                setPreco(2320)
            }else if(dadosDoLocalStorage.profile === "PLANO-5Mbps"){
                setPreco(3480)
            }else if(dadosDoLocalStorage.profile === "PLANO-8Mbps"){
                setPreco(5800)
            }else if(dadosDoLocalStorage.profile === "PLANO-10Mbps"){
                setPreco(8120)
            }else if(dadosDoLocalStorage.profile === "PLANO-12Mbps"){
                setPreco(9628)
            }else if(dadosDoLocalStorage.profile === "PLANO-14Mbps"){
                setPreco(11948)
            }else if(dadosDoLocalStorage.profile === "PLANO-16Mbps"){
                setPreco(13688)
            }else if(dadosDoLocalStorage.profile === "PLANO-18Mbps"){
                setPreco(14500)
            }else if(dadosDoLocalStorage.profile === "PLANO-20Mbps"){
                setPreco(16008)
            }
            setProfile(dadosDoLocalStorage.profile)
        }catch(erro){
            console.log(erro)
        }
    }

    const propsInputPagamentoEmola = {
      type: "text",
      placeholder: "digite o numero do Emola",
      referencia: inputRef
    };  

    const pegarNumero = () => {
      if(inputRef.current){
        setNumero(inputRef.current.value)
      }else{
        console.log("referencia ainda nao foi encontrada!")
      }
    }

    useEffect(() => {
        mostrarPlano()
    }, [])

  return (
    <div>
        <div className='bg-blue-500'>
            <NavBar/>
        </div>
              <div className="h-full flex justify-between flex-col font-questrial">
                <div>
                  <div className="h-[60px] border flex items-center justify-center bg-gray-100">
                    <h2 className="font-semibold"> {profile} </h2>
                  </div>
                </div>
                    </div>
                    <div className="border w-[26%] bg-gray-50 mx-auto m-4 " >
                      <div className="m-6">
                        <div className="flex justify-center mt-4">
                          <img
                            className="w-[170px]"
                            src="../../images/movitel.jpeg"
                            alt=""
                          />
                        </div>
                        <br />
                        <div className="flex justify-between w-[90%] mx-auto ">
                          <span>Total</span>
                          <span className="font-semibold">{ preco } MZN</span>
                        </div>
                        <div className="w-full mt-1">
                          <InputPagamento {...propsInputPagamentoEmola} />
                        </div>
                        <br />
                        <div>
                          <button onClick={() => {
                            pegarNumero()
                          }} className="w-full bg-blue-500 p-1 border rounded-[50px] text-gray-100">
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
              <div className='bg-blue-500 text-gray-200 p-1'>
                <Footer/>
              </div>
            </div>
  )
}
