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

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ContactUsForm = () => {
  const schema = yup.object().shape({
    name: yup.string()
      .required('Please enter your name')
      .matches(/^[A-Za-z ]*$/, 'Please enter a valid name')
      .max(1500, 'Message must be at most 250 characters'),
    email: yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email id')
      .max(1500, 'Message must be at most 250 characters'),
    msg: yup.string()
      .required('Please enter your message')
      .max(1500, 'Message must be at most 1500 characters'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const toast = useToast();
  const onSubmit = () => toast({
    title: 'submitted',
    status: 'success',
    duration: 1000,
    isClosable: true,
  });

  return (
    <Box
      py="32px"
    >
      <form name="contact" data-netlify="true" action="/contactus" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Enter your Name"
            autoComplete="off"
            {...register('name')}
          />
          <FormErrorMessage>
            {errors.name?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>

          <Input
            id="email"
            autoComplete="off"
            placeholder="Enter a valid Email address"
            {...register('email')}
          />
          <FormErrorMessage>
            {errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.msg}>
          <FormLabel htmlFor="msg">Message</FormLabel>
          <Textarea
            id="msg"
            size="md"
            placeholder="Enter your Message"
            {...register('msg')}
          />
          <FormErrorMessage>
            {errors.msg?.message}
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
