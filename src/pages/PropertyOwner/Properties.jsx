import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropertyCard from "../../components/PropertyOwner/cards/PropertyCard";
import { propertyList } from "../../data/propertyList";
import AddPropertyModal from "../../components/PropertyOwner/modals/AddPropertyModal";

export default function Properties() {
  const properties = useSelector((state) => state.property.properties);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  function handleAdd(data) {
    setShowModal(false);

    navigate("/add-property", {
      state: data,
    });
  }

  const allProperties = [...propertyList, ...properties];

  const filteredProperties =
    filter === "All"
      ? allProperties
      : allProperties.filter((item) => item.type === filter);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">
            Property List
          </h1>
          <p className="text-white/60 text-sm">
            List of available properties
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="
              bg-white/10
              backdrop-blur-md
              border border-white/20
              rounded-md
              px-4
              py-2
              text-sm
              outline-none
              cursor-pointer
              focus:ring-2
              focus:ring-cyan-400
              text-white
            "
          >
            <option value="" disabled hidden>
              Property Type
            </option>
            <option value="All" className="bg-[#1B2B45] text-white">
              All
            </option>
            <option value="Residential" className="bg-[#1B2B45] text-white">
              Residential
            </option>
            <option value="Commercial" className="bg-[#1B2B45] text-white">
              Commercial
            </option>
            <option value="Industrial" className="bg-[#1B2B45] text-white">
              Industrial
            </option>
          </select>

          <button
            onClick={() => setShowModal(true)}
            className="
              bg-[#1FD2AF]
              hover:bg-[#18bfa0]
              text-white
              px-4
              py-2
              rounded-md
              font-medium
            "
          >
            Add Property
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((item, index) => (
            <PropertyCard
              key={item.id || index}
              property={item}
            />
          ))
        ) : (
          <p className="text-white/60 text-center">
            No properties found
          </p>
        )}
      </div>

      {showModal && (
        <AddPropertyModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAdd}
        />
      )}
    </div>
  );
}
