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

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (!valid && !emailRegex.test(email) && password.length < 6) {
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    }

    if (!valid) return;

    dispatch(login({ email }));
    onClose?.();
    navigate("/with-login");
  };

  return (
    <>
      {toast && (
        <div className="fixed top-20 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-[100000] text-xs">
          Email and Password are invalid
        </div>
      )}

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center px-4 z-[9999]">

        <div
          className="
          w-full
          max-w-[380px]

          min-h-[70vh] md:min-h-0

          rounded-[9px]
          bg-white/10
          backdrop-blur-md
          border border-white/20

          p-4

          flex
          flex-col
          justify-between

          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
          text-white
          relative
          "
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/70 hover:text-white"
          >
            <Icon icon="mdi:close" width={20} />
          </button>

          {/* Top Section */}
          <div className="flex flex-col gap-[10px]">

            <div>
              <h1 className="text-[20px] font-semibold">Login</h1>
              <p className="text-sm text-white/70">Welcome Back</p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-white/70">
                Your Email Id
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="
                h-[42px]
                px-3
                rounded-md
                bg-white/15
                border border-white/30
                text-sm
                outline-none
                "
              />

              {emailError && (
                <p className="text-red-400 text-xs">{emailError}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-xs text-white/70">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="
                h-[42px]
                px-3
                pr-10
                rounded-md
                bg-white/15
                border border-white/30
                text-sm
                outline-none
                "
              />

              <Icon
                icon={showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"}
                className="
                absolute
                right-3
                top-[30px]
                text-white/70
                cursor-pointer
                "
                width={18}
                onClick={() => setShowPassword(!showPassword)}
              />

              {passwordError && (
                <p className="text-red-400 text-xs">
                  {passwordError}
                </p>
              )}
            </div>

            <Button variant="auth" onClick={handleLogin}>
              Continue
            </Button>

          </div>


        </div>

      </div>
    </>
  );
}