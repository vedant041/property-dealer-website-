import { useState } from "react";

export default function PropertyGallery() {
  const images = [
    "/2BHKimg1.png",
    "/Interior4.jpg",
    "/Interior2.jpg",
  ];

  const [active, setActive] = useState(0);

  return (
    <div
      className="
      w-full
      flex
      flex-col
      lg:flex-row
      gap-4
      items-start
      "
    >
      {/* MAIN IMAGE */}
      <div
        className="
        relative
        overflow-hidden
        w-full
        lg:w-[666px]
        h-[220px]
        sm:h-[260px]
        md:h-[300px]
        lg:h-[308px]
        rounded-[9px]
        "
      >
        <img
          src={images[active]}
          className="w-full h-full object-cover"
          alt="Property"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />

        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setActive((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="
          absolute
          left-3
          md:left-4
          top-1/2
          -translate-y-1/2
          w-[30px]
          h-[30px]
          md:w-[34px]
          md:h-[34px]
          rounded-[8px]
          bg-white/40
          backdrop-blur-[4px]
          border border-white/40
          flex items-center justify-center
          hover:bg-white/50
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1F2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setActive((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
          className="
          absolute
          right-3
          md:right-4
          top-1/2
          -translate-y-1/2
          w-[30px]
          h-[30px]
          md:w-[34px]
          md:h-[34px]
          rounded-[8px]
          bg-white/40
          backdrop-blur-[4px]
          border border-white/40
          flex items-center justify-center
          hover:bg-white/50
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1F2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* THUMBNAILS */}
      <div
        className="
        grid
        grid-cols-3
        sm:grid-cols-4
        lg:flex
        lg:flex-col
        gap-3
        w-full
        lg:w-auto
        "
      >
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
            w-full
            h-[70px]
            sm:h-[80px]
            lg:w-[182px]
            lg:h-[94px]
            rounded-[9px]
            overflow-hidden
            border
            transition
            ${
              active === index
                ? "border-white"
                : "border-white/20 opacity-70 hover:opacity-100"
            }
            `}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="Thumbnail"
            />
          </button>
        ))}
      </div>
    </div>
  );
}