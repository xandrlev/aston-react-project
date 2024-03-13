import React, { FC } from "react";

import { Form } from "./Form";

export const LogIn: FC = () => {
  const handleLogin = () => {};
  return (
    <div className="container">
      <Form title="Log in" handleClick={handleLogin} />
    </div>
  );
};
