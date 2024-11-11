
export default function CardPlano(props) {
    return (
        <div className=" text-black hover: group shadow-lg border w-48 h-44 flex-col flex justify-center items-center rounded-[20%] bg-white p-4 px-2 hover:bg-gray-50 border-blue-300 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" group-hover:text-blue-500 size-14 text-gray-800">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <span className="group-hover:text-blue-500">{props.descricao}</span>
        </div>
    )
}