export default function PropertyAbout() {
  return (
    <div
      className="
      w-full
      rounded-[15px]
      bg-[#1F3A5F]/10
      backdrop-blur-md
      border border-white/30
      p-4 sm:p-5 lg:p-6
      flex flex-col
      gap-3
      text-white
      "
    >
      {/* TITLE */}
      <h3 className="text-sm sm:text-base font-semibold">
        About Property
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
        text-sm sm:text-base lg:text-lg
        text-white/90
        leading-relaxed
        "
      >
        This well-maintained 2 BHK apartment in Andheri East offers spacious
        interiors, natural light, and easy access to major roads and daily
        conveniences. Ideal for families or working professionals looking for a
        comfortable urban home.
      </p>
    </div>
  );
}