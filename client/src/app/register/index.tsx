import { z } from "zod";
import { HomeLayout } from "../../layouts/HomeLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

export const Register = () => {

  const [message, setMessage] = useState("")
  type registerType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  const registeSchema = z.object({
    firstName: z
      .string()
      .min(5, {
        message: "Atleast 5 character is required",
      })
      .max(20, {
        message: "FirstName should be less than 20",
      }),
    lastName: z
      .string()
      .min(5, {
        message: "Atleast 5 character is required",
      })
      .max(20, {
        message: "LastName should be less than 20",
      }),
    email: z.string().email({
      message: "email is required",
    }),
    password: z
      .string()
      .min(10, {
        message: "password should be more than 10",
      })
      .max(15, {
        message: "password should be less than 15",
      }),
    confirmPassword: z
      .string()
      .min(10, {
        message: "password should be more than 10",
      })
      .max(15, {
        message: "password should be less than 15",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({
    resolver: zodResolver(registeSchema),
  });

  const handleRegisterSubmit = async(data: registerType) => {
    console.log(data, "dddd")
    const url = "http://localhost:7000/api/users/register"
    await axios.post(url, data).then((res) => {
      console.log(res.data)
      setMessage(res.data.message)
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <>
      <HomeLayout>
        <h3>Create an Account</h3>
        <form onSubmit={handleSubmit(handleRegisterSubmit)}>
          <div className="flex items-center gap-8">
            <div>
              <h4>FirstName</h4>
              <input {...register("firstName")} />
              {errors.firstName && (
                <p className="text-xs text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <h4>Last Name</h4>
              <input {...register("lastName")} />
              {errors.lastName && (
                <p className="text-xs text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <h4>email</h4>
            <input {...register("email")} />
            {errors.email && (
              <p className={"text-red-500 text-xs"}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <h4>password</h4>
            <input {...register("password")} />
            {errors.password && (
              <p className={"text-red-500 text-sm"}>
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <h4>confirmPassword</h4>
            <input {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button type="submit" className="bg-blue-500">
            Create account
          </button>
          <p>
          {message && message}
          </p>
        </form>
      </HomeLayout>
    </>
  );
};
