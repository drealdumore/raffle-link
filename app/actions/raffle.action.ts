"use server";
import { z } from "zod";

const raffleSchema = z.object({
  raffleName: z
    .string()
    .nonempty({ message: "Please enter the name of the raffle." }),
  raffleDescription: z
    .string()
    .nonempty({ message: "Please provide a description for the raffle." }),
});

export async function createRaffleAction(prevState: any, formData: FormData) {
  console.log("Hello From Raffle Action");

  const validateFields = raffleSchema.safeParse({
    raffleName: formData.get("raffleName"),
    raffleDescription: formData.get("raffleDescription"),
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
