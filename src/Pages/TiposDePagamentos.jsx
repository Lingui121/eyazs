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
            <div className="bg-blue-500 h-[38%]">
                <NavBar />
            </div>
            <div className="-mt-14 flex-grow flex justify-around max-w-[600px] container mx-auto ">
                <div className="w-[43%]">
                    <button onClick={() => {
                        navigate("/pagamentoviampesa")
                    }}>
                        <CardTiposDePagamentos {...propsCardPlanoResidencial} />
                    </button>
                </div>
                <div className="w-[43%]">
                    <button onClick={() => {
                       navigate("/pagamentoviaemola")
                    }}>
                        <CardTiposDePagamentos {...propsCardPlanoEmpresarial} />
                    </button>
                </div>
            </div>
            <div className="bg-blue-500 p-4 pb-2">
                <Footer />
            </div>
        </div>
    )
}