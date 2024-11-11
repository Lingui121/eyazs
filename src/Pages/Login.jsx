import { useEffect, useState } from "react";
import InputLogin from "../components/Inputs/InputLogin";
import BotaoLogin from "../components/Botoes/BotaoLogin";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("")
    const [profile, setProfile] = useState("")
    const [autenticado, setAutenticado] = useState(false)

    async function fazerLogin() {
        try {
            const data = await axios.post("http://localhost:8000/login",
                {
                    username: userName,
                    password: password
                }
            )
            const usuario = data.data
            if (usuario) {
                const dados = {
                    idUsuario: usuario.idUsuario,
                    username: usuario.name,
                    profile:usuario.profile
                }
                let dado = JSON.parse(localStorage.getItem("usuario"))
                localStorage.setItem("usuario", JSON.stringify(dados))
            }
            verificarLogin()

        } catch (erro) {
            console.log(erro)
        }
    }

    function verificarLogin() {
        try {
            const dadosDoLocalStorage = JSON.parse(localStorage.getItem("usuario"))
            if (dadosDoLocalStorage) {
                setUser(dadosDoLocalStorage.username)
                setAutenticado(true)
                navigate("/home")
                console.log(user)
            }
            setAutenticado(false)
        } catch (erro) {
            console.log(erro)
        }
    }

    const propsInputUserName = {
        type: "text",
        placeholder: "Digite O UserName",
        mudar: (e) => setUserName(e.target.value)
    }
    const propsInpuPassword = {
        type: "text",
        placeholder: "Digite O UserName",
        mudar: (e) => setPassword(e.target.value)
    }

    const propsBotaoLogin = {
        texto: "Entrar",
        type: "submit"
    }

    useEffect(() => {
        //localStorage.setItem("usuario", JSON.stringify({}))
        console.log(user)
    }, [])

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="">
                <div className=" border w-[380px] h-[400px] rounded-[50px] border-blue-500 ">
                    <div className="flex justify-center items-center h-full">
                        <div>
                            <div className=" -mt-[20px] mx-auto w-[30%] m-3 flex justify-center border rounded-[50%] border-blue-700 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[60px] text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div className="m-3 mt-8">
                                <InputLogin {...propsInputUserName} />
                            </div>
                            <div className="m-3">
                                <InputLogin {...propsInpuPassword} />
                            </div>
                            <div className="flex justify-center mt-4" >
                                <BotaoLogin clicado={() => {
                                    fazerLogin()
                                }} {...propsBotaoLogin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}