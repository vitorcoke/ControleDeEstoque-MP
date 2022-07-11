import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import api from "../services/axios-config";
import { useNavigate } from "react-router-dom";

type RefreshToken = {
  id: number;
  expiresIn: number;
  userId: number;
};

type SingInData = {
  username: string;
  password: string;
};

type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  singIn: (data: SingInData) => Promise<void>;
  isAutethicated: boolean;
  user: User | null;
};
export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const isAutethicated = !!user;

  useEffect(() => {
    const { "mp-token": token } = parseCookies();

    const fetchUserInfos = async () => {
      try {
        const { data } = await api.get("/bytoken");
        setUser(data);
      } catch {
        destroyCookie(undefined, "mp-token");
        navigate("/");
      }
    };

    if (token) fetchUserInfos();
  }, []);

  async function singIn({ username, password }: SingInData) {
    try {
      const { data } = await api.post("/login", { username, password });
      setCookie(null, "mp-token", data.token, {
        maxAge: 60 * 60 * 1,
      });
      setUser(data.user);

      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      return navigate("/notebooksSP");
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  return (
    <AuthContext.Provider value={{ user, singIn, isAutethicated }}>
      {children}
    </AuthContext.Provider>
  );
};
