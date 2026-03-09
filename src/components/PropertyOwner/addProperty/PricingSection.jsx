import { AddPropertyInput as Input, AddPropertySelect as Select } from "./Fields";

export default function PricingSection({ form, onChange }) {
  return (
    <>
      <h2 className="font-semibold mb-3">
        Pricing & Investment
      </h2>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <Input
          label="Total Value"
          name="totalValue"
          value={form.totalValue}
          onChange={onChange}
        />
        <Input
          label="Price / Share"
          name="pricePerShare"
          value={form.pricePerShare}
          onChange={onChange}
        />
        <Input
          label="Expected Return (%)"
          name="expectedReturn"
          value={form.expectedReturn}
          onChange={onChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Input
          label="Minimum Investment"
          name="minInvestment"
          value={form.minInvestment}
          onChange={onChange}
        />
        <Select
          label="Investment Type"
          name="minType"
          value={form.minType}
          onChange={onChange}
          options={["Monthly", "Yearly"]}
        />
      </div>
    </>
  );
}

