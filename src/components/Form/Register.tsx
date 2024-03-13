import { FC } from "react";

import { Form } from "./Form";

export const Register: FC = () => {
  const handleLogin = () => {};
  return (
    <div className="container">
      <Form title="Sign up" handleClick={handleLogin} />
    </div>
  );
};
