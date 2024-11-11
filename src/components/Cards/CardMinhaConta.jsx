export default function CardMinhaConta(props) {
    return (
        <div className="group text-black hover:bg-gray-50 hover:text-azul shadow-lg border w-48 h-44 flex-col flex justify-center items-center rounded-[20%] bg-white p-4 px-2 border-blue-300 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-gray-800 group-hover:text-blue-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span>{props.descricao}</span>
        </div>
    )
}