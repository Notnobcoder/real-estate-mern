import { z } from "zod";

export const MerchantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  brandName: z.string().min(1, "Brand name is required"),
  business: z.string().min(1, "Business description is required"),
  isActive: z.boolean()
});


export const BrandSchema = z.object({
  name: z.string().min(2, { "message": "Name is required" }),
  slug: z.string().min(2, { "message": "Slug is required" }),
  imageUrl: z.string().min(2, { "message": "imageurl is required" }),
  description: z.string().min(20, { "message": "description is required" }),
  isActive: z.boolean({ message: "it is required" }),
})

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, { "message": "Passsword is Required" })
})



export const RegisterSchema = z.object({
  firstName: z.string().min(2, { "message": "First Name is required" }),
  lastName: z.string().min(2, { "message": "Last Name is required" }),
  phoneNumber: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, { "message": "Passsword is Required" })
})

