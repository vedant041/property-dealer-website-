export default function PropertyMoreDetails() {

  const details = [
    { label: "Booking Amount", value: "₹ 1.60 Cr" },
    { label: "Price Breakup", value: "₹35 Lac" },
    { label: "Area", value: "1200 sq. ft" },
    { label: "Address", value: "Andheri East, Mumbai" },
    { label: "Landmarks", value: "Green Hotel" },
    { label: "Furnishing", value: "Furnished" },
    { label: "Overlooking", value: "Garden/Park, Main Road" },
    { label: "Age of Construction", value: "Less than 5 years" },
    { label: "Water Availability", value: "24 Hours Available" },
    { label: "Status of Electricity", value: "No/Rare Powercut" },
    { label: "Lift", value: "1" },
  ];

  return (
    <div
      className="
      w-full
      rounded-[15px]
      border border-white/30
      backdrop-blur-[4px]
      px-4 sm:px-6
      py-5
      text-white
      "
      style={{ background: "rgba(31,58,95,0.10)" }}
    >

      {/* TITLE */}
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        More Details
      </h2>

      {/* DETAILS LIST */}
      <div className="flex flex-col gap-4 sm:gap-5">

        {details.map((item, index) => (
          <div
            key={index}
            className="
            grid
            grid-cols-1
            sm:grid-cols-[200px_1fr]
            gap-1
            sm:gap-4
            text-sm
            "
          >

            {/* LABEL */}
            <span className="text-white/70">
              {item.label}
            </span>

            {/* VALUE */}
            <span className="text-white font-medium">
              {item.value}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}