import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { addProperty } from "../../redux/propertySlice";
import AddPropertyToast from "../../components/PropertyOwner/addProperty/AddPropertyToast";
import {
  AddPropertyInput as Input,
  AddPropertySelect as Select,
} from "../../components/PropertyOwner/addProperty/Fields";
import IndustrialSection from "../../components/PropertyOwner/addProperty/IndustrialSection";
import ExtraDetailsSection from "../../components/PropertyOwner/addProperty/ExtraDetailsSection";
import PricingSection from "../../components/PropertyOwner/addProperty/PricingSection";
import AboutSection from "../../components/PropertyOwner/addProperty/AboutSection";

function getTitleByType(type) {
  if (type === "Residential") return "2 BHK Apartment";
  if (type === "Commercial") return "Retail Shop";
  if (type === "Industrial") return "Warehouse";
  return "Property";
}

export default function AddProperty({ onClose }) {
  const location = useLocation();
  const popupData = location.state || {};

  useSelector((state) => state.property.properties);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);

  const [form, setForm] = useState({
    title: getTitleByType(popupData.type || ""),
    type: popupData.type || "",
    status: popupData.status || "Active",
    price: "",
    location: "",
    landmark: "",
    construction: "",
    area: "",
    water: "",
    electricity: "",
    age: "",
    ageUnit: "Year",
    parking: "",
    facing: "",
    floor: "",
    bedrooms: "",
    bathrooms: "",
    balcony: "",
    lift: "",
    furnishing: "Semi",
    totalValue: "",
    pricePerShare: "",
    expectedReturn: "",
    minInvestment: "",
    minType: "Monthly",
    about: "",
    builtUp: "",
    openArea: "",
    industrialType: "",
    ceilingHeight: "",
    entryGateWidth: "",
    truckAccess: "",
    loadingDock: "",
    fireSafety: "",
    zoningType: "",
    pollutionClearance: "",
    powerLoad: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      title:
        name === "type"
          ? value === "Residential"
            ? "2 BHK Apartment"
            : value === "Commercial"
            ? "Retail Shop"
            : value === "Industrial"
            ? "Warehouse"
            : prev.title
          : prev.title,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      addProperty({
        id: Date.now(),
        title: form.title || "Property",
        type: form.type,
        category:
          form.type === "Residential"
            ? "Apartment"
            : form.type === "Commercial"
            ? "Office"
            : "Industrial",
        location: form.location,
        image: "/2BHKimg1.png",
        price: form.price || "0",
        pricePerShare: form.pricePerShare || "0",
        expectedReturn: form.expectedReturn || "0",
        sold: 0,
        investors: 0,
        invested: form.minInvestment || "0",
        return: 0,
        area: form.area || "0",
        ...form,
      })
    );

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setForm({
        ...form,
        price: "",
        location: "",
        landmark: "",
        about: "",
      });

      if (onClose) {
        onClose();
      }
    }, 800);
  }

  return (
    <div className="w-full flex justify-center relative pb-10">
      <AddPropertyToast
        show={showToast}
        title={form.title}
        onClose={() => setShowToast(false)}
      />

      <form
        onSubmit={handleSubmit}
        className="
          w-[1120px]
          p-6
          rounded-xl
          backdrop-blur
          bg-[#29354D]/40
          border border-white/20
          text-white
        "
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold flex gap-2 items-center">
              {form.title}
              <span className="text-cyan-400 text-sm">
                {form.type}
              </span>
            </h1>
          </div>

          <span className="px-3 py-1 text-xs bg-green-600 rounded">
            {form.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Select
            label="Property Type"
            name="type"
            value={form.type}
            onChange={handleChange}
            options={["Residential", "Commercial", "Industrial"]}
          />
          <Select
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={["Active", "Inactive"]}
          />
        </div>

        <h2 className="font-semibold mb-3">
          Basic Details
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <Input
            label="Price (₹)"
            name="price"
            placeholder="1.60 Cr"
            value={form.price}
            onChange={handleChange}
          />

          <div className="flex flex-col gap-1">
            <span className="text-sm text-white/70">
              Location
            </span>

            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-3 top-3 text-cyan-400"
              />

              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="
                  w-full
                  pl-9
                  bg-white/10
                  border border-white/20
                  rounded-md
                  px-3 py-2
                  text-sm
                  outline-none
                "
              >
                <option value="">Select Location</option>
                <option>Andheri East, Mumbai</option>
                <option>Viman Nagar, Pune</option>
                <option>Bhiwandi, Mumbai</option>
                <option>Baner, Pune</option>
              </select>
            </div>
          </div>

          <Input
            label="Landmark"
            name="landmark"
            placeholder="Green Hotel"
            value={form.landmark}
            onChange={handleChange}
          />
        </div>

        <Select
          label="Construction Status"
          name="construction"
          value={form.construction}
          onChange={handleChange}
          options={[
            "Under Construction",
            "Ready to Move",
            "New Project",
          ]}
        />

        <h2 className="font-semibold my-4">
          Property Info
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <Input
            label="Area (sq ft)"
            name="area"
            placeholder="1200"
            value={form.area}
            onChange={handleChange}
          />

          <Select
            label="Water Availability"
            name="water"
            value={form.water}
            onChange={handleChange}
            options={[
              "24x7 Water",
              "Limited",
              "Borewell",
            ]}
          />

          <Select
            label="Electricity"
            name="electricity"
            value={form.electricity}
            onChange={handleChange}
            options={[
              "24x7",
              "Backup",
              "Limited",
            ]}
          />
        </div>

        <IndustrialSection form={form} onChange={handleChange} />

        <ExtraDetailsSection form={form} onChange={handleChange} />

        <PricingSection form={form} onChange={handleChange} />

        <AboutSection
          value={form.about}
          onChange={handleChange}
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-white/10 rounded"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              px-5 py-2
              bg-[#1FD2AF]
              rounded
              text-black
              font-medium
            "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
