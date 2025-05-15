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
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { Doughnut } from 'react-chartjs-2';
import CustomNode from "@/components/CustomNode";
import OneBotSource from "@/components/OneBotSource";
import OneBotTarget from "@/components/OneBotTarget";
import OneRightSource from "@/components/OneRightSource";
import DoubleLeft from "@/components/DoubleLeft";
import DoubleTop from "@/components/DoubleTop";
import CustomNodeSecond from "@/components/CustomNodeSecond";
import OneTopTarget from "@/components/OneTopTarget";


const nodeTypes = {
  custom: CustomNode,
  oneBotSource: OneBotSource,
  oneBotTarget: OneBotTarget,
  oneRightSource: OneRightSource,
  doubleLeft: DoubleLeft,
  doubleTop: DoubleTop,
  customSecond: CustomNodeSecond,
  oneTopTarget: OneTopTarget,
};

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

const edges = [
  { id: 'e1-2', source: '1', target: '2', targetHandle: 'input-2', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e2-2', source: '2', target: '3', sourceHandle: 'input-3', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e4-2', source: '4', target: '2', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e5-2', source: '5', target: '2', sourceHandle: 'input-1', targetHandle: 'input-4', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e2-5', source: '2', target: '5', sourceHandle: 'input-5', targetHandle: 'input-2', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e2-6', source: '2', target: '6', sourceHandle: 'input-6', targetHandle: 'input-2', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e6-2', source: '6', target: '2', sourceHandle: 'input-1', targetHandle: 'input-7', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e7-2', label: '20%', source: '7', target: '2', sourceHandle: 'input-2', targetHandle: 'input-8', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e2-7', source: '2', target: '7', sourceHandle: 'input-9', targetHandle: 'input-1', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e7-8', source: '7', target: '8', sourceHandle: 'input-3', targetHandle: 'input-1', markerEnd: { type: 'arrowclosed' }, animated: true, },
  { id: 'e7-9', source: '7', target: '9', sourceHandle: 'input-4', targetHandle: 'input-1', markerEnd: { type: 'arrowclosed' }, animated: true, },
];

const nodes = [
  { id: '1', type: 'oneBotSource', data: { label: 'Стейкинг' }, position: { x: 100, y: 50 } },
  { id: '2', type: 'custom', data: { label: 'Пулл ликвидности' }, position: { x: 200, y: 150 } },
  { id: '3', type: 'oneBotTarget', data: { label: 'Выплата % по стейкингу' }, position: { x: 320, y: 50 } },
  { id: '4', type: 'oneRightSource', data: { label: 'Участники лотереи VRF' }, position: { x: 0, y: 150 } },
  { id: '5', type: 'doubleLeft', data: { label: 'Держатели токена DBE' }, position: { x: 400, y: 150 } },
  { id: '6', type: 'doubleTop', data: { label: 'DBE резерв' }, position: { x: 290, y: 230 } },
  { id: '7', type: 'customSecond', data: { label: 'Лотерея VRF' }, position: { x: 200, y: 300 } },
  { id: '8', type: 'oneTopTarget', data: { label: '70% призовые' }, position: { x: 100, y: 380 } },
  { id: '9', type: 'oneTopTarget', data: { label: '10% продвижение проекта, команда' }, position: { x: 320, y: 380 } },
];

export default function Tokenomic() {
  let isMobile = false
  if (window.innerWidth < 700) {
    isMobile = true
  }

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
      <div className={"md:w-[570px] md:h-[500px] relative w-[300px] h-[300px]"}>
        <ReactFlow defaultViewport={{ x: 0, y: 0, zoom: isMobile ? 0.52 : 1 }} nodeTypes={nodeTypes} nodes={nodes} edges={edges} zoomOnScroll={false} zoomOnPinch={false} panOnDrag={true} panOnScroll={false} zoomActivationKeyCode={null} nodesDraggable={true} />
        <div className={'absolute bottom-[0] h-[20px] w-full bg-black'} ></div>
      </div>
    </div>
  )
}