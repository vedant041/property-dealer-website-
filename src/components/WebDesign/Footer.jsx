import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
      w-full
      relative
      backdrop-blur-[4px]
      px-4
      py-4 md:py-0.25
      "
      style={{
        background: "rgba(41,53,77,0.12)",
      }}
    >
      {/* TOP GRADIENT BORDER */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background:
            "linear-gradient(to right, #111629, #ffffff, #111629)",
        }}
      />

      <div className="max-w-[1440px] mx-auto text-white">

        {/* MOBILE FOOTER */}
        <div className="flex flex-col md:hidden gap-6">

          {/* LOGO */}
          <img
            src="/Budhis.png"
            alt="Budhis Logo"
            className="h-9 object-contain"
          />

          {/* DESCRIPTION */}
          <p className="text-sm text-white/80 leading-relaxed">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </p>

          {/* LINKS */}
          <div className="flex flex-col gap-3 text-base">
            <Link to="/about" className="hover:text-[#FFD24A]">
              About us
            </Link>

            <Link to="/contact" className="hover:text-[#FFD24A]">
              Contact us
            </Link>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-3">

            <p className="text-base">Follow us:</p>

            <div className="flex gap-3">

              {[
                { icon: "mdi:close", color: "text-white" },
                { icon: "mdi:instagram", color: "text-pink-400" },
                { icon: "mdi:facebook", color: "text-blue-400" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="
                  w-10
                  h-10
                  rounded-full
                  border border-white/30
                  bg-white/10
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  hover:bg-white/20
                  transition
                  "
                >
                  <Icon icon={item.icon} className={item.color} width={20} />
                </button>
              ))}

            </div>

          </div>
        </div>


        {/* DESKTOP FOOTER */}
        <div
          className="
          hidden md:flex
        items-center
        justify-between
        px-6
        h-[45px]
        backdrop-blur-[4px]
          "
        >

          {/* LEFT – LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/Budhis.png"
              alt="Budhis Logo"
              className="h-8 object-contain"
            />
          </Link>

          {/* COPYRIGHT */}
          <p className="text-sm text-white/80 text-center">
            © 2026{" "}
            <a
              href="https://accelgrowth.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD24A] hover:underline"
            >
              Accelgrowth
            </a>
            . All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
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
                bg-white/10
                backdrop-blur-md
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
                "
              >
                <Icon icon={item.icon} className={item.color} width={18} />
              </button>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}