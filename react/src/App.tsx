import { AccountForm } from "./components/Forms/AccountForm";
import { AddressForm } from "./components/Forms/AddressForm";
import { MultiStepForm } from "./components/Forms/MultiStepForm";
import { UserForm } from "./components/Forms/UserForm";
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  city: string;
  subCity: string;
  phone: number;
  kebele: string;
  woreda: number;
};

const INITAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
  email: "",
  password: "",
  city: "",
  subCity: "",
  phone: 0,
  kebele: "",
  woreda: 0,
};

function App() {
  const [data, setData] = useState(INITAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStep, step, back, next, isFirstStep, isLastStep } =
    MultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
      <div>four</div>,
      <div>five</div>,
    ]);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Success!");
  }

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid black",
        background: "white",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "comics sans ms",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStep + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: ".5rem",
          }}
        >
          {!isFirstStep && (
            <button onClick={back} type="button">
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}
export default App;
