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
        z-[9999]
        "
      >

        {/* HAMBURGER MENU */}
        <button
          onClick={() => setMobileMenu(true)}
          className="md:hidden text-2xl"
        >
          <Icon icon="mdi:menu" />
        </button>

        {/* LOGO */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
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
            About
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

              {/* PROFILE BUTTON */}
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

              {/* DESKTOP LOGOUT CARD */}
              {openMenu && (
                <div
                  className="
                  hidden md:block
                  absolute
                  right-0
                  mt-3
                  w-[260px]
                  z-[9999]

                  bg-white/10
                  backdrop-blur-md
                  border border-white/20

                  rounded-xl
                  shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                  overflow-hidden
                  "
                >

                  {/* PROFILE */}
                  <div className="flex items-center gap-3 p-4">

                    <img
                      src="/LoginUserimg.jpg"
                      className="w-12 h-12 rounded-full"
                      alt="user"
                    />

                    <div>
                      <p className="text-white font-medium">
                        James Bon
                      </p>

                      <p className="text-white/70 text-sm">
                        user234@gmail.com
                      </p>
                    </div>

                  </div>

                  <div className="border-t border-white/20"></div>

                  {/* LOGOUT */}
                  <button
                    onClick={() => {
                      dispatch(logout());
                      setOpenMenu(false);
                    }}
                    className="
                    flex
                    items-center
                    gap-3
                    w-full
                    px-4
                    py-3
                    text-[#FF6A4A]
                    hover:bg-white/10
                    transition
                    "
                  >
                    <Icon icon="mdi:logout" width={20} />
                    Log out
                  </button>

                </div>
              )}

            </div>
          )}

        </div>
      </nav>


      {/* MOBILE MENU DRAWER */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[9999] flex md:hidden">

          <div className="w-[260px] h-full bg-[#6F6F6F] text-white p-5 flex flex-col gap-6">

            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">More</h2>

              <button onClick={() => setMobileMenu(false)}>
                <Icon icon="mdi:close" width={22} />
              </button>
            </div>

            <div className="flex flex-col text-sm">

              <Link
                to="/about"
                onClick={() => setMobileMenu(false)}
                className="py-3 border-b border-white/30"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="py-3 border-b border-white/30"
              >
                Contact Us
              </Link>

            </div>

            <div className="flex flex-col gap-3">

              <p className="text-sm">Follow Us:</p>

              <div className="flex items-center gap-3">

                {[
                  { icon: "mdi:close", color: "text-white" },
                  { icon: "mdi:instagram", color: "text-pink-400" },
                  { icon: "mdi:facebook", color: "text-blue-400" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
                  >
                    <Icon icon={item.icon} className={item.color} width={16} />
                  </button>
                ))}

              </div>

            </div>

          </div>

          <div
            className="flex-1 bg-black/40"
            onClick={() => setMobileMenu(false)}
          />

        </div>
      )}


      {/* AUTH MODAL */}
      {openAuth && (
        <AuthModal onClose={() => setOpenAuth(false)} />
      )}

    </>
  );
}