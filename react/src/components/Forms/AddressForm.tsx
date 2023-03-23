import { FormWrapper } from "./FormWrapper";

type AddressData = {
  City: string;
  SubCity: string;
  Phone: string;
  Kebele: string;
  Woreda: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  City,
  SubCity,
  Phone,
  Kebele,
  Woreda,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Account">
      <label>City</label>
      <input
        autoFocus
        required
        type="text"
        value={City}
        onChange={(e) => updateFields({ City: e.target.value })}
      />
      <label>Sub-City</label>
      <input
        autoFocus
        required
        type="text"
        value={SubCity}
        onChange={(e) => updateFields({ SubCity: e.target.value })}
      />
      <label>Phone</label>
      <input
        autoFocus
        required
        type="number"
        value={Phone}
        onChange={(e) => updateFields({ Phone: e.target.value })}
      />
      <label>Kebele</label>
      <input
        required
        type="text"
        value={Kebele}
        onChange={(e) => updateFields({ Kebele: e.target.value })}
      />
      <label>Woreda</label>
      <input
        required
        min={1}
        type="number"
        value={Woreda}
        onChange={(e) => updateFields({ Woreda: e.target.value })}
      />
    </FormWrapper>
  );
}
