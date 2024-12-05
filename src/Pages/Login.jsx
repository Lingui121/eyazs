import { useEffect, useState } from "react";
import InputLogin from "../components/Inputs/InputLogin";
import BotaoLogin from "../components/Botoes/BotaoLogin";
import { AuthContext } from "../Contexts/AuthContext"; // Importando o contexto de autenticação
import { useContext } from "react";

export default function Login() {
  const { fazerLogin, errorMessage, setErrorMessage } = useContext(AuthContext); // Usando o contexto para login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const propsInputUserName = {
    type: "text",
    placeholder: "Digite O UserName",
    mudar: (e) => setUsername(e.target.value),
  };
  const propsInpuPassword = {
    type: "password", // Ajustado para password
    placeholder: "Digite A Senha",
    mudar: (e) => setPassword(e.target.value),
  };

  const propsBotaoLogin = {
    texto: "Entrar",
    type: "submit",
  };

  useEffect(() => {
    if (errorMessage) {
      setShowError(true); // Mostra a mensagem de erro
      const timer = setTimeout(() => {
        setShowError(false); // Oculta a mensagem antes de removê-la
        setTimeout(() => {
          setErrorMessage(""); // Remove a mensagem do estado
        }, 500); // Espera o efeito de transição terminar (500ms)
      }, 3000); // Mostra a mensagem por 3 segundos

      return () => clearTimeout(timer);
    }
  }, [errorMessage, setErrorMessage]);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      {errorMessage && (
        <div
          className={`w-1/2 flex justify-center border bg-red-300 text-gray-200 transition-opacity duration-500 ${
            showError ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="py-3 text-xl">{errorMessage}</span>
        </div>
      )}
      <div className="w-[380px] flex justify-center">
        <div className=" border w-[70%] md:w-[80%] lg:w-full h-[400px] rounded-[50px] border-blue-500 ">
          <div className="flex justify-center items-center h-full">
            <div>
              <div className=" -mt-[20px] mx-auto w-[30%] m-3 flex justify-center border rounded-[50%] border-blue-700 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-[60px] text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div className="m-3 mt-8">
                <InputLogin {...propsInputUserName} />
              </div>
              <div className="m-3">
                <InputLogin {...propsInpuPassword} />
              </div>
              <div className="flex justify-center mt-4">
                <BotaoLogin
                  clicado={() => {
                    fazerLogin(username, password); // Chamada da função de login do contexto
                  }}
                  {...propsBotaoLogin}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
