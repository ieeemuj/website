import { useForm } from 'react-hook-form';
import React from 'react';
import {
  useToast,
  FormErrorMessage,
  FormControl,
  Input,
  Textarea,
  Button,
  FormLabel,
  Box,
} from '@chakra-ui/react';

const ContactUsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();
  const onSubmit = () => toast({
    title: 'submitted',
    status: 'success',
    duration: 3000,
    isClosable: true,
  });

  return (
    <Box
      py="32px"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Enter your Name"
            autoComplete="off"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />

          <FormLabel htmlFor="email">Email</FormLabel>

          <Input
            id="email"
            autoComplete="off"
            placeholder="Enter a valid Email address"
            {...register('email', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <br />
          <FormLabel htmlFor="msg">Message</FormLabel>
          <Textarea
            id="msg"
            size="md"
            placeholder="Enter your Message"
            {...register('msg', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          isLoading={isSubmitting}
          bgColor="#00132B"
          boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
          padding="16px"
          rounded="lg"
          mt={4}
          color="white"
          _hover={{
            border: 'none',
            textDecoration: 'none',
          }}
          _active={{
            border: 'none',
            boxShadow: 'none',
            transform: 'scale(0.97)',
          }}
          _focus={{
            border: 'none',
            boxShadow: 'none',
            bg: 'brand',
          }}
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default ContactUsForm;
