import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
}

const Auth = ({ submitLabel, onSubmit, children }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "50%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => onSubmit({ email, password })}
      >
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
