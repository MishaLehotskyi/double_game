import Image from "next/image";
import SidebarMenu from "@/components/SideBar";

export default function Home() {
  const nav = ["ГЛАВНАЯ", "МИНИ БАНК", "СТАНДАРТ БАНК", "МЕГА БАНК"]

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
          <div
            className={"h-[50px] bg-gray-600 transition-all duration-300 hover:bg-gray-900 rounded-full flex justify-center items-center group"}>
            <div
              className="text-white font-semibold transition-colors px-[10px]">Войти
            </div>
          </div>
          <div
            className={`h-[50px] bg-purple-600 transition-all duration-300 hover:bg-purple-900 rounded-full flex justify-center items-center group`}>
            <div
              className="text-white font-semibold transition-colors px-[10px]">Регистрация
            </div>
          </div>
        </div>
      </header>
      <main>
        <SidebarMenu/>
        <div className={"px-[80px] flex flex-col justify-center gap-[20px]"}>
          <h1 className={"text-center pt-[15px]"}><span className={"text-purple-700"}>DoubelGame</span> это прозрачная и
            открытая DeXe лотерея, где победителей выбирает генератор случайных чисел <a href={"https://docs.chain.link/vrf"} target={"_blank"} className={"text-purple-700 cursor-pointer"}>Chainlink VRF</a></h1><p className={"text-center"}><a href={"https://docs.chain.link/vrf"} target={"_blank"} className={"text-purple-700 cursor-pointer"}>Chainlink VRF</a> полностью
            исключает манипуляции и вмешательства в выбор победителя</p>
          <h1 className={"text-center"}>ПОЧЕМУ <span className={"text-purple-700"}>DoubelGame</span>?</h1>
          <div className={"flex gap-[20px] justify-center"}>
            <p
              className={"w-[300px] border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Пользователи
              платформы имеют возможность участвовать в <span className={"text-purple-700"}>совершенно прозрачные и открытые лотереи</span>
            </p>
            <p
              className={"w-[300px] border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Покупать
              токены получать номер от <span className={"text-purple-700"}>1-100</span> билета отображаемый в строке
              участников</p>
            <p
              className={"w-[300px] border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Лотерея
              проходит сразу как набирается <span className={"text-purple-700"}>100</span> участников</p>
            <p
              className={"w-[300px] border border-purple-600 rounded-2xl p-[10px] transition-transform duration-300 hover:scale-110"}>Подается
              запрос на <span className={"text-purple-700"}>Chainlink VRF</span> генерирует <span
                className={"text-purple-700"}>3</span> случайных числа <span
                className={"text-purple-700"}>от 1 до 100</span> тем самым выдает выигрышные номера.</p>
          </div>
          <ol className={"list-disc space-y-2 marker:text-purple-900"}>
            <li>Первое выпавшее число это <span className={"text-purple-700"}>1 победитель</span> забирающий <span
              className={"text-purple-700"}>60% от банка</span></li>
            <li>2 номер <span className={"text-purple-700"}>7%</span></li>
            <li>3 номер <span className={"text-purple-700"}>3%</span></li>
            <li><span className={"text-purple-700"}>20 % от банка</span> переходит в пул ликвидности токена <span
              className={"text-purple-700"}>DBE</span> тем самым обеспечивает <span className={"text-purple-700"}>беспрерывный рост токена</span>
            </li>
            <li><span className={"text-purple-700"}>10% от банка</span> идет на <span className={"text-purple-700"}>развитие проекта и команду DobelGame</span>
            </li>
          </ol>
          <p><span className={"text-purple-700"}>Держатели токена DBE</span> имеют возможность отправлять его в <span className={"text-purple-700"}>стейкинг под 3% в месяц</span></p>
          <ol className={"list-disc space-y-2 marker:text-purple-900"}>
            <li>Пул ликвидности обеспечивает <span className={"text-purple-700"}>выплаты процентов по Стейкингу</span></li>
            <li>Пул ликвидности наполняется с <span className={"text-purple-700"}>процентов от Лотереи</span></li>
          </ol>
          <p className={"text-center"}><span className={"text-purple-700"}>DoubelGame</span> дает возможность участвовать в децентрализованной системе Лотерей без налогов и надзора с <span className={"text-purple-700"}>полностью прозрачной системой выбора победителя</span>. А также быть держателем и инвестором <span className={"text-purple-700"}>токена DBE</span> тем самым быть частично владельцем <span className={"text-purple-700"}>DeXe лотереи DoubelGame</span></p>
        </div>
      </main>
    </>
  );
}
