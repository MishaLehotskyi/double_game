'use client';

import { Handle, Position } from 'reactflow';

export default function CustomNodeSecond({ data }: any) {
  return (
    <div className="bg-white border rounded p-2 shadow-md w-40 text-center">
      <div className="text-xs text-black">{data.label}</div>

      <Handle type="target" position={Position.Top} id="input-1" style={{ left: 10 }} />
      <Handle type="source" position={Position.Top} id="input-2" style={{ left: 30 }} />
      <Handle type="source" position={Position.Bottom} id="input-3" style={{ left: 20 }} />
      <Handle type="source" position={Position.Bottom} id="input-4" style={{ left: 120 }} />
    </div>
  );
}