"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CreateForm() {
  const [isPaidRaffle, setIsPaidRaffle] = useState(false);
  const [image, setImage] = useState(null);
  const handleImageUpload = (e: any) => {
    setImage(e.target.files[0].name);
    console.log(e.target.files[0]);
    
  };

  return (
    <Card className="w-full max-w-md mx-auto thumbnail-shadow">
      <CardHeader className="border-b bg-neutral-100">
        <CardTitle>Create Raffle</CardTitle>
        <CardDescription>
          Fill out the details below to create a new raffle draw.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-3">
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="raffle-name">Raffle Name</Label>
            <Input id="raffle-name" placeholder="Enter raffle name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="raffle-description">Raffle Description</Label>
            <Textarea
              id="raffle-description"
              placeholder="Describe the prize"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex-col items-start w-full h-auto"
                  >
                    <span className="font-semibold uppercase text-[0.65rem]">
                      Start Date
                    </span>
                    <span className="font-normal">4/2/2024</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 max-w-[276px]">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="end-date">End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex-col items-start w-full h-auto"
                  >
                    <span className="font-semibold uppercase text-[0.65rem]">
                      End Date
                    </span>
                    <span className="font-normal">10/2/2024</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 max-w-[276px]">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          

          <div className="grid gap-2">
            <Label>Raffle Type</Label>
            <RadioGroup
              onValueChange={(value) => setIsPaidRaffle(value === "paid")}
            >
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="free-raffle"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <RadioGroupItem id="free-raffle" value="free" />
                  Free Raffle
                </Label>
                <Label
                  htmlFor="paid-raffle"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <RadioGroupItem id="paid-raffle" value="paid" />
                  Paid Raffle
                </Label>
              </div>
            </RadioGroup>
          </div>

          {isPaidRaffle && (
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="Enter price" />
              <Label htmlFor="price-description">Price Description</Label>
              <Textarea
                id="price-description"
                placeholder="Describe the price"
                rows={3}
              />
            </div>
          )}
          
          <div className="grid gap-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {image && (
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="Uploaded Image"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Create Raffle
        </Button>
      </CardFooter>
    </Card>
  );
}

function QuestionMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-help h-4 w-4 text-gray-500"
      data-state="closed"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <path d="M12 17h.01"></path>
    </svg>
  );
}
