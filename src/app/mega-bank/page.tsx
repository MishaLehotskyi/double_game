'use client'
import React, {useEffect, useState} from "react";
import dynamic from 'next/dynamic';
import { useInView } from "react-intersection-observer";
import ClickableTooltipInfo from "@/components/ClickableTooltipInfo";
import RotatingModel from "@/components/RotatingModel";
const SlotCounter = dynamic(() => import('react-slot-counter'), { ssr: false });
const wallets = [
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E00",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E01",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E02",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E03",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E04",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E05",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E06",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E07",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E08",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E09",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E0a",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E0b",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E0c",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E0d",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E0e",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E0f",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E10",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E11",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E12",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E13",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E14",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E15",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E16",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E17",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E18",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E19",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E1a",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E1b",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E1c",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E1d",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E1e",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E1f",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E20",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E21",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E22",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E23",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E24",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E25",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E26",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E27",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E28",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E29",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E2a",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E2b",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E2c",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E2d",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E2e",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E2f",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E30",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E31",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E32",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E33",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E34",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E35",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E36",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E37",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E38",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E39",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E3a",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E3b",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E3c",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E3d",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E3e",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E3f",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E40",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E41",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E42",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E43",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E44",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E45",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E46",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E47",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E48",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E49",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E4a",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E4b",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E4c",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E4d",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E4e",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E4f",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E50",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E51",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E52",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E53",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E54",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E55",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E56",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E57",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E58",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E59",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E5a",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E5b",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E5c",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E5d",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E5e",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E5f",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E60",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E61",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E62",
  "0xC3c6C77D0f43cF6Df1944727eDE0D9C91E4A6E63"
]

export default function StandardBank() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [playCounter, setPlayCounter] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep);

  useEffect(() => {
    if (inView) {
      setCurrentStep(prev => prev + 1);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
            setTimeout(() => {
              setCurrentStep(prev => prev + 1);
              setPlayCounter(true);
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }
  }, [inView]);

  return (
    <div className={"md:px-[80px] md:pt-[40px] pt-[50px] px-[10px] pb-[20px] flex flex-col justify-center gap-[20px] items-center"}>
      <div
        className={"border border-yellow-600 rounded-2xl w-full md:py-[60px] py-[30px] flex flex-col items-center gap-[20px] relative"}>
        <div className={"absolute hidden md:block top-[30px] left-[30px] h-[200px] w-[200px]"}>
          <RotatingModel fileName={"mega.glb"}/>
        </div>
        <div className={"flex justify-center absolute top-[-30px] bg-[#2a2a2a]"}>
          <h1
            className={"text-center p-[10px] md:text-4xl border border-yellow-600 w-fit rounded-full shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] bg-yellow-600"}>Играть
            Mega Bank <ClickableTooltipInfo info={"Для участия в лорее Mega Bank переведите 500 токенов DBE на адрес 0x740B45a8E7C01AAFC6CD823e5a794F172eE9cCD0 Сеть BSC. После этого вы автоматически появитесь в окне участников с присвоенным номером билета"} /></h1>
        </div>
        <div className={"flex md:justify-evenly justify-between items-center w-full px-[15px]"}>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <p>Учасники</p>
            <p className="text-[60px] font-bold border border-yellow-600 rounded-2xl px-[15px]">10</p>
          </div>
          <div className={"md:hidden h-[150px] w-[150px]"}>
            <RotatingModel fileName={"mega.glb"}/>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <p className={"text-base"} >Ваш номер</p>
            <p className="text-[60px] font-bold border border-yellow-600 rounded-2xl px-[15px]">5</p>
          </div>
        </div>
        <div className={"flex flex-col justify-center items-center md:gap-[30px] gap-[15px]"}>
          <h1>Строка новых участников<ClickableTooltipInfo info={"Приветствуем! Вы приняли участие в игре. Ваш номер билета указан напротив вашего кошелька"} /></h1>
          <div
            className={"border border-yellow-600 md:w-[500px] md:h-[200px] h-[120px] p-[10px] overflow-x-hidden overflow-y-auto scrollbar-custom"}>
            {wallets.map((wallet, index) => (
              <div key={wallet} className={"flex justify-center text-[15px] md:text-[20px] gap-[15px]"}>
                <p>{wallet}</p>
                -
                <p>№ {index + 1}</p>
              </div>
            ))}
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1 className={"text-center"}>Генератор выиграшных номеров ChainlinkVRF<ClickableTooltipInfo info={"Перейдите по ссылке Хеш Транзакции во вкладке LOGS Data requestld payment вы можете найти число сгенерированное Chainlink VRF"}/></h1>
            <div className={"w-[320px] md:w-[600px] flex flex-col border border-yellow-600 rounded-2xl"}>
              <div className={"w-full px-[15px] pt-[15px] h-[200px] border-b-1 border-yellow-600"}>
                {currentStep >= 1 && (
                  <p className={"text-[15px] md:text-[20px]"}>Старт трех запросов CHAINLINK VRF...</p>)}
                {currentStep >= 2 && (
                  <p className={"text-[15px] md:text-[20px]"}>Первое число 59. <a
                    href={"https://bscscan.com/tx/0xb318e6b7104706eb4c71aa1dcd30d5b8ebc7f709de2d328f6fcb5c3e36b20822"}
                    target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 3 && (
                  <p className={"text-[15px] md:text-[20px]"}>Второе число 86. <a
                    href={"https://bscscan.com/tx/0xb7f04a3a11f4a3061944215dfe46c28685f1968ec1d11bbff331ac81bbb387b3"}
                    target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 4 && (
                  <p className={"text-[15px] md:text-[20px]"}>Третье число 81. <a
                    href={"https://bscscan.com/tx/0x648e13fb3a0305e135ca62460dbf47492d8404b52a83ca8083698354e5c32064"}
                    target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 5 && (<p className={"text-[15px] md:text-[20px]"}>Отображение результатов</p>)}
              </div>
              <div
                ref={ref}
                className={"h-[200px] p-[10px] flex justify-evenly"}>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-yellow-500 font-bold px-[15px]">1</p>
                  {playCounter && (<SlotCounter
                    value={59}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
                <div className={"border border-yellow-600 h-full"}></div>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-gray-400 font-bold px-[15px]">2</p>
                  {playCounter && (<SlotCounter
                    value={86}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
                <div className={"border border-yellow-600 h-full"}></div>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-amber-700 font-bold px-[15px]">3</p>
                  {playCounter && (<SlotCounter
                    value={81}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
              </div>
            </div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1 className={"text-center"}>Как проверить достоверность выигрышных чисел?</h1>
            <ol className={"list-disc space-y-2 pl-[20px] md:pl-0 marker:text-yellow-600"}>
              <li className={"md:text-xl text-base"}>{`Перейти по ссылке "Хэш транзакции"`}</li>
              <li className={"md:text-xl text-base"}>Кликнуть на вкладку Logs</li>
              <li className={"md:text-xl text-base"}>Посмотреть поле payment</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}