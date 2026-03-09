export function AddPropertyInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-white/70">
        {label}
      </span>
      <input
        {...props}
        className="
          bg-white/10
          border border-white/20
          rounded-md
          px-3 py-2
          text-sm
          outline-none
        "
      />
    </div>
  );
}

export function AddPropertySelect({ label, options, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-white/70">
        {label}
      </span>
      <select
        {...props}
        className="
          bg-white/10
          border border-white/20
          rounded-md
          px-3 py-2
          text-sm
          outline-none
        "
      >
        <option value="">
          Select
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#1B2B45]"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

