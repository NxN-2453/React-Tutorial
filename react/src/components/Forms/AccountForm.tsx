import { FormWrapper } from "./FormWrapper";

type AccountData = {
  Email: string;
  Password: string;
};

type AccountProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({ Email, Password, updateFields }: AccountProps) {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={Email}
        onChange={(e) => updateFields({ Email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={Password}
        onChange={(e) => updateFields({ Password: e.target.value })}
      />
    </FormWrapper>
  );
}
