import CardHistorico from "../components/Cards/CardHistorico";
import CardMinhaConta from "../components/Cards/CardMinhaConta";
import CardPlano from "../components/Cards/CardPlano";
import CardPagamento from "../components/Cards/CardPagamento"
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const propsCardPlanos = {
    descricao: "Planos de Internet",
  };
  const propsCardPagamento = {
    descricao: "Pagamentos",
  };
  const propsCardHistorico = {
    descricao: "Histórico",
  };
  const propsCardConta = {
    descricao: "Minha Conta",
  };

  return (
    <div className="flex flex-col min-h-screen justify-between font-questrial text-white">
      {/* Header da página com a NavBar */}
      <div className="bg-blue-500 h-[290px]">
        <NavBar />
      </div>

      {/* Container dos Cards */}
      <div className="flex justify-center gap-2 items-center mb-4">
        <div className="lg:w-[900px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 -mt-20 md:-top-0 md:w-[54%] md:h-[48%]">
          <div
            className="w-full mx-auto 
                      sm:w-[300px] 
                      md:w-[200px] md:h-[200px] 
                      lg:w-[200px] lg:h-[200px] 
                      sm:flex sm:justify-center"
          >
            <button
              onClick={() => navigate("/planos")}
              className="w-full"
            >
              <CardPlano {...propsCardPlanos} />
            </button>
          </div>

          <div
            className="w-full mx-auto 
                      sm:w-[300px] 
                      md:w-[200px] md:h-[200px] 
                      lg:w-auto lg:h-auto 
                      sm:flex sm:justify-center"
          >
            <button
              onClick={() => navigate("/tiposdepagamentos")}
              className="w-full"
            >
              < CardPagamento {...propsCardPagamento} />
            </button>
          </div>

          <div
            className="w-full mx-auto 
                      sm:w-[300px] 
                      md:w-[200px] md:h-[200px] 
                      lg:w-auto lg:h-auto 
                      sm:flex sm:justify-center"
          >
            <button
              onClick={() => navigate("/historicopagamento")}
              className="w-full"
            >
              <CardHistorico {...propsCardHistorico} />
            </button>
          </div>

          <div
            className="w-full mx-auto 
                      sm:w-[300px] 
                      md:w-[200px] md:h-[200px] 
                      lg:w-auto lg:h-auto 
                      sm:flex sm:justify-center"
          >
            <button
              onClick={() => navigate("/minhaconta")}
              className="w-full"
            >
              <CardMinhaConta {...propsCardConta} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer da página */}
      <div className="bg-blue-500 p-4 pb-2 font-extralight">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
