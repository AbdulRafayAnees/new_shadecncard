"use client";
import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHeart } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const page = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttons = ["SMM", "GrowthStrategy", "Startup", "Brand"];
  return (
    <div className={`flex justify-center items-center h-screen bg-gray-100`}>
      <Card
        className={`font-poppins  h-100 w-96 border border-white outline-white rounded-3xl`}
      >
        <CardContent className={`flex items-center`}>
          <Avatar size="lg">
            <AvatarImage src="https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?_gl=1*11rdpqj*_ga*MTcwNTUyMzQxMi4xNzkxMDI2MjQy*_ga_8JE65Q40S6*czE3OTEwMzA0NTEkbzIkZzEkdDE3OTEwMzA0NzUkajM2JGwwJGgw" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardHeader className={`w-full`}>
            <CardTitle className={`text-[#1d1f22]`}>Abdul Rafay</CardTitle>
            <CardDescription>Posted 2h ago</CardDescription>
            <CardAction>
              <Button
                variant="secondary"
                size="lg"
                className={` border border-gray-300 `}
                onClick={() => setIsClicked(!isClicked)}
              >
                <FaHeart
                  className={` duration-300 ${isClicked ? "scale " : "text-[#1d1f22]"}`}
                />{" "}
              </Button>
            </CardAction>
          </CardHeader>
        </CardContent>
        <CardContent>
          <h2 className="text-lg text-[#26282D] font-medium ">
            Looking for SM manager to create posts across various platforms
          </h2>
          <p className="text-sm mt-2 text-[#919191]">
            We're seeking a skilled Social Media Manager to...
          </p>
          <div className={`flex mt-2 gap-2`}>
            {buttons.map((button, index) => (
              <Button variant="secondary" className={`bg-[#D5E2F4] text-sm`}>
                {button}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter
          className={`bg-white border-t-2 mx-4 border-dashed border-gray-300 flex-col justify-start items-start`}
        >
          <div className="mt-2">
            <h1 className="text-3xl text-[#1d1f22] font-medium">
              $500 - $200/h
            </h1>
            <p className="text-sm text-[#919191]">Hourly rate • 100% Remote</p>
          </div>
          <Button
            variant="secondary"
            className={`bg-linear-to-r from-[#3A8CED] to-[#3A77EE] text-lg text-white mt-6 w-full h-15 p-2`}
          >
            <RiFlashlightFill
              style={{
                width: "22px",
                height: "25px",
              }}
            />{" "}
            Apply
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
