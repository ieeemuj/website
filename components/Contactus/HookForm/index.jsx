import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
  useToast,
  FormErrorMessage,
  FormControl,
  Input,
  Textarea,
  Button,
  FormLabel,
} from '@chakra-ui/react';

export default function HookForm() {

  const schema = yup.object().shape({
    name:yup.string().required("Please enter your name").matches(/^[aA-zZ\s]+$/, "Please enter a valid name"),
    email:yup.string().email("Please enter a valid email").required("Please enter your email id"),
    msg:yup.string().required("Please enter your message")

  })
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm(
    {
      mode:"onBlur",
      resolver: yupResolver(schema)
    }
  );

  const toast = useToast();
  const onSubmit = () => toast({
    title: 'submitted',
    status: 'success',
    duration: 3000,
    isClosable: true,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          placeholder="Name"
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
          placeholder="Email id"
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
