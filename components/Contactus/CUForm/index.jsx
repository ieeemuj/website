import React from "react";
import HookForm from "../HookForm";
import { useForm } from "react-hook-form";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={2}>
        <HookForm />
      </Box>
    </ChakraProvider>
  );
}
