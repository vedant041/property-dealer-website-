import { Search, ChevronDown } from "lucide-react";

function SelectBox({ value, onChange, label, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          bg-white/10
          border border-white/20
          rounded-lg
          px-4 py-2
          text-sm
          outline-none
          pr-8
        "
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#1B2B45]">
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={14}
        className="absolute right-2 top-3 text-white/60"
      />
    </div>
  );
}

export default function InvestorFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  type,
  onTypeChange,
}) {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-2.5 text-white/50"
        />

        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search"
          className="
            pl-9 pr-3 py-2
            bg-white/10
            border border-white/20
            rounded-lg
            text-sm
            outline-none
          "
        />
      </div>

      <SelectBox
        value={status}
        onChange={onStatusChange}
        label="Status"
        options={["Active", "Cancelled", "Matured", "Pending"]}
      />

      <SelectBox
        value={type}
        onChange={onTypeChange}
        label="Property Type"
        options={["Residential", "Commercial"]}
      />
    </div>
  );
}

