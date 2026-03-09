import { useState } from "react";
import { useNavigate } from "react-router-dom";
import investorList from "../../data/investorList";
import InvestorRow from "../../components/PropertyOwner/investors/InvestorRow";
import InvestorFilters from "../../components/PropertyOwner/investors/InvestorFilters";

export default function Investors() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const filtered = investorList.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "" || item.status === status;
    const matchesType = type === "" || item.type === type;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="flex justify-center pb-10">
      <div
        className="
          w-[1122px]
          p-6
          rounded-xl
          backdrop-blur-md
          border border-white/20
          bg-[#29354D]/45
          text-white
        "
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold">Investors</h1>
            <p className="text-sm text-white/60">
              Track all user investments across properties
            </p>
          </div>

          <InvestorFilters
            search={search}
            onSearchChange={setSearch}
            status={status}
            onStatusChange={setStatus}
            type={type}
            onTypeChange={setType}
          />
        </div>

        <div
          className="
            rounded-lg
            border border-white/20
            overflow-hidden
          "
        >
          <div
            className="
              grid grid-cols-[2fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_60px]
              px-4 py-3
              bg-white/5
              text-white/70
              text-sm
            "
          >
            <div>Investor</div>
            <div>Invested On</div>
            <div>Property</div>
            <div>Plan</div>
            <div>Type</div>
            <div>Amount</div>
            <div>Share</div>
            <div>Status</div>
            <div></div>
            <div>Action</div>
          </div>

          {filtered.map((item) => (
            <InvestorRow
              key={item.id}
              data={item}
              navigate={navigate}
            />
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          {["1", "2", "3", "...", "40"].map((page) => (
            <button
              key={page}
              className="
                px-3 py-1
                bg-white/10
                rounded
                text-sm
                hover:bg-white/20
              "
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
