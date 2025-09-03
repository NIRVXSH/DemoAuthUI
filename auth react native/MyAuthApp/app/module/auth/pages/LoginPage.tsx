import LoginForm from "../components/LoginForm";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const auth = useAuth();
  return <LoginForm {...auth} />;
}

export default LoginPage;
