import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import AuthModal from "../auth/AuthModal";
import { Icon } from "@iconify/react";

export default function Navbar() {

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [openAuth, setOpenAuth] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
        relative
        w-full
        h-[60px]
        backdrop-blur-sm
        border-b border-white/20
        px-4 md:px-10
        flex
        items-center
        justify-between
        text-white
        "
      >

        {/* HAMBURGER MENU (mobile) */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-2xl"
        >
          <Icon icon="mdi:menu" />
        </button>

        {/* LOGO */}
        <Link
          to="/"
          className="
          absolute left-1/2 -translate-x-1/2
          md:static md:translate-x-0
          "
        >
          <img
            src="/Budhis.png"
            alt="Budhis"
            className="h-8 md:h-10 object-contain"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* DESKTOP LINKS */}
          <Link
            to="/about"
            className="hidden md:block hover:text-[#FFD24A]"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="hidden md:block hover:text-[#FFD24A]"
          >
            Contact Us
          </Link>

          {!isAuthenticated ? (
            <button
              onClick={() => setOpenAuth(true)}
              className="flex items-center gap-2 px-4 h-9 rounded-full border border-white/30 bg-white/10"
            >
              <Icon icon="iconamoon:profile-circle-light" width={18} />
              Login
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10"
              >
                <img
                  src="/LoginUserimg.jpg"
                  className="w-8 h-8 rounded-full"
                  alt="user"
                />
                <Icon icon="mdi:chevron-down" />
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow">
                  <button
                    onClick={() => {
                      dispatch(logout());
                      setOpenMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
{mobileMenu && (
  <div
    className="
    md:hidden
    absolute
    top-[60px]
    left-0
    w-full
    backdrop-blur-md
    bg-[#0B1F3A]/60
    border-b border-white/20
    z-40
    "
  >
    <div className="flex flex-col text-white">

      <Link
        to="/about"
        onClick={() => setMobileMenu(false)}
        className="
        px-6
        py-4
        hover:bg-white/10
        "
      >
        About Us
      </Link>

      <Link
        to="/contact"
        onClick={() => setMobileMenu(false)}
        className="
        px-6
        py-4
        hover:bg-white/10
        "
      >
        Contact Us
      </Link>

    </div>
  </div>
)}

      {/* AUTH MODAL */}
      {openAuth && (
        <AuthModal onClose={() => setOpenAuth(false)} />
      )}

    </>
  );
}