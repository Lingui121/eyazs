import { useEffect, useState } from "react";
import CardPlanosResidenciais from "./CardPlanosResidenciais";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios"

export default function PlanosResidenciais() {

    const [planosResidencias, setPlanosResidencia] = useState([])

    async function mostrarCards() {
        try {
            const planosresidenciais = await axios.get("http://localhost:8000/planos")
            if (planosresidenciais.data[0]) {
                setPlanosResidencia([...planosresidenciais.data])
                console.log("Dados State: " + planosResidencias)
            } else {
                alert("Nao ha planos Residenciais Disponiveis!")
            }
        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {
        mostrarCards()
    }, [])

    return (
        <div className="flex h-screen flex-col justify-between">
            <div className="bg-blue-500 text-gray-200 w-full">
                <NavBar />
            </div>
            <div className="m-4">
                <div className="flex-wrap justify-between w-[1000px] flex mx-auto mb-8">
                   {
                    planosResidencias.map((planoResidencia) => {
                        return(
                                <CardPlanosResidenciais validade = {planoResidencia.validade} id = {planoResidencia.id} titulo={planoResidencia.plano} descricao = {planoResidencia.descricao} preco = {planoResidencia.preco}  />  
                        )
                    })
                   }
                </div>
            </div>
            <div className="bg-blue-500 text-gray-200">
                <Footer />
            </div>
        </div>
    )
}