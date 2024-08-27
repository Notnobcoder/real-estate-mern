import { z } from "zod"

const userSchema = z.object({
  username: z.string().min(1, { message: "username is Requred" }),
  email: z.string().email({ message: "Invalid Email" }).min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "password is Requred" }),
})


const listingSchema = z.object({
  name: z.string().min(1, { message: "username is Requred" }),
  description: z.string().min(1, { message: "description is Requred" }),
  address: z.string().min(1, { message: "address is Requred" }),
  type: z.string().min(1, { message: "type is Requred" }),
  bathrooms: z.number({ message: "bathrooms should be in number" }),
  bedrooms: z.number({ message: "bedrooms should be in number" }),
  regularPrice: z.number({ message: "bedrooms should be in number" }),
  discountPrice: z.number({ message: "discount should be in number" }),
  offer: z.boolean({ message: "offer should be boolean" }),
  parking: z.boolean({ message: "parking should be boolean" }),
  furnished: z.boolean({ message: "furnished should be boolean" }),

})

export const zodSchema = { userSchema, listingSchema }
