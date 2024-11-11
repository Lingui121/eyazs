import CardPlanoEmpresarial from "../components/Cards/CardPlanoEmpresarial";
import CardPlanoResidencial from "../components/Cards/CardPlanoResidencial";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function Planos() {

    const navigate = useNavigate();

    const propsCardPlanoResidencial = {
        descricao: "Planos residenciais"
    }

    const propsCardPlanoEmpresarial = {
        descricao: "Planos Empresariais"
    }

    return (
        <div className="flex h-screen flex-col font-questrial text-white">
            <div className="bg-blue-500 h-[38%]">
                <NavBar />
            </div>
            <div className="-mt-40 flex-grow flex justify-around max-w-[700px] container mx-auto ">
                <button onClick={() => {
                    navigate("/planosresidenciais")
                }} className="w-[43%]">
                    <CardPlanoResidencial {...propsCardPlanoResidencial} />
                </button>
                <button onClick={() => {
                    navigate("/planosempresariais")
                }} className="w-[43%]">
                    <CardPlanoEmpresarial {...propsCardPlanoEmpresarial} />
                </button>
            </div>
            <div className="bg-blue-500 p-4 pb-2">
                <Footer />
            </div>
        </div>
    )
}