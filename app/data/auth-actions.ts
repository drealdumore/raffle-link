"use server";
import { z } from "zod";

// Define Zod schema
// const schema = z.object({
//   raffleName: z.string().min(1, "Raffle name is required"),
//   raffleDescription: z.string().min(1, "Raffle description is required"),
//   startDate: z
//     .date()
//     .min(new Date(), "Start date must be today or in the future"),
//   endDate: z
//     .date()
//     .min(z.ref("startDate"), "End date must be after the start date"),
//   raffleType: z.enum(["free", "paid"]),
//   price: z.number().optional().positive("Price must be a positive number"),
//   image: z.string().optional(),
// });

export async function registerUserAction(formData: FormData) {
  console.log("Hello From Register User Action");
}
