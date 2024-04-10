import { z } from "zod";

export const hotelSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "minimum 5 characters are required",
    })
    .max(10, {
      message: "maximum 10 characters are required",
    }),

  city: z
    .string()
    .min(2, {
      message: "minimum 2 characters are required",
    })
    .max(16, {
      message: "maximum 16 characters is required",
    }),
  country: z
    .string()
    .min(2, {
      message: "minimum 2 characters are required",
    })
    .max(16, {
      message: "maximum 16 characters is required",
    }),
  description: z
    .string()
    .min(2, {
      message: "minimum 2 characters are required",
    })
    .max(16, {
      message: "maximum 16 characters is required",
    }),
  price: z.number().int(),
  starRating: z.number().nonnegative().int(),
  type: z
    .string()
    .min(2, {
      message: "minimum 2 characters are required",
    })
    .max(16, {
      message: "maximum 16 characters is required",
    }),
  facilities: z
    .string()
    .min(3, {
      message: "minimum validiey 3",
    })
    .max(10, {
      message: "maximum validity 10",
    }),
});
