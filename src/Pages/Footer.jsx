export default function Footer() {
    return (
      <div className="mt-4 text-sm text-white bg-blue-500 pb-4">
        <div className="mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between gap-8 text-12 pb-4">
          {/* Seção 1 */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-medium">Eyazs Imperium</h2>
            <br />
            <span className="block">
              A Eyazs imperium é uma empresa moçambicana de direitos legais, jovem e dinâmica. Com uma abordagem ativa e proativa, estamos comprometidos em oferecer os melhores serviços, sempre com foco na excelência.
            </span>
          </div>
  
          {/* Seção 2 */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-medium">Serviços Disponíveis</h2>
            <br />
            <div className="flex items-center">
              <img src="../../images/planos.png" width={15} alt="" />
              <span className="ml-2">Planos de internet</span>
            </div>
            <div className="flex items-center">
              <img src="../../images/pagamentos.png" width={15} alt="" />
              <span className="ml-2">Efetuar Pagamentos</span>
            </div>
            <div className="flex items-center">
              <img src="../../images/historico.png" width={15} alt="" />
              <span className="ml-2">Histórico de Pagamentos</span>
            </div>
            <div className="flex items-center">
              <img src="../../images/conta.png" width={15} alt="" />
              <span className="ml-2">Minha Conta</span>
            </div>
          </div>
  
          {/* Seção 3 */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-medium">Entre em Contato</h2>
            <br />
            <div className="flex items-start">
              <img width={15} src="../../images/globo.png" alt="" />
              <span className="ml-2">
                AV. 25 de Setembro, 1967, cidade da Beira, Sofala, Moçambique
              </span>
            </div>
            <div className="flex items-center">
              <img width={15} src="../../images/telefone.png" alt="" />
              <span className="ml-2">Assistência Administrativa: +258 86 601 2012</span>
            </div>
            <div className="flex items-center">
              <img width={15} src="../../images/telefone.png" alt="" />
              <span className="ml-2">Assistência Técnica: +258 86 901 2012</span>
            </div>
            <div className="flex items-center">
              <img width={15} src="../../images/whatsapp.png" alt="" />
              <span className="ml-2">Assistência Whatsapp: +258 86 801 2012</span>
            </div>
          </div>
        </div>
  
        {/* Rodapé Inferior */}
        <div className="flex flex-col items-center justify-center text-center mt-4 px-4">
          <hr className="w-full mb-2 border-gray-200" />
          <span>@ 2024 EYAZS IMPERIUM. Todos os direitos reservados.</span>
        </div>
      </div>
    );
  }
  