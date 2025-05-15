'use client';

import { Handle, Position } from 'reactflow';

export default function DoubleLeft({ data }: any) {
  return (
    <div className="bg-white border rounded p-2 shadow-md w-40 text-center">
      <div className="text-xs text-black">{data.label}</div>

      <Handle type="source" position={Position.Left} id="input-1" style={{ top: 10 }} />
      <Handle type="target" position={Position.Left} id="input-2" style={{ top: 25 }} />
    </div>
  );
}