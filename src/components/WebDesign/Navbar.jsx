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
  const [desktopMenu, setDesktopMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileProfile, setMobileProfile] = useState(false);

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

        {/* HAMBURGER */}
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
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setMobileProfile(true);
                  } else {
                    setDesktopMenu(!desktopMenu);
                  }
                }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10"
              >
                <img
                  src="/LoginUserimg.jpg"
                  className="w-8 h-8 rounded-full"
                  alt="user"
                />
                <Icon icon="mdi:chevron-down" />
              </button>

              {/* DESKTOP DROPDOWN */}
              {desktopMenu && (
                <div
                  className="
                  hidden md:block
                  absolute
                  right-0
                  top-[60px]
                  w-[235px]
                  bg-[#43557A]
                  rounded-2xl
                  shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                  overflow-hidden
                  z-[10000]
                  "
                >

                  <div className="flex items-center gap-4 p-5">

                    <img
                      src="/LoginUserimg.jpg"
                      className="w-12 h-12 rounded-full"
                      alt="user"
                    />

                    <div>
                      <p className="text-white text-lg font-semibold">
                        James Bon
                      </p>

                      <p className="text-white/70 text-sm">
                        user234@gmail.com
                      </p>
                    </div>

                  </div>

                  <div className="border-t border-white/30"></div>

                  <button
                    onClick={() => {
                      dispatch(logout());
                      setDesktopMenu(false);
                    }}
                    className="
                    flex
                    items-center
                    gap-3
                    w-full
                    px-5
                    py-4
                    text-[#FF6A4A]
                    text-lg
                    hover:bg-white/10
                    transition
                    "
                  >
                    <Icon icon="mdi:logout" width={22} />
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

          {/* DRAWER */}
          <div className="w-[260px] h-full bg-[#6F6F6F] text-white p-5 flex flex-col">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">More</h2>

              <button onClick={() => setMobileMenu(false)}>
                <Icon icon="mdi:close" width={22} />
              </button>
            </div>

            {/* LINKS */}
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

            {/* FOLLOW US */}
            <div className="mt-6 flex flex-col gap-3">

              <p className="text-sm">Follow Us:</p>

              <div className="flex items-center gap-3">

                {[
                  { icon: "mdi:close", color: "text-white" },
                  { icon: "mdi:instagram", color: "text-pink-400" },
                  { icon: "mdi:facebook", color: "text-blue-400" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="
                    w-9
                    h-9
                    rounded-full
                    border border-white/30
                    bg-white/10
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon icon={item.icon} className={item.color} width={18} />
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* OVERLAY */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMobileMenu(false)}
          />

        </div>
      )}


      {/* MOBILE PROFILE DRAWER */}
      {mobileProfile && (
        <div className="fixed inset-0 z-[10000] flex justify-end md:hidden">

          <div className="w-[300px] h-full bg-[#6F6F6F] text-white p-6 flex flex-col">

            <div className="flex justify-between items-center mb-6">

              <div className="flex items-center gap-3">

                <img
                  src="/LoginUserimg.jpg"
                  className="w-12 h-12 rounded-full"
                  alt="user"
                />

                <div>
                  <p className="font-medium">James Bon</p>
                  <p className="text-xs text-white/70">
                    user234@gmail.com
                  </p>
                </div>

              </div>

              <button onClick={() => setMobileProfile(false)}>
                <Icon icon="mdi:close" width={22} />
              </button>

            </div>

            <div className="border-b border-white/30 mb-6"></div>

            <button
              onClick={() => {
                dispatch(logout());
                setMobileProfile(false);
              }}
              className="flex items-center gap-3 text-[#FF6A4A] hover:text-red-300 transition"
            >
              <Icon icon="mdi:logout" width={20} />
              Log out
            </button>

          </div>

          <div
            className="flex-1 bg-black/40"
            onClick={() => setMobileProfile(false)}
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