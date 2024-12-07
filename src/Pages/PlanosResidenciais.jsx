import { useEffect, useState } from "react";
import CardPlanosResidenciais from "./CardPlanosResidenciais";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";

export default function PlanosResidenciais() {
  const [planosResidencias, setPlanosResidencia] = useState([]);

  async function mostrarCards() {
    try {
      const planosresidenciais = await axios.get(
        "https://api-eyazs-production.up.railway.app/planos"
      );
      if (planosresidenciais.data[0]) {
        setPlanosResidencia([...planosresidenciais.data]);
        console.log("Dados State: " + planosResidencias);
      } else {
        alert("Nao ha planos Residenciais Disponiveis!");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    mostrarCards();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-between">
  {/* NavBar */}
  <div className="bg-blue-500 text-gray-200 w-full">
    <NavBar />
  </div>

  {/* Conteúdo Principal */}
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mx-auto my-6">
    <div className="flex flex-wrap justify-center gap-6">
      {planosResidencias.map((plano) => (
        <CardPlanosResidenciais
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

  );
}
