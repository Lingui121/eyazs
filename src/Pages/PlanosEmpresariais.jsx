import axios from "axios";
import CardPlanosResidenciais from "./CardPlanosResidenciais";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import CardPlanoEmpresarial from "../components/Cards/CardPlanoEmpresarial";
import CardPlanoResidencial from "../components/Cards/CardPlanoResidencial";
import CardPlanosEmpresariais from "./CardPlanoEmpresariais";

export default function PlanosEmpresariais() {

    const [planosEmpresas, setPlanoEmpresas] = useState([])

    async function mostrarCardPlanosEmpresariais() {
        try {
            const dados = await axios.get("http://localhost:8000/planosempresariais")
            if (dados.data) {
                setPlanoEmpresas([...dados.data])
            }
            console.log("Nao ha Planos disponiveis")
        } catch (erro) {
            console.log(erro)
        }
    }

    useEffect(() => {
        mostrarCardPlanosEmpresariais()
        console.log(planosEmpresas)
    }, [])

    return (
        <div className="flex h-screen flex-col justify-between">
            <div className="bg-blue-500 text-gray-200 w-full">
                <NavBar />
            </div>
            <div className="w-[1000px] mx-auto m-6">
                <div className="flex flex-wrap justify-between">
                    {
                        planosEmpresas.map((plano) => {
                            return (
                                <CardPlanosEmpresariais id={plano.id} descricao={plano.descricao} validade={plano.validade} preco={plano.preco} titulo={plano.plano} />
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