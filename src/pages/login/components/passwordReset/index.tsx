import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormForgotPassword } from "components/Forms/FormForgotPassword";
import { FormResetPassword } from "components/Forms/FormResetPassword";
import { useEffect, useState } from "react";

export interface PasswordResetProps {
  back: () => void;
}

export const PasswordReset: React.FC<PasswordResetProps> = ({ back }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState<string | null>(null);

  const nextStep = (email: string) => {
    setEmail(email);
    setStep(2);
  };

  return (
    <FlexBox direction="column">
      {step == 1 && (
        <FormForgotPassword
          next={(email: string) => nextStep(email)}
          email={email}
        />
      )}
      {step == 2 && email && (
        <FormResetPassword
          email={email}
          back={() => setStep(1)}
          backToLogin={back}
        />
      )}
    </FlexBox>
  );
};
