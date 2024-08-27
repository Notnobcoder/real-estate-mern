import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "../../schemas";
import { useMutation } from "@apollo/client";
import { ApiClientP } from "../../ApiClient/post.apiClient";
import { twMerge } from "tailwind-merge";
import { InputComponent } from "../../components/Input";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useUserAuthStore } from "../../store";


export const LoginForm = ({ className }: { className?: string }) => {

  const navigate = useNavigate();
  const { login: LoginCheck } = useUserAuthStore()
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
  });

  const [login, { loading }] = useMutation(ApiClientP.LoginUser);

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    await LoginCheck()
    navigate("/")
    login({ variables: { body: data } })
      .then(() => {
        console.log("login successful");
      })
      .catch((err) => {
        console.error("Error during login:", err);
      });
  };

  return (
    <div className={twMerge(className)}>
      <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
        <InputComponent
          disabled={loading}
          placeholder="Enter Email"
          required={true}
          register={register}
          id="email"
          errors={errors}
          type="text"
          label="Enter Email"
        />
        <InputComponent
          disabled={loading}
          register={register}
          placeholder="Enter Password"
          type="password"
          id="password"
          required
          errors={errors}
          label="Enter password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
