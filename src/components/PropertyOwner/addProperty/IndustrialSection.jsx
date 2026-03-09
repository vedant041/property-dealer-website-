import { AddPropertyInput as Input, AddPropertySelect as Select } from "./Fields";

export default function IndustrialSection({ form, onChange }) {
  if (form.type !== "Industrial") {
    return null;
  }

  return (
    <>
      <h2 className="font-semibold my-6">Industrial Details</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Input
          label="Built-up Area (sq ft)"
          name="builtUp"
          value={form.builtUp}
          onChange={onChange}
        />
        <Input
          label="Open Area (sq ft)"
          name="openArea"
          value={form.openArea}
          onChange={onChange}
        />
        <Select
          label="Industrial Type"
          name="industrialType"
          value={form.industrialType}
          onChange={onChange}
          options={["Warehouse", "Factory"]}
        />
      </div>

      <h3 className="font-semibold mb-4">Infrastructure</h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Input
          label="Ceiling Height (ft)"
          name="ceilingHeight"
          value={form.ceilingHeight}
          onChange={onChange}
        />
        <Input
          label="Entry Gate Width (ft)"
          name="entryGateWidth"
          value={form.entryGateWidth}
          onChange={onChange}
        />
        <Select
          label="Truck Access"
          name="truckAccess"
          value={form.truckAccess}
          onChange={onChange}
          options={["Yes", "No"]}
        />
      </div>

      <h3 className="font-semibold mb-4">Legal & Compliance</h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Select
          label="Zoning Type"
          name="zoningType"
          value={form.zoningType}
          onChange={onChange}
          options={["Industrial", "Commercial"]}
        />
        <Select
          label="Pollution Clearance"
          name="pollutionClearance"
          value={form.pollutionClearance}
          onChange={onChange}
          options={["Approved", "Pending"]}
        />
        <Input
          label="Power Load Capacity (kW)"
          name="powerLoad"
          value={form.powerLoad}
          onChange={onChange}
        />
      </div>
    </>
  );
}

