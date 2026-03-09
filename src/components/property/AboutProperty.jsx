export default function AboutProperty() {
  return (
    <div
      className="
      w-full
      rounded-[15px]
      border border-white/30
      backdrop-blur-[4px]
      px-4 sm:px-6
      py-4
      text-white
      "
      style={{ background: "rgba(31,58,95,0.10)" }}
    >
      {/* TITLE */}
      <h2 className="text-base sm:text-lg font-semibold mb-2">
        About Property
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
        text-sm
        sm:text-base
        text-white/80
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