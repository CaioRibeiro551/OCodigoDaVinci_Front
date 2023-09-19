import { useState } from "react";
import "./style.css";
import SteperAside from "../../components/SteperAside";
import FormSignUp from "../../components/FormSignUp";
import SteperFooter from "../../components/SteperFooter";

export default function SignUp() {
  const [stepIndex, setStepIndex] = useState(0);

  const handleReturnStep = () => {
    if (stepIndex === 0) {
      return;
    } else {
      setStepIndex(stepIndex - 1);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-container-left">
        <SteperAside
          stepIndex={stepIndex}
          handleReturnStep={handleReturnStep}
        />
      </div>
      <div className="container-main">
        <div className="signup-container-rigth">
          <FormSignUp stepIndex={stepIndex} setStepIndex={setStepIndex} />
        </div>
        <div>
          <SteperFooter stepIndex={stepIndex} />
        </div>
      </div>
    </div>
  );
}
