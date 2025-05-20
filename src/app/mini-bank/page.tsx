'use client'
import React, {useEffect, useState} from "react";
import dynamic from 'next/dynamic';
import { useInView } from "react-intersection-observer";
const SlotCounter = dynamic(() => import('react-slot-counter'), { ssr: false });

export default function MiniBank() {
  const { ref, inView } = useInView({
    triggerOnce: true, // только один раз
    threshold: 0.5,     // 50% блока в экране
  });

  const [playCounter, setPlayCounter] = useState(false);

  useEffect(() => {
    if (inView) {
      setPlayCounter(true);
    }
  }, [inView]);

  return (
    <div className={"md:px-[80px] md:pt-[40px] pt-[50px] px-[10px] flex flex-col justify-center gap-[20px] items-center"}>
      <div
        className={"border border-purple-700 rounded-2xl w-full md:py-[60px] py-[30px] flex flex-col items-center gap-[20px] relative"}>
        <div className={"flex justify-center absolute top-[-30px] bg-black"}>
          <h1 className={"text-center p-[10px] md:text-4xl border border-purple-700 w-fit rounded-full"}>Играть Mini
            Bank</h1>
        </div>
        <div className={"flex justify-evenly w-full"} >
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1>Учасники</h1>
            <p className="text-[60px] font-bold border border-purple-700 rounded-2xl px-[15px]">10</p>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1>Ваш номер</h1>
            <p className="text-[60px] font-bold border border-purple-700 rounded-2xl px-[15px]">5</p>
          </div>
        </div>
        <div className={"flex flex-col justify-center items-center gap-[10px]"} >
          <h1>Строка новых участников</h1>
          <div
            className={"border border-purple-700 md:w-[500px] md:h-[200px] h-[120px] p-[10px] overflow-x-hidden overflow-y-auto scrollbar-custom"}>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0xB2E0A4641F2CA075DC26BAB15dc1fAc88F017c0D</p>
              -
              <p>№ 4</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0x3A9F53aA378bbDAA8E9C775942D4D8B8Ef7Fb92C</p>
              -
              <p>№ 6</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0x1B4D7c960eE0D4998625F9F24DfA1769e8419D2D</p>
              -
              <p>№ 7</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0xE618fC29d4098773Fc7f99b16849bAA9a2785A7A</p>
              -
              <p>№ 8</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0x8aF23845a4c2077e09c64066F20e213243F85Db9</p>
              -
              <p>№ 9</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6EdA</p>
              -
              <p>№ 5</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0x490FA1b7E4aDbDc77A7C3d9D8c14a37a6bC0Af2c</p>
              -
              <p>№ 3</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0xd1C50B3Bd70C3BAEAFdDe21D558A878ABDf8aAbC</p>
              -
              <p>№ 1</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0x490FA1b7E4aDbDc77A7C3d9D8c14a37a6bC0Af2c</p>
              -
              <p>№ 2</p>
            </div>
            <div className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
              <p>0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6EdA</p>
              -
              <p>№ 10</p>
            </div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1 className={"text-center"} >Генератор выиграшных номеров ChainlinkVRF</h1>
            <div
              ref={ref}
              className={"border border-purple-700 md:w-[650px] md:h-[200px] p-[10px] rounded-2xl overflow-x-hidden overflow-y-auto scrollbar-custom flex justify-evenly"}>
              <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                <p className="text-[60px] text-yellow-500 font-bold px-[15px]">1</p>
                {playCounter && (<SlotCounter
                  value={8}
                  duration={2}
                  containerClassName="text-[60px] font-bold px-[15px]"
                />)}
              </div>
              <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                <p className="text-[60px] text-gray-400 font-bold px-[15px]">2</p>
                {playCounter && (<SlotCounter
                  value={4}
                  duration={2}
                  containerClassName="text-[60px] font-bold px-[15px]"
                />)}
              </div>
              <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                <p className="text-[60px] text-amber-700 font-bold px-[15px]">3</p>
                {playCounter && (<SlotCounter
                  value={9}
                  duration={2}
                  containerClassName="text-[60px] font-bold px-[15px]"
                />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}