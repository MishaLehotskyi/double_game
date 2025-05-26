'use client'
import React from "react";
import CustomSlider from "@/components/Slider";

export default function About() {

  return (
    <div className={"md:px-[80px] px-[10px] flex flex-col justify-center gap-[20px] items-center"}>
      <h1 className={"text-center pt-[15px] md:text-4xl"}>Основатели Лотереи Doubel Game</h1>
      <ol className={"list-disc space-y-2 pl-[20px] md:pl-0 marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Daniel Martinez</li>
        <li className={"md:text-xl text-base"}>Лиев Александр</li>
      </ol>
      <CustomSlider />
    </div>
  )
}
