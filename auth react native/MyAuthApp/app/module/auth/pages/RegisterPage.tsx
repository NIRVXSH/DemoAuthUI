import RegisterForm from "../components/RegisterForm";
import useAuth from "../hooks/useAuth";

function RegisterPage() {
  const auth = useAuth();
  return <RegisterForm {...auth} />;
}

export default RegisterPage;
