import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex flex-row h-[80px] justify-between items-center border-b border-purple-900 pr-[20px]">
        <div className={"w-[190px] h-[80px] overflow-hidden relative"}>
          <Image src={"/db.png"} alt={"db"} height={220} width={220} className={"absolute top-[-65px] left-[-20px] !max-w-none"}/>
        </div>
        <nav>
          <ul className={"flex flex-row gap-[50px]"}>
            <li className={"relative group cursor-pointer transition-all duration-300 hover:text-purple-900"}>
              ГЛАВНАЯ
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-900 transition-all duration-300 group-hover:w-full"/>
            </li>
            <li className={"relative group cursor-pointer transition-all duration-300 hover:text-purple-900"}>
              МИНИ БАНК
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-900 transition-all duration-300 group-hover:w-full"/>
            </li>
            <li className={"relative group cursor-pointer transition-all duration-300 hover:text-purple-900"}>
              СТАНДАРТ БАНК
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-900 transition-all duration-300 group-hover:w-full"/>
            </li>
            <li className={"relative group cursor-pointer transition-all duration-300 hover:text-purple-900"}>
              МЕГА БАНК
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-900 transition-all duration-300 group-hover:w-full"/>
            </li>
          </ul>
        </nav>
        <div className={"flex flex-row p-[5px] gap-[10px]"}>
          <div
            className={"h-[50px] bg-gray-600 transition-all duration-300 hover:bg-gray-900 rounded-full flex justify-center items-center group"}>
            <div
              className="text-white font-semibold transition-colors px-[10px]">Войти
            </div>
          </div>
          <div
            className={"h-[50px] bg-purple-700 transition-all duration-300 hover:bg-purple-900 rounded-full flex justify-center items-center group"}>
            <div
              className="text-white font-semibold transition-colors px-[5px]">Регистрация
            </div>
          </div>
        </div>
      </header>
      <main>
      </main>
    </>
  );
}
