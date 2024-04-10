import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HomeLayout } from "../../layouts/HomeLayout";
import { Link } from "react-router-dom";

export const Login = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const logiSchema = z.object({
    email: z.string().email({
      message: "Enter a valid email",
    }),
    password: z.string().min(1, {
      message: "Password is required",
    }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(logiSchema),
  });

  const handleLoginSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <HomeLayout>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div>
            <h4>Enter Email</h4>
            <input
              id="email"
              {...register("email")}
              className="border border-black outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <h4>Password</h4>
            <input
              id="password"
              {...register("password")}
              className="border border-black outline-none"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <h4>
              Not Registerd ?{" "}
              <Link to="/register">
                <span>Create an account here</span>
              </Link>
            </h4>
            <button type="submit">Login</button>
          </div>
        </form>
      </HomeLayout>
    </>
  );
};
