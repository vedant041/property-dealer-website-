import { AddPropertyInput as Input, AddPropertySelect as Select } from "./Fields";

export default function ExtraDetailsSection({ form, onChange }) {
  return (
    <div className="grid grid-cols-5 gap-4 mb-6">
      <Input
        label="Age"
        name="age"
        value={form.age}
        onChange={onChange}
      />
      <Select
        label="Unit"
        name="ageUnit"
        value={form.ageUnit}
        onChange={onChange}
        options={["Year", "Month"]}
      />
      <Select
        label="Parking"
        name="parking"
        value={form.parking}
        onChange={onChange}
        options={["0", "1", "2", "3+"]}
      />
      <Select
        label="Facing"
        name="facing"
        value={form.facing}
        onChange={onChange}
        options={["East", "West", "North", "South"]}
      />
      <Input
        label="Floor No"
        name="floor"
        value={form.floor}
        onChange={onChange}
      />
    </div>
  );
}

