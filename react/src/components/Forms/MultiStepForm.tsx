import { ReactElement, useState } from "react";

export function MultiStepForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStep(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goto(step: number) {
    setCurrentStep(step);
  }

  function finish(step: number) {
    setCurrentStep(step);
  }

  return {
    currentStep,
    step: steps[currentStep],
    goto,
    steps,
    next,
    back,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    
  };
}
