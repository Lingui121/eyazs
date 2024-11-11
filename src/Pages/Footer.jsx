
export default function Footer() {
    return (
        <div className="mt-4">
            <div className="mx-auto max-w-[1200px] flex justify-between text-12 pb-4">
                <div className="w-1/3">
                    <h2 className="font-medium">EYAZS IMPERIUM</h2> <br />
                    <span className="text-wrap">
                        A Eyazs inperium e uma empresa moçambicana de direitos legais, jovem e dinamica. com uma abordagem ativa e proativa, estamos comprometidos em oferecer os melhores serviços, sempre com foco na escelencia.
                    </span>
                </div>
                <div className="">
                    <h2 className="font-medium">Serviços Disponiveis</h2> <br />
                    <div className="flex">
                        <img src="../../images/planos.png" width={15} alt="" />
                        <span className="ml-1">Planos de internet</span>
                    </div>
                    <div className="flex">
                        <img src="../../images/pagamentos.png" width={15} alt="" />
                        <span className="ml-1">Efetuar Pagamentos</span>
                    </div>
                    <div className="flex">
                        <img src="../../images/historico.png" width={15} alt="" />
                        <span className="ml-1">Historico de Pagamentos</span>
                    </div>
                    <div className="flex">
                        <img src="../../images/conta.png" width={15} alt="" />
                        <span className="ml-1">Minha Conta</span>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-medium">Entre em Contacto</h2><br />
                    <div className="flex">
                        <img width={15} src="../../images/globo.png" alt="" />
                        <span className="ml-1">AV. 25 de Setembro, 1967 cidade da Beira, Sofala, Moçambique</span>
                    </div>
                    <div className="flex">
                        <img width={15} src="../../images/telefone.png" alt="" />
                        <span className="ml-1">Assistencia Administrativa : +258 86 601 2012</span>
                    </div>
                    <div className="flex">
                        <img width={15} src="../../images/telefone.png" alt="" />
                        <span className="ml-1">Assistencia Tecnica: +258 86 901 2012</span>
                    </div>
                    <div className="flex">
                        <img width={15} src="../../images/whatsapp.png" alt="" />
                        <span className="ml-1">Assistencia Whatsapp: +258 86 801 2012</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <hr />
                <span>@ 2024 EYAZS IMPERIUM. Todos Direitos reservados. </span>
            </div>
        </div>
    )
}