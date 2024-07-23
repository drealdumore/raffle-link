"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
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
import { registerUserAction } from "@/app/data/auth-actions";

import ErrorMessage from "../shared/errorMessage";

export default function CreateForm() {
  const [isPaidRaffle, setIsPaidRaffle] = useState(false);
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 5));

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
    } else {
      alert("End date must be after start date");
    }
  };

  return (
    <Card className="md:w-full max-w-md mx-auto w-[95%]  bg-white/20 ring-4 ring-gray-900/5">
      <CardHeader className="border-b">
        <CardTitle>Create Raffle</CardTitle>
        <CardDescription>
          Fill out the details below to create a new raffle draw.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-3">
        <form className="grid gap-4" action={registerUserAction}>
          {/* Raffle title */}
          <div className="grid gap-2">
            <Label htmlFor="raffle-name">Raffle Name</Label>
            <Input
              className="custom"
              id="raffle-name"
              placeholder="Enter raffle name"
            />
          </div>

          {/* Raffle description */}
          <div className="grid gap-2">
            <Label htmlFor="raffle-description">Raffle Description</Label>
            <Textarea
              id="raffle-description"
              placeholder="Describe the raffle"
              rows={3}
              className="custom"
            />
          </div>

          {/* Dates */}
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
                    // onSelect={setStartDate}
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
                    // onSelect={setEndDate}
                    onSelect={handleEndDateChange}
                    required
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Radio buttons */}
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

          {/* Paid state */}
          {isPaidRaffle && (
            <div className="grid gap-2 transition-all">
              <Label htmlFor="price">Price</Label>
              <Input
                className="bg-transparent"
                id="price"
                type="money"
                placeholder="Enter amount"
              />
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="image">Upload Image</Label>
            <Input
              className="bg-transparent"
              id="image"
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

// "use client";

// import { useState } from "react";
// import { addDays, format } from "date-fns";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Input } from "../ui/input";

// // Define Zod schema
// const schema = z.object({
//   raffleName: z.string().min(1, 'Raffle name is required'),
//   raffleDescription: z.string().min(1, 'Raffle description is required'),
//   startDate: z.date().min(new Date(), 'Start date must be today or in the future'),
//   endDate: z.date().min(z.ref('startDate'), 'End date must be after the start date'),
//   raffleType: z.enum(['free', 'paid']),
//   price: z.number().optional().positive('Price must be a positive number'),
//   image: z.string().optional(),
// });

// export default function CreateForm() {
//   const [isPaidRaffle, setIsPaidRaffle] = useState(false);
//   const [image, setImage] = useState<string | null>(null);
//   const [startDate, setStartDate] = useState<Date>(new Date());
//   const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 5));

//   // Initialize react-hook-form
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       startDate,
//       endDate,
//       raffleType: 'free',
//     }
//   });

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleStartDateChange = (date: Date) => {
//     setStartDate(date);
//     if (date >= endDate) {
//       setEndDate(addDays(date, 1));
//     }
//   };

//   const handleEndDateChange = (date: Date) => {
//     if (date > startDate) {
//       setEndDate(date);
//     } else {
//       alert("End date must be after start date");
//     }
//   };

//   const onSubmit = (data: any) => {
//     console.log(data);
//     // Perform submit action here, e.g., API call
//   };

//   return (
//     <Card className="md:w-full max-w-md mx-auto w-[95%] bg-white/20 ring-4 ring-gray-900/5">
//       <CardHeader className="border-b">
//         <CardTitle>Create Raffle</CardTitle>
//         <CardDescription>
//           Fill out the details below to create a new raffle draw.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="pt-3">
//         <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
//           {/* Raffle title */}
//           <div className="grid gap-2">
//             <Label htmlFor="raffleName">Raffle Name</Label>
//             <Input
//               className="custom"
//               id="raffleName"
//               placeholder="Enter raffle name"
//               {...register("raffleName")}
//             />
//             {errors.raffleName && <span>{errors.raffleName.message}</span>}
//           </div>

//           {/* Raffle description */}
//           <div className="grid gap-2">
//             <Label htmlFor="raffleDescription">Raffle Description</Label>
//             <Textarea
//               id="raffleDescription"
//               placeholder="Describe the raffle"
//               rows={3}
//               className="custom"
//               {...register("raffleDescription")}
//             />
//             {errors.raffleDescription && <span>{errors.raffleDescription.message}</span>}
//           </div>

//           {/* Dates */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="grid gap-2">
//               <Label className="font-bdog" htmlFor="startDate">
//                 Start Date
//               </Label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="flex-col items-start w-full h-auto hover:bg-transparent font-bdog custom"
//                   >
//                     <span className="font-semibold uppercase text-[0.65rem]">
//                       Start Date
//                     </span>
//                     <span className="font-normal">
//                       {startDate ? (
//                         format(startDate, "PPP")
//                       ) : (
//                         <span>Pick a date</span>
//                       )}
//                     </span>
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="rounded-md border w-auto flex-col space-y-2 p-2">
//                   <Calendar
//                     mode="single"
//                     selected={startDate}
//                     onSelect={handleStartDateChange}
//                     required
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="endDate">End Date</Label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="flex-col items-start w-full h-auto hover:bg-transparent font-bdog custom"
//                   >
//                     <span className="font-semibold uppercase text-[0.65rem]">
//                       End Date
//                     </span>
//                     <span className="font-normal">
//                       {endDate ? (
//                         format(endDate, "PPP")
//                       ) : (
//                         <span>Pick a date</span>
//                       )}
//                     </span>
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="rounded-md border w-auto flex-col space-y-2 p-2">
//                   <Calendar
//                     mode="single"
//                     selected={endDate}
//                     onSelect={handleEndDateChange}
//                     required
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>
//           </div>

//           {/* Radio buttons */}
//           <div className="grid gap-2">
//             <Label>Raffle Type</Label>
//             <RadioGroup
//               onValueChange={(value) => setIsPaidRaffle(value === "paid")}
//               defaultValue="free"
//             >
//               <div className="flex items-center gap-4">
//                 <Label
//                   htmlFor="free-raffle"
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <RadioGroupItem id="free-raffle" value="free" {...register("raffleType")} />
//                   Free Raffle
//                 </Label>
//                 <Label
//                   htmlFor="paid-raffle"
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <RadioGroupItem id="paid-raffle" value="paid" {...register("raffleType")} />
//                   Paid Raffle
//                 </Label>
//               </div>
//             </RadioGroup>
//             {errors.raffleType && <span>{errors.raffleType.message}</span>}
//           </div>

//           {/* Paid state */}
//           {isPaidRaffle && (
//             <div className="grid gap-2 transition-all">
//               <Label htmlFor="price">Price</Label>
//               <Input
//                 className="bg-transparent"
//                 id="price"
//                 type="number"
//                 placeholder="Enter amount"
//                 {...register("price")}
//               />
//               {errors.price && <span>{errors.price.message}</span>}
//             </div>
//           )}

//           <div className="grid gap-2">
//             <Label htmlFor="image">Upload Image</Label>
//             <Input
//               className="bg-transparent"
//               id="image"
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//             />
//             {image && (
//               <div className="flex justify-center max-w-auto">
//                 <img
//                   src={image}
//                   alt="Uploaded Image"
//                   width={200}
//                   height={200}
//                   className="object-contain border border-double rounded"
//                 />
//               </div>
//             )}
//           </div>

//           <Button type="submit" className="w-full">
//             Create Raffle
//           </Button>
//         </form>
//       </CardContent>
//       <CardFooter>
//         <Button type="submit" className="w-full">
//           Create Raffle
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

// function QuestionMarkIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="lucide lucide-circle-help h-4 w-4 text-gray-500"
//       data-state="closed"
//     >
//       <circle cx="12" cy="12" r="10"></circle>
//       <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
//       <path d="M12 17h.01"></path>
//     </svg>
//   );
// }
