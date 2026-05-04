import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username is mandatory to be 3 characters" }),
  password: z
    .string()
    .min(3, { message: "Password is mandatory to be 3 characters" }),
});
type formData = z.infer<typeof schema>;

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className="login-page" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="login-header text-primary ">Login Page</h1>
      <div className="form-floating mb-4">
        <input
          {...register("username")}
          id="username"
          type="text"
          className="form-control inputs"
          placeholder="User Name"
        />
        <label htmlFor="username" className="form-label">
          User Name
        </label>
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}
      </div>

      <div className="form-floating mb-4">
        <input
          {...register("password")}
          id="password"
          type="password"
          className="form-control inputs"
          placeholder="Password"
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Forms;
