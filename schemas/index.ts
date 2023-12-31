import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.optional(
    z.string().min(1, {
      message: "Password is required",
    })
  ),
});
