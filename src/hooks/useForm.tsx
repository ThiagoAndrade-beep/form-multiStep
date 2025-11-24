import { ReactElement, useState, type FormEvent } from "react";

export function useForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(step:number, event?: FormEvent) {
        if(event) event.preventDefault();

        if(step < 0 || step >= steps.length) return

        setCurrentStep(step);
    }

    return {
        changeStep,
        currentComponent: steps[currentStep],
        currentStep,
        isLatestStep: currentStep + 1 === steps.length ? true : false
    }
}