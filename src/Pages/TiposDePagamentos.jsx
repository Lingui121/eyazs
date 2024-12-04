import Footer from "./Footer";
import NavBar from "./NavBar";
import CardTiposDePagamentos from "./CardTiposDePagamentos";
import { useNavigate } from "react-router-dom";

export default function TiposDePagamentos() {

    const navigate = useNavigate();

    const propsCardPlanoResidencial = {
        url: "../../images/vodacom.png",
        descricao: "Pagamento via M-pesa"
    }

    const propsCardPlanoEmpresarial = {
        url: "../../images/movitel.jpeg",
        descricao: "Pagamento via E-mola"
    }

    return (
        <div className="flex h-screen flex-col font-questrial text-white">
        {/* NavBar */}
        <div className="bg-blue-500 h-[38%]">
          <NavBar />
        </div>
      
        {/* Botões de pagamento */}
        <div className="flex-grow gap-2 sm:flex justify-center sm:flex-col sm:justify-center md:flex-row md:justify-between lg:w-[600px] mx-auto p-4">
          <div className="w-full sm:w-[41%] md:w-[48%] mb-4 sm:mb-4 md:mb-0">
            <button onClick={() => navigate("/pagamentoviampesa")}>
              <CardTiposDePagamentos {...propsCardPlanoResidencial} />
            </button>
          </div>
          <div className="w-full sm:w-[41%] md:w-[48%]">
            <button onClick={() => navigate("/pagamentoviaemola")}>
              <CardTiposDePagamentos {...propsCardPlanoEmpresarial} />
            </button>
          </div>
        </div>
      
        {/* Footer */}
        <div className="bg-blue-500 p-4 pb-2">
          <Footer />
        </div>
      </div>
      
    )
}