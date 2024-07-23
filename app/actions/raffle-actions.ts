"use server";
import { z } from "zod";

const raffleSchema = z.object({
  raffleName: z
    .string()
    .nonempty({ message: "Please enter the name of the raffle." }),
  raffleDescription: z
    .string()
    .nonempty({ message: "Please provide a description for the raffle." }),
  raffleType: z
    .enum(["free", "paid"])
    .default("free")
    .refine((value) => value === "free" || value === "paid", {
      message: "Please select a raffle type.",
    }),
  price: z
    .string()
    .nonempty({ message: "Please provide amount." }),
  // startDate: z
  //   .string()
  //   .nonempty({ message: "Please select the start date for the raffle." }),
  // endDate: z
  //   .string()
  //   .nonempty({ message: "Please select the end date for the raffle." }),
  image: z.string().optional(),
});

export async function createRaffleAction(prevState: any, formData: FormData) {
  console.log("Hello From Raffle Action");

  const validateFields = raffleSchema.safeParse({
    raffleName: formData.get("raffleName"),
    raffleDescription: formData.get("raffleDescription"),
    // startDate: formData.get("startDate"),
    // endDate: formData.get("endDate"),
    raffleType: formData.get("raffleType"),
    price: formData.get("price"),
    image: formData.get("image"),
  });

  if (!validateFields.success) {
    return {
      ...prevState,
      zodErrors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create Raffle",
    };
  }

  return {
    ...prevState,
    data: "Raffle created successfully",
  };
}
