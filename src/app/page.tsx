import Image from "next/image";
import SidebarMenu from "@/components/SideBar";

export default function Home() {
  const nav = ["ГЛАВНАЯ", "МИНИ БАНК", "СТАНДАРТ БАНК", "МЕГА БАНК"]
  const buttons = [{name: "Войти", color: "gray"}, {name: "Регистрация", color: "purple"}]

  return (
    <>
      <header className="flex flex-row h-[80px] justify-between items-center border-b border-purple-900 px-[20px] pb-[10px] mt-[10px]">
        <div className={"w-[80px] h-[80px] pt-[23px] flex items-center overflow-hidden rounded-full"}>
          <Image src={"/doublegame.png"} alt={"doublegame"} height={80} width={80}/>
        </div>
        <nav>
          <ul className={"flex flex-row gap-[50px]"}>
            {nav.map(item => (
              <li key={item} className={"relative group cursor-pointer transition-all duration-300 hover:text-purple-900"}>
                {item}
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-900 transition-all duration-300 group-hover:w-full"/>
              </li>
            ))}
          </ul>
        </nav>
        <div className={"flex flex-row p-[5px] gap-[10px]"}>
          {buttons.map(({name, color}) => (
            <div
              key={name}
              className={`h-[50px] bg-${color}-600 transition-all duration-300 hover:bg-${color}-900 rounded-full flex justify-center items-center group`}>
              <div
                className="text-white font-semibold transition-colors px-[10px]">{name}
              </div>
            </div>
          ))}
        </div>
      </header>
      <main>
        <SidebarMenu />
      </main>
    </>
  );
}
