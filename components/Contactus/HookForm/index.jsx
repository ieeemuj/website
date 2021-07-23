import { useForm } from "react-hook-form";
import React from "react";
import {
  useToast,
  FormErrorMessage,
  FormControl,
  Input,
  Textarea,
  Button,
  FormLabel,
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();
  const onSubmit = (data) =>
    toast({
      title: "submitted",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          placeholder="Enter your Name"
          autoComplete="off"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />

        <FormLabel htmlFor="email">Email</FormLabel>

        <Input
          id="email"
          autoComplete="off"
          placeholder="Enter a valid Email address"
          {...register("email", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <br/>
        <FormLabel htmlFor="msg">Message</FormLabel>
        <Textarea
          id="msg"
          size="md"
          placeholder="Enter your Message"
          {...register("msg", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        rounded="lg"
        padding="16px"
        colorScheme="facebook"
        isLoading={isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
