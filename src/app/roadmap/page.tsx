'use client'
import React, {useEffect} from "react";

export default function Roadmap () {
  useEffect(() => {
    if (!document.getElementById('portal-root')) {
      const portal = document.createElement('div');
      portal.id = 'portal-root';
      document.body.appendChild(portal);
    }
  }, []);

  return (
    <div className={"md:px-[80px] px-[10px] flex flex-col justify-center gap-[20px]"}>
      <h1 className={"text-center pt-[15px] md:text-4xl"}>Дорожная карта 2025 - 2027</h1>
      <p className={"md:text-xl text-base"}>Исследование и Разработка</p>
      <p className={"md:text-xl text-base"}>1. Квартал : Исследование и планирование</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Анализ рынка децентрализованных лотерей</li>
        <li className={"md:text-xl text-base"}>Определение целевой аудитории и конкурентных преимуществ</li>
        <li className={"md:text-xl text-base"}>Разработка концепции токена DBE</li>
      </ol>
      <p className={"md:text-xl text-base"}>2. Квартал : Техническое проектирование</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Проектирование архитектуры смарт-контрактов</li>
        <li className={"md:text-xl text-base"}>Интеграция Chainlink VRF для генерации случайных чисел</li>
        <li className={"md:text-xl text-base"}>Разработка прототипа пользовательского интерфейса</li>
      </ol>
      <p className={"md:text-xl text-base"}>3. Квартал : Разработка смарт-контрактов</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Написание и тестирование смарт-контрактов для лотереи</li>
        <li className={"md:text-xl text-base"}>Проведение аудита безопасности смарт-контрактов</li>
        <li className={"md:text-xl text-base"}>Первый выход токена DBE (IPO)</li>
      </ol>
      <p className={"md:text-xl text-base"}>4. Квартал : 2025 Сентабрь</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Организация живых розыгрышей с транзакциями в реальном времени</li>
        <li className={"md:text-xl text-base"}>Запуск видеоплатформы для трансляций. Первий запуск на (DEX)Pancakeswap
        </li>
        <li className={"md:text-xl text-base"}>Запуск децентрализованной лотереи на основной сети</li>
        <li className={"md:text-xl text-base"}>Проведение маркетинговой кампании для привлечения пользователей</li>
      </ol>
      <p className={"md:text-xl text-base"}>Разработка сообщества</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Создание и активное развитие сообщества в социальных сетях</li>
        <li className={"md:text-xl text-base"}>Организация конкурсов и акций для пользователей</li>
      </ol>
      <p className={"md:text-xl text-bold text-base"}>Интеграция дополнительных функций</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Внедрение новых механик лотереи (например, мульти-лотереи)</li>
        <li className={"md:text-xl text-base"}>Интеграция с другими децентрализованными приложениями (dApps)</li>
        <li className={"md:text-xl text-base"}>Оптимизация системы на основе обратной связи</li>
      </ol>
      <h1 className={"text-center pt-[15px] md:text-4xl"}>2026 год</h1>
      <p className={"md:text-xl text-bold text-base"}>1. Квартал : Масштабирование и Устойчивое Развитие</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Расширение функционала для поддержки больших объемов пользователей</li>
        <li className={"md:text-xl text-base"}>Внедрение новых токеномических моделей для стимулирования участия</li>
      </ol>
      <p className={"md:text-xl text-bold text-base"}>2. Квартал : Партнерства и сотрудничество</p>
      <p className={"md:text-xl text-bold text-base"}>Выход на биржи Bybit Kraken OKX</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Поиск партнеров для улучшения экосистемы (биржи, другие dApps)</li>
        <li className={"md:text-xl text-base"}>Участие в мероприятиях и конференциях для повышения узнаваемости</li>
      </ol>
      <p className={"md:text-xl text-bold text-base"}>3. Квартал : Глобальное расширение</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Поддержка нескольких языков и валют</li>
        <li className={"md:text-xl text-base"}>Запуск маркетинговых кампаний в новых регионах</li>
      </ol>
      <p className={"md:text-xl text-bold text-base"}>4. Квартал : Устойчивое развитие</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Оценка результатов и планирование будущих шагов</li>
        <li className={"md:text-xl text-base"}>Поддержание активного взаимодействия с сообществом и пользователями</li>
      </ol>
      <p className={"md:text-xl text-bold text-base"}>Выход на биржу Binance</p>
      <h1 className={"text-center pt-[15px] md:text-4xl"}>2027 год</h1>
      <p className={"md:text-xl text-bold text-base"}>Разработка концепции NFT-лотерей и многоуровенной системы</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Создание смарт-контрактов для лотереи с поддержкой NFT</li>
        <li className={"md:text-xl text-base"}>Запуск децентрализованной лотереи с NFT-билетами</li>
      </ol>
      <p className={"md:text-xl text-bold text-base"}>Внедрение динамического ценообразования</p>
      <ol className={"list-disc space-y-2 pl-[30px] marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Реализация системы динамического ценообразования для билетов</li>
        <li className={"md:text-xl text-base"}>Запуск промо-кампаний для привлечения групп</li>
        <li className={"md:text-xl text-base"}>Внедрение игровых элементов, таких как достижения и уровни</li>
        <li className={"md:text-xl text-base"}>Разработка системы наград за активное участие</li>
        <li className={"md:text-xl text-base"}>Разработка механизма стейкинга для токенов DBE</li>
        <li className={"md:text-xl text-base"}>Внедрение системы голосования для участников</li>
        <li className={"md:text-xl text-base"}>Обновление дизайна платформы</li>
        <li className={"md:text-xl text-base"}>Анализ и внедрение новых технологий, таких как zk-SNARKs для обеспечения анонимности</li>
        <li className={"md:text-xl text-base"}>Изучение возможностей интеграции с другими блокчейнами</li>
        <li className={"md:text-xl text-base"}>Сотрудничество с другими проектами для совместного развития</li>
        <li className={"md:text-xl text-base"}>Планирование новых функций и расширений на основе обратной связи</li>
        <li className={"md:text-xl text-base"}>Определение новых целей и задач на следующий период</li>
      </ol>
    </div>
  )
}