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
            const dados = await axios.get("https://api-eyazs-production.up.railway.app/planosempresariais")
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
        {/* NavBar */}
        <div className="bg-blue-500 text-gray-200 w-full">
          <NavBar />
        </div>
      
        {/* Conteúdo Principal */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mx-auto my-6">
          <div className="flex flex-wrap justify-center gap-6">
            {planosEmpresas.map((plano) => (
              <CardPlanosEmpresariais
                key={plano.id}
                id={plano.id}
                descricao={plano.descricao}
                validade={plano.validade}
                preco={plano.preco}
                titulo={plano.plano}
                className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]"
              />
            ))}
          </div>
        </div>
      
        {/* Footer */}
        <div className="bg-blue-500 text-gray-200 w-full">
          <Footer />
        </div>
      </div>
      
    )
}