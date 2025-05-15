'use client';

import { Handle, Position } from 'reactflow';

export default function OneRightSource({ data }: any) {
  return (
    <div className="bg-white border rounded p-2 shadow-md w-40 text-center">
      <div className="text-xs text-black">{data.label}</div>

      <Handle type="source" position={Position.Right} id="input-1" />
    </div>
  );
}