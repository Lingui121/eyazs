import { History } from "lucide-react";

export default function CardHistoricoUsuarios(props) {
    return (
        <div className="group text-black hover:bg-gray-50 hover:text-azul shadow-lg border w-48 h-44 flex-col flex justify-center items-center rounded-[20%] bg-white p-4 px-2 border-blue-300 font-medium">
           <History size={72} />
            <span>{props.descricao}</span>
        </div>
    )
}