import CardPlanoEmpresarial from "../components/Cards/CardPlanoEmpresarial";
import CardPlanoResidencial from "../components/Cards/CardPlanoResidencial";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function Planos() {
  const navigate = useNavigate();

  const propsCardPlanoResidencial = {
    descricao: "Planos residenciais",
  };

  const propsCardPlanoEmpresarial = {
    descricao: "Planos Empresariais",
  };

  return (
    <div className="flex h-screen flex-col font-questrial text-white">
      <div className="bg-blue-500 h-[38%]">
        <NavBar />
      </div>
      <div className=" lg:w-[600px] md:w-[500px] sm:w-[300px] flex flex-col sm:items-center mb-4 sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-4 container mx-auto mt-8">
        <button
          onClick={() => navigate("/planosresidenciais")}
          className="w-[60%] sm:w-[48%] lg:w-[43%]"
        >
          <CardPlanoResidencial {...propsCardPlanoResidencial} />
        </button>

        <button
          onClick={() => navigate("/planosempresariais")}
          className="w-[60%] sm:w-[48%] lg:w-[43%]"
        >
          <CardPlanoEmpresarial {...propsCardPlanoEmpresarial} />
        </button>
      </div>

      <div className="bg-blue-500 p-4 pb-2 font-extralight">
        <Footer />
      </div>
    </div>
  );
}
