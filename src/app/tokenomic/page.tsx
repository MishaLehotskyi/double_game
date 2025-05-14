'use client';
import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Plugin, Chart,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: [
    'Маркетинг',
    'Community',
    'Публичная продажа',
    'ICO Для ранних инвесторов',
    'Стратегический резерв',
    'Пулл ликвидности',
  ],
  datasets: [
    {
      data: [
        5,
        20,
        10,
        5,
        30,
        30,
      ],
      backgroundColor: [
        '#5C4B8A',
        '#6D5BAF',
        '#7E6BC2',
        '#8F7AD5',
        '#A08AE8',
        '#B2A1F2',
      ],
      borderWidth: 0,
    },
  ],
};

const arcLabelPlugin: Plugin<'doughnut'> = {
  id: 'arcLabelPlugin',
  afterDraw(chart: Chart<'doughnut'>) {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);
    const labels = chart.data.labels as string[];

    if (!meta?.data?.length || !labels) return;

    ctx.save();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    meta.data.forEach((element, i) => {
      const arc = element as unknown as ArcElement;
      const angle = (arc.startAngle + arc.endAngle) / 2;

      const radius = arc.outerRadius;
      const labelDistance = 15; // how far outside the arc the label appears

      // line start at outer edge of arc
      const x1 = chart.width / 2 + Math.cos(angle) * radius;
      const y1 = chart.height / 2 + Math.sin(angle) * radius;

      // line end a bit further out
      const x2 = chart.width / 2 + Math.cos(angle) * (radius + labelDistance);
      const y2 = chart.height / 2 + Math.sin(angle) * (radius + labelDistance);

      // draw line
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // label position even further out
      const xText = chart.width / 2 + Math.cos(angle) * (radius + labelDistance + 10);
      const yText = chart.height / 2 + Math.sin(angle) * (radius + labelDistance + 10);

      const label = labels[i];
      ctx.fillText(label, xText, yText);
    });

    ctx.restore();
  },
};

const options = {
  cutout: '50%',
  responsive: true,
  layout: {
    padding: 90,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
      external: () => {},
    },
  },
};

export default function Tokenomic() {
  return (
    <div className={"md:px-[80px] px-[10px] flex flex-col justify-center gap-[20px] items-center"}>
      <h1 className={"text-center pt-[15px] md:text-4xl"}>Токеномика DBE</h1>
      <ol className={"list-disc space-y-2 pl-[20px] md:pl-0 marker:text-purple-900"}>
        <li className={"md:text-xl text-base"}>Общее предложение 1000000</li>
        <li className={"md:text-xl text-base"}>Начальное предложение 50000 ICO ( - 50 % для ранних инвесторов )</li>
        <li className={"md:text-xl text-base"}>Маркетинг 50000</li>
        <li className={"md:text-xl text-base"}>Публичная продажа Round 1 100000</li>
        <li className={"md:text-xl text-base"}>Публичная продажа Round 2 100000</li>
        <li className={"md:text-xl text-base"}>Прогнозируемый пулл ликвидности 50000 - 300000, регулируется в
          зависимости от спроса
        </li>
        <li className={"md:text-xl text-base"}>300000 стратегический запас</li>
      </ol>
      <div className={"md:w-[720px] md:h-[720px]"}>
        <Doughnut data={data} options={options} plugins={[arcLabelPlugin]} />
      </div>
    </div>
  )
}