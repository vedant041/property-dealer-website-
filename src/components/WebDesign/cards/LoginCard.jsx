import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { Icon } from "@iconify/react";
import { login } from "../../../redux/authSlice";

export default function LoginCard({ onSwitch, onClose }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [toast, setToast] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {

    let valid = true;

    setEmailError("");
    setPasswordError("");

    /* EMAIL VALIDATION */

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    /* PASSWORD VALIDATION */

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    /* BOTH INVALID */

    if (!valid && !emailRegex.test(email) && password.length < 6) {
      setToast(true);

      setTimeout(() => {
        setToast(false);
      }, 3000);
    }

    if (!valid) return;

    dispatch(login({ email }));

    onClose?.();
    navigate("/with-login");
  };

  return (
    <>

      {/* TOAST */}
      {toast && (
        <div
          className="
          fixed
          top-4 right-4
          md:top-6 md:right-6
          bg-red-500
          text-white
          px-4 py-2
          md:px-5 md:py-3
          rounded-lg
          shadow-lg
          z-50
          text-xs md:text-sm
          "
        >
          Email and Password are invalid
        </div>
      )}

      <div
        className="
        w-full
        max-w-[520px]
        mx-auto
        rounded-[10px]
        bg-white/14
        backdrop-blur-xl
        px-5 py-6
        md:p-[30px]
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]
        flex
        flex-col
        text-white
        relative
        "
      >

        {/* CLOSE BUTTON */}

        <button
          onClick={onClose}
          className="
          absolute
          top-3
          right-3
          md:top-4 md:right-4
          text-white/70
          hover:text-white
          "
        >
          <Icon icon="mdi:close" width={22} />
        </button>

        {/* HEADER */}

        <div className="mb-3">

          <h1 className="text-xl md:text-[28px] font-bold">
            Login
          </h1>

          <h3 className="text-sm md:text-[16px] text-white/80">
            Welcome Back
          </h3>

        </div>

        {/* EMAIL */}

        <div className="flex flex-col gap-2 mb-3">

          <label className="text-xs md:text-sm text-white/70">
            Your Email Id
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="
            h-[42px]
            md:h-[44px]
            px-4
            rounded-lg
            bg-white/15
            border border-white/30
            text-sm
            text-white
            outline-none
            "
          />

          {emailError && (
            <p className="text-red-400 text-xs">
              {emailError}
            </p>
          )}

        </div>

        {/* PASSWORD */}

        <div className="flex flex-col gap-2 relative mb-4">

          <label className="text-xs md:text-sm text-white/70">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="
            h-[42px]
            md:h-[44px]
            px-4
            pr-10
            rounded-lg
            bg-white/15
            border border-white/30
            text-sm
            text-white
            outline-none
            "
          />

          <Icon
            icon={showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"}
            className="
            absolute
            right-3
            md:right-4
            top-[34px]
            md:top-[38px]
            text-white/70
            cursor-pointer
            "
            width={20}
            onClick={() => setShowPassword(!showPassword)}
          />

          {passwordError && (
            <p className="text-red-400 text-xs">
              {passwordError}
            </p>
          )}

        </div>

        {/* BUTTON */}

        <Button variant="auth" onClick={handleLogin}>
          Continue
        </Button>

      </div>
    </>
  );
}