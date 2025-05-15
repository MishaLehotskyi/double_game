'use client';

import { Handle, Position } from 'reactflow';

export default function DoubleTop({ data }: any) {
  return (
    <div className="bg-white border rounded p-2 shadow-md w-40 text-center">
      <div className="text-xs text-black">{data.label}</div>

      <Handle type="source" position={Position.Top} id="input-1" style={{ left: 30 }} />
      <Handle type="target" position={Position.Top} id="input-2" style={{ left: 50 }} />
    </div>
  );
}