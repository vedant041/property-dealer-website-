import { useRef, useState } from "react";
import { MoreVertical, User } from "lucide-react";
import useOutsideClick from "../../../hooks/useOutsideClick";

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-500/20 text-green-400",
    Cancelled: "bg-red-500/20 text-red-400",
    Matured: "bg-blue-500/20 text-blue-400",
    Pending: "bg-orange-500/20 text-orange-400",
  };

  return (
    <span
      className={`
        px-3 py-1
        rounded-full
        text-xs
        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}

function MenuItem({ text, danger, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left px-4 py-2 text-sm
        hover:bg-white/10 transition
        ${danger ? "text-red-400" : "text-white"}
      `}
    >
      {text}
    </button>
  );
}

export default function InvestorRow({ data, navigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div
      className="
        grid grid-cols-[2fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_60px]
        px-4 py-4
        border-b border-white/10
        text-sm
        items-center
      "
    >
      <div className="flex gap-3 items-center">
        <div
          className="
            w-9 h-9
            rounded-full
            bg-cyan-500/20
            flex justify-center items-center
          "
        >
          <User size={18} className="text-cyan-400" />
        </div>

        <div>
          <p>{data.name}</p>
          <p className="text-xs text-white/50">Investor</p>
        </div>
      </div>

      <div>{data.date}</div>

      <div>
        <p>{data.property}</p>
        <p className="text-xs text-white/50">{data.location}</p>
      </div>

      <div>{data.plan}</div>
      <div>{data.type}</div>
      <div>{data.amount}</div>
      <div>{data.share}</div>

      <div>
        <StatusBadge status={data.status} />
      </div>

      <div />

      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="
            w-8 h-8
            rounded-full
            bg-white/10
            hover:bg-white/20
            flex justify-center items-center
          "
        >
          <MoreVertical size={16} />
        </button>

        {open && (
          <div
            className="
              absolute right-10 top-0
              w-[170px]
              bg-[#3B4E73]
              rounded-lg
              border border-white/20
              shadow-xl
              overflow-hidden
              z-50
            "
          >
            <MenuItem
              text="Remove"
              danger
              onClick={() => {
                setOpen(false);
              }}
            />

            <MenuItem
              text="View Profile"
              onClick={() => {
                setOpen(false);
                navigate(`/investor/${data.id}`);
              }}
            />

            <MenuItem
              text="See Investment"
              onClick={() => {
                setOpen(false);
                navigate(`/investment/${data.id}`);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

