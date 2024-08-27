import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { InputComponent } from "../../components/Input";
import { Button } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ApiClientP } from "../../ApiClient/post.apiClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../schemas";

interface SignUpResponse {
  SignUp: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
  };
}

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: zodResolver(RegisterSchema)
  })
  const [signUp, { loading }] = useMutation<SignUpResponse>(ApiClientP.RegisterUser);

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    console.log(formData, "fffff")
    signUp({ variables: { body: formData } })
      .then(response => {
        console.log("Sign Up successful", response);
      })
      .catch(err => {
        console.error("Sign Up error", err);
      });
  };
  return (
    <>
      <form className="space-y-4" onClick={handleSubmit(onSubmit)}>
        <InputComponent
          disabled={loading}
          placeholder="Enter First Name"
          required={true}
          register={register}
          id="firstName"
          errors={errors}
          type="text"
        />

        <InputComponent
          disabled={loading}
          placeholder="Enter Last Name"
          required={true}
          register={register}
          id="lastName"
          errors={errors}
          type="text"
        />

        <InputComponent
          disabled={loading}
          placeholder="Enter Phone Number"
          required={true}
          register={register}
          id="phoneNumber"
          errors={errors}
          type="email"
        />

        <InputComponent
          disabled={loading}
          placeholder="Enter Email"
          required={true}
          register={register}
          id="email"
          errors={errors}
          type="text"
        />

        <InputComponent
          disabled={loading}
          placeholder="Enter Password"
          required={true}
          register={register}
          id="password"
          errors={errors}
          type="password"
        />
        <Button
          isLoading={loading}
          type="submit">Submit</Button>
      </form>
    </>
  )
}
