const images = [
  "/2BHKimg2.png",
  "/Interior1.jpg",
  "/Interior5.jpg",
  "/Interior4.jpg",
];

export default function PropertyImages() {
  return (
    <div
      className="
        w-full
        max-w-[590px]
        h-[550px]
        rounded-[15px]
        bg-[#1F3A5F]/10
        backdrop-blur-md
        border border-white/30
        p-[24px]
        flex flex-col
        gap-[14px]
        text-white
      "
    >
      {/* TITLE */}
      <h3 className="text-[16px] font-semibold leading-tight">
        Property Images
      </h3>

      {/* SCROLL AREA */}
      <div
        className="
          flex-1
          flex flex-col
          gap-[14px]
          overflow-y-auto
          pr-2
        "
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`property-${index}`}
            className="
              w-full
              h-[160px]
              object-cover
              rounded-[10px]
            "
          />
        ))}
      </div>
    </div>
  );
}
