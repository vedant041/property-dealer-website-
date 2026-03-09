import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
      w-full
      h-[45px]
      flex
      items-center
      justify-center
      relative
      backdrop-blur-[4px]
      px-4
      py-4
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

      {/* INNER CONTAINER */}
      <div
        className="
        w-full
        max-w-[1440px]
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        "
      >
        {/* LEFT – LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/Budhis.png"
            alt="Budhis Logo"
            className="
            h-7
            md:h-8
            object-contain
            cursor-pointer
            "
          />
        </Link>

        <p className="text-xs md:text-sm text-white/80 text-center">
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
        {/* RIGHT – SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          {[
            { icon: "mdi:close", color: "text-white" },
            { icon: "mdi:instagram", color: "text-pink-400" },
            { icon: "mdi:facebook", color: "text-blue-400" },
          ].map((item, index) => (
            <button
              key={index}
              className="
              w-8
              h-8
              md:w-9
              md:h-9
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
              <Icon icon={item.icon} className={item.color} width={16} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}