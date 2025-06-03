import React from "react";
import Copy from "@/components/Copy";

export default function Buy({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full flex flex-col gap-[10px] items-center max-w-sm bg-[#2a2a2a] p-4 rounded-xl text-white">
      <p>Если вы не можете найти токен в списке - вставьте адрес смарт контракта в поле поиска токена</p>
      <p>Адрес Контракта DBE</p>
      <div className={"flex flex-row items-center"}>
        <div className={"text-base"}>0x86Aa748baC7BDe8Cd1A7bEf7236Ab4279554b6B6</div>
        <Copy text={"0x86Aa748baC7BDe8Cd1A7bEf7236Ab4279554b6B6"}/>
      </div>
      <a target={"_blank"}
        href={"https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x86Aa748baC7BDe8Cd1A7bEf7236Ab4279554b6B6"}
        className={"bg-[#2a2a2a] w-fit border border-yellow-600 rounded-full shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] bg-yellow-600 md:p-[10px] md:text-2xl text-sm px-[5px] py-[10px]"}>Купить
        DBE</a>
      <button onClick={onClose} className="text-sm text-gray-300 mt-4 block mx-auto">
        Закрыть
      </button>
    </div>
  )
}