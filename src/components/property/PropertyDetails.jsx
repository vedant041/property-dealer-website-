export default function PropertyDetails() {

  const details = [
    ["Total Price", "₹ 1.60 Cr"],
    ["Price Per Share", "₹12,200"],
    ["Minimum Investment", "₹12,200, Monthly"],
    ["Expected Return (%)", "2 %"],
    ["Area", "1200 sq. ft"],
    ["Location", "Andheri East, Mumbai"],
    ["Landmarks", "Green Hotel"],
    ["Furnishing", "Furnished"],
    ["Overlooking", "Garden/Park, Main Road"],
    ["Age of Construction", "Less than 5 years"],
    ["Water Availability", "24 Hours Available"],
    ["Status of Electricity", "No/Rare Powercut"],
    ["Parking", "1"],
    ["Facing", "East"],
    ["Lift", "1"],
    ["Floor Number", "B603"],
    ["Total Floors", "8"],
    ["Bedrooms", "2"],
    ["Bathrooms", "2"],
    ["Balcony", "2"],
  ];

  return (
    <div
      className="
      w-full
      rounded-[15px]
      bg-[#1F3A5F]/10
      backdrop-blur-sm
      border border-white/30
      p-4 sm:p-5 lg:p-6
      flex flex-col
      gap-4
      text-white
      "
    >

      {/* TITLE */}
      <h3 className="text-sm sm:text-base font-semibold mb-2">
        Property Details
      </h3>

      {/* DETAILS GRID */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-[200px_1fr]
        gap-y-4
        text-sm
        "
      >

        {details.map(([label, value]) => (
          <div key={label} className="contents">

            <span className="text-white/80">
              {label}
            </span>

            <span className="text-white font-medium">
              {value}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}