import CardHistorico from "../components/Cards/CardHistorico";
import CardMinhaConta from "../components/Cards/CardMinhaConta";
import CardPagamento from "../components/Cards/cardPagamento";
import CardPlano from "../components/Cards/CardPlano";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Home() {
    
    const navigate = useNavigate();

    const propsCardPlanos = {
        descricao: "Planos de Internet"
    }
    const propsCardPagamento = {
        descricao: "Pagamentos"
    }
    const propsCardHistorico = {
        descricao: "Historico"
    }
    const propsCardConta = {
        descricao: "Minha Conta"
    }
    return (
        <div className="flex h-screen flex-col justify-between font-questrial text-white">
            <div className="bg-blue-500 h-[38%]">
                <NavBar />
            </div>
            <div className="mx-auto  w-[1000px]">
                <div className="-mt-40">
                    <button onClick={function(){
                        navigate("/planos")
                    }} className="w-[24%]">
                        <CardPlano {...propsCardPlanos} />
                    </button>

                    <button onClick={() => {
                        navigate("/tiposdepagamentos")
                    }} className="w-[24%]">
                        <CardPagamento {...propsCardPagamento} />
                    </button>

                    <button onClick={() => {
                        navigate("/historicopagamento")
                    }} className="w-[24%]">
                        <CardHistorico {...propsCardHistorico} />
                    </button>

                    <button onClick={() => {
                        navigate("/minhaconta")
                    }} className="w-[24%]">
                        <CardMinhaConta {...propsCardConta} />
                    </button>
                </div>
            </div>
            <div className="bg-blue-500 p-4 pb-2">
                <Footer />
            </div>
        </div>
    )
}

export default Home;