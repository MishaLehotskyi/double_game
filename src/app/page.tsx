'use client'
import React, {useEffect} from "react";
import Copy from "@/components/Copy";

export default function Home(){
  useEffect(() => {
    if (!document.getElementById('portal-root')) {
      const portal = document.createElement('div');
      portal.id = 'portal-root';
      document.body.appendChild(portal);
    }
  }, []);

  return (
    <div className={"md:px-[80px] px-[10px] flex flex-col justify-center gap-[20px] bg-no-repeat bg-contain md:bg-repeat-y md:bg-left md:bg-[length:100%_auto] bg-[url('/back2.gif')]"}>
      <h1 className={"text-center pt-[15px] md:text-4xl"}>DoubelGame это прозрачная и открытая DeXe лотерея, где
        победителей выбирает генератор случайных чисел <a href={"https://docs.chain.link/vrf"} target={"_blank"}
        className={"text-purple-700 cursor-pointer"}>Chainlink VRF</a>
      </h1><p className={"text-center"}><a href={"https://docs.chain.link/vrf"} target={"_blank"}
        className={"text-purple-700 cursor-pointer"}>Chainlink VRF</a> полностью
      исключает манипуляции и вмешательства в выбор победителя</p>
      <h1 className={"text-center"}>ПОЧЕМУ DoubelGame?</h1>
      <div
        className={"flex md:gap-[20px] gap-[12px] md:flex-row flex-col justify-center items-center md:items-stretch"}>
        <p
          className={"md:w-[300px] w-[360px] md:text-xl text-base border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Пользователи
          платформы имеют возможность участвовать в совершенно прозрачные и открытые лотереи
        </p>
        <p
          className={"md:w-[300px] w-[360px] md:text-xl text-base border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Покупать
          токены получать номер от 1 до 10 или от 1 до 100 билета отображаемый в строке участников</p>
        <p
          className={"md:w-[300px] w-[360px] md:text-xl text-base border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Лотерея
          проходит сразу как набирается 10 или 100 участников</p>
        <p
          className={"md:w-[300px] w-[360px] md:text-xl text-base border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Подается
          запрос на Chainlink VRF генерирует 3 случайных числа от 1 до 10 или от 1 до 100 тем самым выдает выигрышные номера.</p>
      </div>
      <ol className={"list-disc space-y-2 pl-[20px] md:pl-0 marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Первое выпавшее число это 1 победитель забирающий 60% от банка</li>
        <li className={"md:text-xl text-base"}>2 номер 15%</li>
        <li className={"md:text-xl text-base"}>3 номер 10%</li>
        <li className={"md:text-xl text-base"}>10 % от банка переходит в пул ликвидности токена DBE тем самым
          обеспечивает беспрерывный рост токена
        </li>
        <li className={"md:text-xl text-base"}>5% от банка идет на развитие проекта и команду DobelGame</li>
      </ol>
      <p className={"md:text-xl text-base"}>Держатели токена DBE имеют возможность отправлять его в стейкинг под 3% в
        месяц</p>
      <ol className={"list-disc space-y-2 pl-[20px] md:pl-0 marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Пул ликвидности обеспечивает выплаты процентов по Стейкингу</li>
        <li className={"md:text-xl text-base"}>Пул ликвидности наполняется с процентов от Лотереи</li>
      </ol>
      <p className={"text-center md:text-xl text-base"}>DoubelGame дает возможность участвовать в децентрализованной
        системе Лотерей без налогов и надзора с полностью прозрачной системой выбора победителя. А также быть держателем
        и инвестором токена DBE тем самым быть частично владельцем DeXe лотереи DoubelGame</p>
      <div
        className="flex justify-end w-full"
      >
        <div className="flex items-center gap-4 md:w-[320px] w-full md:text-xl text-base">
          Почта админа:
          <a
            href={"https://mailto:admin@doubelgame.ru"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors md:text-xl text-base"
          >
            admin@doubelgame.ru
          </a>
        </div>
        <Copy text={"admin@doubelgame.ru"} />
      </div>
    </div>
  );
}
