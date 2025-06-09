'use client'
import React, {useEffect, useState} from "react";
import dynamic from 'next/dynamic';
import { useInView } from "react-intersection-observer";
import ClickableTooltipInfo from "@/components/ClickableTooltipInfo";
import RotatingModel from "@/components/RotatingModel";
import {IconButton, Tooltip} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import {ethers} from "ethers";
import toast from "react-hot-toast";
import {api} from "@/utils/api";
import {Ticket} from "@/types/Ticket";
import {useAuth} from "@/contexts/AuthContext";
import { io } from 'socket.io-client'
const SlotCounter = dynamic(() => import('react-slot-counter'), { ssr: false });
const DBE_TOKEN_ADDRESS = '0x86Aa748baC7BDe8Cd1A7bEf7236Ab4279554b6B6'
const RECEIVER_ADDRESS = '0x740B45a8E7C01AAFC6CD823e5a794F172eE9cCD0'

const ERC20_ABI = [
  'function transfer(address to, uint amount) public returns (bool)',
  'function decimals() view returns (uint8)',
]

const socket = io(process.env.NEXT_PUBLIC_API_URL);

export default function StandardBank() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [open, setOpen] = useState(false);
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent)
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const { user } = useAuth();
  const [winners, setWinners] = useState<{number: number, transactionHash: string}[]>([]);

  const handleClick = async (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(prev => !prev);
    if (isIOS) {
      return
    }
    if (!(window as any).ethereum) return toast.error('Установите MetaMask')

    const provider = new ethers.BrowserProvider((window as any).ethereum)
    const signer = await provider.getSigner()

    const token = new ethers.Contract(DBE_TOKEN_ADDRESS, ERC20_ABI, signer)

    try {
      const decimals = await token.decimals()
      const amount = ethers.parseUnits('500', decimals)

      const tx = await token.transfer(RECEIVER_ADDRESS, amount)
      toast.success('Транзакция отправлена: ' + tx.hash)

      await tx.wait()
      toast.success('Успешно отправлено!')
    } catch (err: any) {
      console.log(err.message)
      toast.error('Ошибка: не удалось отправить токены')
    }
  };

  const [playCounter, setPlayCounter] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    api.get('game/latest/MEGA').then((res) => {
      setTickets(res.data.tickets)
      setWinners(res.data.winners.map((el: { number: string; transactionHash: string }) => ({
        number: +el.number,
        transactionHash: el.transactionHash,
      })))
      switch (res.data.status) {
      case 'open':
        return setCurrentStep(0)
      case 'first_number':
        return setCurrentStep(1)
      case 'second_number':
        return setCurrentStep(2)
      case 'finished':
        return setCurrentStep(3)
      }
    })

    socket.on('new-ticket', (ticket) => {
      setTickets((prev) => [...prev, ticket])
    })

    socket.on('game-status-changed', ({ number, transactionHash }) => {
      setWinners(prev => [...prev, {number: +number, transactionHash }]);
      setCurrentStep(prev => prev + 1);
    });

    return () => {
      socket.off('new-ticket')
      socket.off('game-status-changed')
    }
  }, []);

  useEffect(() => {
    if (inView && currentStep == 3) {
      setPlayCounter(true)
    }
  }, [inView, currentStep]);

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
        className={"border border-yellow-600 rounded-2xl w-full md:py-[60px] py-[30px] flex flex-col items-center gap-[20px] relative"}>
        <div className={"absolute hidden md:block top-[30px] left-[30px] h-[200px] w-[200px]"}>
          <RotatingModel fileName={"mega.glb"}/>
        </div>
        <div className={"flex justify-center absolute top-[-30px] bg-[#2a2a2a] border border-yellow-600 rounded-full shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] bg-yellow-600"}>
          <h1
            onClick={handleClick}
            className={"text-center cursor-pointer p-[10px] md:text-4xl w-fit"}>Играть
            Mega Bank
          </h1>
          <Tooltip
            open={open}
            onClick={handleClick}
            title={"Для участия в лотереи Mega Bank переведите 500 токенов DBE на адрес 0x740B45a8E7C01AAFC6CD823e5a794F172eE9cCD0 Сеть BNB Smart Chain (BEP 20). После этого вы автоматически появитесь в окне участников с присвоенным номером билета"}
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
            <p className={"text-base md:text-xl"} >Учасники</p>
            <p className="text-[60px] font-bold border border-yellow-600 rounded-2xl md:px-[15px] px-[5px] min-w-[80px] text-center">{tickets.length}</p>
          </div>
          <div className={"md:hidden h-[150px] w-[150px]"}>
            <RotatingModel fileName={"mega.glb"}/>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <p className={"text-base md:text-xl"} >Ваш номер</p>
            {user !== null && tickets.findIndex(t => t.metamaskId.toLowerCase() === user.metamaskId.toLowerCase()) !== -1
              ? <p
                className="text-[60px] font-bold border border-yellow-600 rounded-2xl md:px-[15px] px-[5px] min-w-[80px] text-center">{tickets.findIndex(t => t.metamaskId.toLowerCase() === user.metamaskId.toLowerCase()) + 1}</p>
              : <p
                className="text-sm border border-yellow-600 rounded-2xl md:px-[15px] p-[5px] max-w-[100px] text-center">У вас пока нет номера билета</p>}
          </div>
        </div>
        <div className={"flex flex-col justify-center items-center md:gap-[30px] gap-[15px]"}>
          <h1 className={"text-xl md:text-3xl"} >Строка новых участников<ClickableTooltipInfo
            info={"Приветствуем! Вы приняли участие в игре. Ваш номер билета указан напротив вашего кошелька"}/></h1>
          <div
            className={"border border-yellow-600 md:w-[500px] md:h-[200px] h-[120px] p-[10px] overflow-x-hidden overflow-y-auto scrollbar-custom"}>
            {tickets.length > 0 && tickets.map((ticket, index) => (
              <div key={ticket.id} className={`flex justify-center text-[15px] md:text-[20px] gap-[15px] ${user?.metamaskId && ticket.metamaskId.toLowerCase() === user.metamaskId.toLowerCase() ? 'bg-yellow-600 rounded-2xl px-[5px]' : ''}`}>
                <p>{ticket.metamaskId}</p>
                -
                <p>№ {index + 1}</p>
              </div>
            ))}
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1 className={"text-center text-xl md:text-3xl"}>Генератор выигрышных номеров ChainlinkVRF<ClickableTooltipInfo
              info={"Перейдите по ссылке Хеш Транзакции во вкладке LOGS Data requestld payment вы можете найти число сгенерированное Chainlink VRF"}/>
            </h1>
            <div className={"w-[320px] md:w-[600px] flex flex-col border border-yellow-600 rounded-2xl"}>
              <div className={"w-full px-[15px] pt-[15px] h-[200px] border-b-1 border-yellow-600"}>
                {tickets.length === 100 && (
                  <p className={"text-[15px] md:text-[20px]"}>Старт трех запросов CHAINLINK VRF...</p>)}
                {currentStep >= 1 && (
                  <p className={"text-[15px] md:text-[20px]"}>Первое число {winners[0].number}. <a
                    href={`https://bscscan.com/tx/${winners[0].transactionHash}`}
                    target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 2 && (
                  <p className={"text-[15px] md:text-[20px]"}>Второе число {winners[1].number}. <a
                    href={`https://bscscan.com/tx/${winners[1].transactionHash}`}
                    target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a></p>)}
                {currentStep >= 3 && (
                  <>
                    <p className={"text-[15px] md:text-[20px]"}>Третье число {winners[2].number}. <a
                      href={`https://bscscan.com/tx/${winners[2].transactionHash}`}
                      target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a></p>
                    <p className={"text-[15px] md:text-[20px]"}>Отображение результатов</p>
                  </>
                )}
              </div>
              <div
                ref={ref}
                className={"h-[200px] p-[10px] flex justify-evenly"}>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-yellow-500 font-bold px-[15px]">1</p>
                  {playCounter && (<SlotCounter
                    value={winners[0].number}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
                <div className={"border border-yellow-600 h-full"}></div>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-gray-400 font-bold px-[15px]">2</p>
                  {playCounter && (<SlotCounter
                    value={winners[1].number}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
                <div className={"border border-yellow-600 h-full"}></div>
                <div className={"flex flex-col items-center justify-center md:gap-[15px]"}>
                  <p className="text-[60px] text-amber-700 font-bold px-[15px]">3</p>
                  {playCounter && (<SlotCounter
                    value={winners[2].number}
                    duration={2}
                    containerClassName="text-[60px] font-bold px-[15px]"
                  />)}
                </div>
              </div>
            </div>
          </div>
          <div className={"flex flex-col justify-center items-center gap-[10px]"}>
            <h1 className={"text-center text-xl md:text-3xl"}>Как проверить достоверность выигрышных чисел?</h1>
            <ol className={"list-disc space-y-2 pl-[20px] md:pl-0 marker:text-yellow-600"}>
              <li className={"md:text-xl text-base"}>{`Перейти по ссылке "Хэш транзакции"`}</li>
              <li className={"md:text-xl text-base"}>Кликнуть на вкладку Logs</li>
              <li className={"md:text-xl text-base"}>Посмотреть поле payment</li>
            </ol>
          </div>
          <div
            className={"flex flex-col justify-center items-center gap-[30px] md:border-2 md:border-yellow-600 md:shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] p-[20px]"}>
            <h1 className={"text-center text-yellow-600 "}>ВЫПЛАТЫ ПОБЕДИТЕЛЯМ</h1>
            <div
              className={"flex md:gap-[20px] gap-[12px] md:flex-row flex-col justify-center items-center md:items-stretch"}>
              <p
                className={"md:w-[300px] w-[250px] md:text-xl text-base border-2 border-yellow-600 shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>
                1) Место: <a
                  href={"https://bscscan.com/tx/0x7e5366025427c6cd9eabcb4accbf37377eb60b746ffa0a7351f9e058139e157b"}
                  target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a> Сумма: 30000 DBE
              </p>
              <p
                className={"md:w-[300px] w-[250px] md:text-xl text-base border-2 border-yellow-600 shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>
                2) Место: <a
                  href={"https://bscscan.com/tx/0xa8bf4e75e97e054729c8b64ce20869008d710e3e3095677147f4c5572e501bc4"}
                  target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a> Сумма: 3500 DBE
              </p>
              <p
                className={"md:w-[300px] w-[250px] md:text-xl text-base border-2 border-yellow-600 shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>
                3) Место: <a
                  href={"https://bscscan.com/tx/0xa8bf4e75e97e054729c8b64ce20869008d710e3e3095677147f4c5572e501bc4"}
                  target={"_blank"} className={"text-yellow-600 cursor-pointer"}>Хэш транзакции</a> Сумма: 1500 DBE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}