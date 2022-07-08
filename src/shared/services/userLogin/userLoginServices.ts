import Api from "../axios-config/index";

interface User {
  username?: string;
  password?: string;
}

type RefreshTokenData = {
  userId: number;
};
const login = async (user: User) => {
  try {
    const urlRelativa = "/login";
    const { data } = await Api.post(urlRelativa, user);
    if (data) {
      return data;
    }
    return new Error("Não foi possível logar");
  } catch (error) {
    return new Error((error as { message: string }).message || "Erro ao logar");
  }
};

const refreshToken = async (RefreshToken: RefreshTokenData) => {
  try {
    const urlRelativa = "/refreshToken";
    const { data } = await Api.post(urlRelativa, RefreshToken);

    if (data) {
      return data;
    }
    return new Error("Não foi possível atualizar o token");
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar o token"
    );
  }
};

const UserLoginServices = {
  login,
  refreshToken,
};

export default UserLoginServices;
