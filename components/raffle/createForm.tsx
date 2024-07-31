"use client";

import React, { useState } from "react";
import { addDays, format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Input } from "../ui/input";
import { createRaffleAction } from "@/app/actions/raffle.action";

import ErrorMessage from "../shared/errorMessage";

interface FormState {
  data: any;
  zodErrors: {
    raffleName?: string;
    raffleDescription?: string;
  } | null;
  message: string | null;
}

const INITIAL_STATE: FormState = {
  data: null,
  zodErrors: null,
  message: null,
};

export default function CreateForm() {
  const [isPaidRaffle, setIsPaidRaffle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 5));
  const [endDateValid, setEndDateValid] = useState("");


  // TODO - UPLOAD IMAGE TO CLOUD THEN SAVE URL
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");
  // const { userId } = useAuth();

  const [formState, setFormState] = useState(INITIAL_STATE);

  console.log(formState);

  // const handleImageUpload = (e: any) => {
  //   setImage(URL.createObjectURL(e.target.files[0]));
  // };

  const handleImageUpload = (e: any) => {
    setImage(e.target.files[0].name);
    console.log(e.target.files[0]);
  };

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);

    if (date >= endDate) {
      setEndDate(addDays(date, 1));
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (date > startDate) {
      setEndDate(date);
      setEndDateValid("");
    } else {
      setEndDateValid("End date must be after start date");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    try {
      const formData = {
        title: "Grand Prize Giveaway",
        description:
          "Enter for a chance to win a $500 gift card! Don't miss out on this amazing opportunity.",
        isPaid: true,
        price: 10,
        createdBy: "userId12345", // Replace with actual userId from authentication
      };

      console.log(formData);

      const response = await fetch("/api/raffles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create raffle");
      }

      const result = await response.json();
      console.log("Raffle created successfully:", result);
    } catch (error) {
      console.error("Error creating raffle:", error);
    } finally {
      setLoading(false);
    }
  };

  const createRaffle = async () => {
    // try {
    //   const res = await fetch("/api/raffle", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Authorization: `Bearer ${userId}`,
    //     },
    //     body: JSON.stringify({ title, description, startDate, endDate }),
    //   });
    //   const data = await res.json();
    //   setMessage(`Raffle created with ID: ${data._id}`);
    // } catch (error) {
    //   setMessage("Error creating raffle");
    // }
    console.log({ title, description, startDate, endDate });
  };

  return (
    <Card className="md:w-full max-w-md mx-auto w-[95%] bg-white/20 ring-4 ring-gray-900/5">
      <CardHeader className="border-b">
        <CardTitle>Create Raffle</CardTitle>
        <CardDescription>
          Fill out the details below to create a new raffle draw.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-3">
        <form className="grid gap-4" onSubmit={createRaffle}>
          {/* Raffle title */}
          <div className="grid gap-2">
            <Label htmlFor="raffle-name">Raffle Name</Label>

            <Input
              className="custom"
              id="raffle-name"
              name="raffleName"
              placeholder="Enter raffle name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {formState.zodErrors?.raffleName && (
              <ErrorMessage
                message={formState.zodErrors?.raffleName}
                className="p-0"
              />
            )}
          </div>

          {/* Raffle description */}
          <div className="grid gap-2">
            <Label htmlFor="raffle-description">Raffle Description</Label>
            <Textarea
              id="raffle-description"
              name="raffleDescription"
              placeholder="Describe the raffle"
              rows={3}
              className="custom"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {formState.zodErrors?.raffleDescription && (
              <ErrorMessage
                message={formState.zodErrors?.raffleDescription}
                className="p-0"
              />
            )}
          </div>

          {/* Dates */}
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="font-bdog" htmlFor="start-date">
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-col items-start w-full h-auto hover:bg-transparent font-bdog custom"
                    >
                      <span className="font-semibold uppercase text-[0.65rem]">
                        Start Date
                      </span>
                      <span className="font-normal">
                        {startDate ? (
                          format(startDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="rounded-md border w-auto flex-col space-y-2 p-2">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={handleStartDateChange}
                      required
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="end-date">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-col items-start w-full h-auto hover:bg-transparent font-bdog custom"
                    >
                      <span className="font-semibold uppercase text-[0.65rem]">
                        End Date
                      </span>
                      <span className="font-normal">
                        {endDate ? (
                          format(endDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="rounded-md border w-auto flex-col space-y-2 p-2">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={handleEndDateChange}
                      required
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            {/* {formState.zodErrors?.startDate && (
              <ErrorMessage message={formState.zodErrors.startDate} className="p-0" /> 
            )}
            {formState.zodErrors?.endDate && (
              <ErrorMessage message={formState.zodErrors.endDate} className="p-0" /> 
            )} */}
            {endDateValid && (
              <ErrorMessage message={endDateValid} className="p-0" />
            )}
          </div>

          {/* image  */}
          <div className="grid gap-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input
              className="bg-transparent"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {image && (
              <div className="flex justify-center max-w-auto">
                <img
                  src={image}
                  alt="Uploaded Image"
                  width={200}
                  height={200}
                  className="object-contain border border-double rounded"
                />
              </div>
            )}
          </div>

          {/* button */}
          <button
            type="submit"
            disabled={loading}
            className="h-10 font-bdog truncate overflow-hidden w-full gap-2 font-medium group flex items-center justify-center   bg-neutral-900   text-white shadow-md shadow-black/5 transition-colors hover:bg-zinc-800 rounded-lg  disabled:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed "
          >
            {loading && (
              <>
                <div className="w-4 h-4 border-2 border-white rounded-full animate-spin relative ml-2">
                  <div className="w-3 h-3 absolute   bg-neutral-900   transition-colors group-hover:bg-zinc-800 z-10 top-1 left-1"></div>
                </div>
              </>
            )}
            <span className="ml-1">
              {loading ? "Creating..." : "Create Raffle"}
            </span>
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
