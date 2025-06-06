'use client'
import React, {useEffect, useState} from "react";
import dynamic from 'next/dynamic';
import { useInView } from "react-intersection-observer";
import ClickableTooltipInfo from "@/components/ClickableTooltipInfo";
import {IconButton, Tooltip} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
const SlotCounter = dynamic(() => import('react-slot-counter'), { ssr: false });
const RotatingModel = dynamic(() => import('@/components/RotatingModel'), {
  ssr: false, // 3D работает только на клиенте
});

export default function MiniBank() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const [playCounter, setPlayCounter] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

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

  useEffect(() => {
    if (!document.getElementById('portal-root')) {
      const portal = document.createElement('div');
      portal.id = 'portal-root';
      document.body.appendChild(portal);
    }
  }, []);

  return (
    <div className={"md:px-[80px] md:pt-[40px] pt-[50px] px-[10px] pb-[20px] flex flex-col justify-center gap-[20px] items-center"}>
      <div
        className={"border border-orange-500 rounded-2xl w-full md:py-[60px] py-[30px] flex flex-col items-center gap-[20px] relative"}>
        <div className={"absolute hidden md:block top-[30px] left-[30px] h-[200px] w-[200px]"} >
          <RotatingModel fileName={"mini.glb"} />
        </div>
        <div className={"flex justify-center absolute top-[-30px] bg-[#2a2a2a] border border-orange-500 w-fit rounded-full shadow-[0_0_20px_5px_rgba(255,0,0,0.5)] bg-orange-500"}>
          <h1 onClick={handleClick} className={"text-center cursor-pointer p-[10px] md:text-4xl"}>Играть Mini Bank
          </h1>
          <Tooltip
            open={open}
            onClick={handleClick}
            title={"Для участия в лотереи Mini Bank переведите 100 токенов DBE на адрес 0x62939d201C1c4beFbA34A1DFE85f35B64bc1BcfB Сеть BNB Smart Chain (BEP 20). После этого вы автоматически появитесь в окне участников с присвоенным номером билета"}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: '14px',
                },
              },
            }}
          >
            <IconButton>
              <InfoIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>
        </div>
        <div className={"flex md:justify-evenly justify-between items-center w-full px-[15px]"}>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <p>Учасники</p>
            <p className="text-[60px] font-bold border border-orange-500 rounded-2xl md:px-[15px] px-[5px] min-w-[80px] text-center">10</p>
          </div>
          <div className={"md:hidden h-[150px] w-[150px]"}>
            <RotatingModel fileName={"mini.glb"} />
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <p className={"text-base"} >Ваш номер</p>
            <p className="text-[60px] font-bold border border-orange-500 rounded-2xl md:px-[15px] px-[5px] min-w-[80px] text-center">5</p>
          </div>
        </div>
        <div className={"flex flex-col justify-center items-center md:gap-[30px] gap-[15px]"}>
          <h1 className={"text-xl md:text-3xl"} >Строка новых участников<ClickableTooltipInfo
            info={"Приветствуем! Вы приняли участие в игре. Ваш номер билета указан напротив вашего кошелька"}/></h1>
          <div
            className={"border border-orange-500 md:w-[500px] md:h-[200px] h-[120px] p-[10px] overflow-x-hidden overflow-y-auto scrollbar-custom"}>
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
            <h1 className={"text-center w-[320px] md:w-full text-xl md:text-3xl"}>Генератор выиграшных номеров ChainlinkVRF<ClickableTooltipInfo
              info={"Перейдите по ссылке Хеш Транзакции во вкладке LOGS Data requestld payment вы можете найти число сгенерированное Chainlink VRF"}/>
            </h1>
            <div className={"w-[320px] md:w-[600px] flex flex-col border border-orange-500 rounded-2xl"}>
              <div className={"w-full px-[15px] pt-[15px] h-[200px] border-b-1 border-orange-500"}>
                {currentStep >= 1 && (
                  <p className={"text-[15px] md:text-[20px]"}>Старт трех запросов CHAINLINK VRF...</p>)}
                {currentStep >= 2 && (
                  <p className={"text-[15px] md:text-[20px]"}>Первое число 1. <a
                    href={"https://bscscan.com/tx/0xae18ddfb738519db08dc143b1cde8338ddbd7870671c3ae525e80d57e28b4323"}
                    target={"_blank"} className={"text-orange-500 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 3 && (
                  <p className={"text-[15px] md:text-[20px]"}>Второе число 5. <a
                    href={"https://bscscan.com/tx/0x4f66bdbae02cd4b8eecfad3b25f2ed2f733b67e772fbdbbeddba87f18a86220f"}
                    target={"_blank"} className={"text-orange-500 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 4 && (
                  <p className={"text-[15px] md:text-[20px]"}>Третье число 4. <a
                    href={"https://bscscan.com/tx/0x5e2748bc9ad5f0c935558482f9b820abd57e670c25a991a1b7322e26d1f5e3b1"}
                    target={"_blank"} className={"text-orange-500 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 5 && (<p className={"text-[15px] md:text-[20px]"}>Отображение результатов</p>)}
              </div>
              <div
                ref={ref}
                className={"h-[200px] p-[10px] flex justify-evenly"}>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-yellow-500 font-bold px-[15px]">1</p>
                  {playCounter && (<SlotCounter
                    value={1}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
                <div className={"border border-orange-500 h-full"}></div>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-gray-400 font-bold px-[15px]">2</p>
                  {playCounter && (<SlotCounter
                    value={5}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
                <div className={"border border-orange-500 h-full"}></div>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-amber-700 font-bold px-[15px]">3</p>
                  {playCounter && (<SlotCounter
                    value={4}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
              </div>
            </div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1 className={"text-center text-xl md:text-3xl"}>Как проверить достоверность выигрышных чисел?</h1>
            <ol className={"list-disc space-y-2 pl-[20px] md:pl-0 marker:text-orange-500"}>
              <li className={"md:text-xl text-base"}>{`Перейти по ссылке "Хэш транзакции"`}</li>
              <li className={"md:text-xl text-base"}>Кликнуть на вкладку Logs</li>
              <li className={"md:text-xl text-base"}>Посмотреть поле payment</li>
            </ol>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[30px] md:border-2 md:border-orange-500 md:shadow-[0_0_20px_5px_rgba(255,0,0,0.5)] p-[20px]"}>
            <h1 className={"text-center text-orange-500"}>ВЫПЛАТЫ ПОБЕДИТЕЛЯМ</h1>
            <div
              className={"flex md:gap-[20px] gap-[12px] md:flex-row flex-col justify-center items-center md:items-stretch"}>
              <p
                className={"md:w-[300px] w-[250px] md:text-xl text-base border-2 border-orange-500 shadow-[0_0_20px_5px_rgba(255,0,0,0.5)] rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>
                1) Место: <a href={"https://bscscan.com/tx/0x7e5366025427c6cd9eabcb4accbf37377eb60b746ffa0a7351f9e058139e157b"} target={"_blank"} className={"text-orange-500 cursor-pointer"}>Хэш транзакции</a> Сумма: 600 DBE
              </p>
              <p
                className={"md:w-[300px] w-[250px] md:text-xl text-base border-2 border-orange-500 shadow-[0_0_20px_5px_rgba(255,0,0,0.5)] rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>
                2) Место: <a href={"https://bscscan.com/tx/0xa8bf4e75e97e054729c8b64ce20869008d710e3e3095677147f4c5572e501bc4"} target={"_blank"} className={"text-orange-500 cursor-pointer"}>Хэш транзакции</a> Сумма: 70 DBE
              </p>
              <p
                className={"md:w-[300px] w-[250px] md:text-xl text-base border-2 border-orange-500 shadow-[0_0_20px_5px_rgba(255,0,0,0.5)] rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>
                3) Место: <a href={"https://bscscan.com/tx/0xa8bf4e75e97e054729c8b64ce20869008d710e3e3095677147f4c5572e501bc4"} target={"_blank"} className={"text-orange-500 cursor-pointer"}>Хэш транзакции</a> Сумма: 30 DBE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}