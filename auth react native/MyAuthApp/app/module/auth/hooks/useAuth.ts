import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "../slices/authSlice";
import { loginApi, registerApi } from "../services/authService";

const useAuth = () => {
  const dispatch = useDispatch();
  const { token, loading, error } = useSelector((state: RootState) => state.auth);

  const login = async (username: string, password: string) => {
    try {
      dispatch(loginStart());
      const res = await loginApi(username, password);
      dispatch(loginSuccess(res.token));
    } catch (err: any) {
      dispatch(loginFailure(err.message));
    }
  };

  const register = async (username: string, password: string) => {
    await registerApi(username, password);
  };

  return { token, loading, error, login, register, logout: () => dispatch(logout()) };
};

export default useAuth;
