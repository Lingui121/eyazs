import { useNavigate } from "react-router-dom"
import BotaoCardplanos from "../components/Botoes/BotaoCardPlanos"
import { useEffect } from "react";

export default function CardPlanosEmpresariais(props) {
    const navigate = useNavigate();
    const propsButtonPlanos = {
        type: "submit",
        texto: "Aderir"
    }
    useEffect(() => {
        //localStorage.setItem("planos", JSON.stringify({}));
    }, [])

    return (
        <div className=" group shadow-lg w-[285px] h-auto rounded-[15px] mt-4 font-questrial ">
            <div className="border bg-blue-500 text-gray-100 text-center rounded-tl-[15px] rounded-tr-[15px] py-2">
                    <h1>{props.titulo}</h1>
                </div>
            <div className="w-[90%] flex flex-col mx-auto text-center" > 
                <div className="text-center pt-1 pb-1">
                    <h3 className="text-gray-600 font-semibold">Descricao</h3>
                    <hr />
                </div>
                <span className="mt-3 mb-1 text-gray-600">
                    {props.descricao}
                </span>
                <span>Taxa da Mensalidade</span>
                <h4 className="mb-1 mt-1 font-medium">{props.preco} MZN</h4>
                <div className=" w-[70%] mx-auto mt-2 mb-4 pt-1">
                    <BotaoCardplanos {...propsButtonPlanos} clicado={() => {
                        navigate(`/planoempresa/${props.id}`)
                    }} />
                </div>
            </div>
        </div>
    )
}