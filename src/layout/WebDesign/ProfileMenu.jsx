import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { Icon } from "@iconify/react";
import useOutsideClick from "../../hooks/useOutsideClick";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useOutsideClick(menuRef, () => setOpen(false));

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          bg-white/10 hover:bg-white/20
          px-3 py-1.5
          rounded-full
          border border-white/20
          transition
        "
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />

        <Icon
          icon="mdi:chevron-down"
          className="text-white"
          width={20}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-40
            bg-[#0B1F3A]
            border border-white/15
            rounded-xl
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          <button
            onClick={handleLogout}
            className="
              w-full text-left
              px-4 py-3
              text-sm text-white
              hover:bg-white/10
              transition
            "
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
