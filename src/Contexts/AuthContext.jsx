import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Criando o contexto de autenticação
export const AuthContext = createContext();

// Provedor do contexto de autenticação
export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [autenticado, setAutenticado] = useState(false);
  const [saldo, setSaldo] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false);
  const [profile, setProfile] = useState()
  const [errorMessage, setErrorMessage] = useState("");

  // Função para login
  async function fazerLogin(username, password) {
    try {
      const data = await axios.post("http://localhost:8000/login", {
        username: username,
        password: password,
      });
      const usuario = data.data;
      if (usuario) {
        setErrorMessage("")
        const dados = {
          idUsuario: usuario.idUsuario,
          username: usuario.name,
          profile: usuario.profile,
          tipoUsuario: usuario.tipoUsuario,
        };
        localStorage.setItem("usuario", JSON.stringify(dados));
        setUser(usuario.name);
        setAutenticado(true);
        // Navegar conforme o tipo de usuário
        if (usuario.tipoUsuario === "admin") {
          setIsAdmin(true)
          navigate("/admin");
        } else {
          setIsAdmin(false)
          navigate("/home");
        }
      }else{
      }
    } catch (error) {
        // Captura outros erros (ex: erros no servidor)
        setErrorMessage("Usuario Ou Senha Incorrecta! verifique e tente novamente!");
      console.log(error);
    }
  }

  // Função para verificar o estado de login
  // Função para verificar o estado de login
function verificarLogin() {
  try {
    const dadosDoLocalStorage = JSON.parse(localStorage.getItem("usuario"));
    if (!dadosDoLocalStorage) {
      // Se não há dados no localStorage, usuário não está autenticado
      setAutenticado(false);
      setIsAdmin(false);
      return;
    }
    // Verifica se o perfil está desativado
    if (dadosDoLocalStorage.profile === "DESATVADO") {
      setSaldo(false);
      setAutenticado(true);
    } else {
      // Define o usuário
      setUser(dadosDoLocalStorage.username);
      setSaldo(true);

      // Define o perfil baseado no plano
      switch (dadosDoLocalStorage.profile) {
        case "PLANO-6Mbps":
          setProfile("Plano ferro 3Mbps");
          break;
        case "PLANO-8Mbps":
          setProfile("Plano Prata 5Mbps");
          break;
        case "PLANO-10Mbps":
          setProfile("Plano Cobre 8Mbps");
          break;
        case "PLANO-12Mbps":
          setProfile("Plano Aluminio 10Mbps");
          break;
        case "PLANO-14Mbps":
          setProfile("Plano Ouro 12Mbps");
          break;
        case "PLANO-16Mbps":
          setProfile("Plano Chumbo 14Mbps");
          break;
        case "PLANO-18Mbps":
          setProfile("Plano Mercurio 16Mbps");
          break;
        case "PLANO-20Mbps":
          setProfile("Plano 18Mbps");
          break;
        default:
          setProfile(null); // Perfil desconhecido ou não definido
      }

      // Define se é administrador
      if (dadosDoLocalStorage.tipoUsuario === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      setAutenticado(true);
    }
  } catch (erro) {
    console.log(erro);
  }
}

// Função para logout
function logout() {
  localStorage.removeItem("usuario");
  setUser(null);
  setAutenticado(false);
  setIsAdmin(false); // Redefine para false ao fazer logout
  setSaldo(false);   // Redefine saldo ao fazer logout
  setProfile(null);  // Redefine o profile ao fazer logout
  navigate("/login");
}

  // Função para logout
  /*function logout() {
    localStorage.removeItem("usuario");
    setUser(null);
    setAutenticado(false);
    navigate("/login");
  }
*/
  useEffect(() => {
    verificarLogin();
  }, []);

  // Prover o contexto para os componentes filhos
  return (
    <AuthContext.Provider
      value={{ user, autenticado, isAdmin, profile, saldo,setErrorMessage, errorMessage, fazerLogin, logout, verificarLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
