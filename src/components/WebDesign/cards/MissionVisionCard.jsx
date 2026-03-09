export default function MissionVisionCard() {
  return (
    <div
      className="
      w-full
      h-auto
      md:h-[340px]
      rounded-[18px]
      border border-white/30
      backdrop-blur-md
      flex
      flex-col
      overflow-hidden
      "
      style={{ background: "rgba(31,58,95,0.12)" }}
    >
      {/* HEADER */}
      <div className="px-4 md:px-5 py-1 border-b border-white/20">

        <h2 className="text-[15px] md:text-[16px] font-semibold text-white">
          Our Mission & Vision
        </h2>

        <p className="text-[12px] md:text-[13px] text-white/70">
          Shaping a transparent tech-enabled property ecosystem
        </p>

      </div>

      {/* IMAGE */}
      <div className="h-[100px] md:h-[120px] w-full">
        <img
          src="/earthimg.png"
          alt="Mission Vision"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div
        className="
        px-3 md:px-4
        py-3
        flex
        flex-col
        gap-2
        text-[12px] md:text-[13px]
        text-white/90
        "
      >

        {/* MISSION */}
        <div>

          <h3 className="text-[#FFD24A] font-semibold text-[13px] md:text-[14px] mb-1">
            Mission
          </h3>

          <p className="leading-relaxed">
            Make property investment transparent, accessible and
            technology-driven through data, trust and innovation.
          </p>

        </div>

        {/* VISION */}
        <div>

          <h3 className="text-[#FFD24A] font-semibold text-[13px] md:text-[14px] mb-1">
            Vision
          </h3>

          <p className="leading-relaxed">
            Build a trusted platform connecting investors,
            developers and communities into one ecosystem.
          </p>

        </div>

      </div>
    </div>
  );
}