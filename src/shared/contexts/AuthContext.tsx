import { createContext, useEffect, useState } from "react";
import UserLoginServices from "../services/userLogin/userLoginServices";
import { setCookie, parseCookies } from "nookies";
import Api from "../services/axios-config";

type RefreshToken = {
  id: number;
  expiresIn: number;
  userId: number;
};

type SingInData = {
  username: string;
  password: string;
};

type AuthContextType = {
  singIn: (data: SingInData) => Promise<void>;
  isAutethicated: boolean;
};
export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const [isAutethicated, setIsAutethicated] = useState(false);
  // const [refreshToken, setRefreshToken] = useState<RefreshToken | null>(null);

  // useEffect(() => {
  //   if (refreshToken) {
  //     UserLoginServices.refreshToken(refreshToken).then((user) => {
  //       console.log(user);
  //     });
  //   }
  // }, []);

  // console.log(refreshToken);

  async function singIn(data: SingInData) {
    const { token } = await UserLoginServices.login(data);

    setCookie(undefined, "token", token, {
      maxAge: 60 * 60 * 1, // 1hora
    });

    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setIsAutethicated(true);
  }

  return (
    <AuthContext.Provider value={{ singIn, isAutethicated }}>
      {children}
    </AuthContext.Provider>
  );
};
