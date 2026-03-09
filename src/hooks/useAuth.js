import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

export default function useAuth() {
  const dispatch = useDispatch();

  const loginUser = (email, password) => {
    if (!email || !password) {
      alert("Enter credentials");
      return;
    }

    dispatch(
      login({
        email,
        name: "Demo User",
      })
    );
  };

  return { loginUser };
}
