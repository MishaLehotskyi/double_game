'use client';

import { Handle, Position } from 'reactflow';

export default function CustomNode({ data }: any) {
  return (
    <div className="bg-white border rounded p-2 shadow-md w-40 text-center">
      <div className="text-xs text-black">{data.label}</div>

      <Handle type="target" position={Position.Left} id="input-1" />
      <Handle type="target" position={Position.Top} id="input-2" style={{ left: 10 }} />
      <Handle type="source" position={Position.Top} id="input-3" />
      <Handle type="target" position={Position.Right} id="input-4" style={{ top: 10 }} />
      <Handle type="source" position={Position.Right} id="input-5" style={{ top: 25 }} />
      <Handle type="source" position={Position.Bottom} id="input-6" style={{ left: 140 }} />
      <Handle type="target" position={Position.Bottom} id="input-7" style={{ left: 120 }} />
      <Handle type="target" position={Position.Bottom} id="input-8" style={{ left: 50 }} />
      <Handle type="source" position={Position.Bottom} id="input-9" style={{ left: 20 }} />
    </div>
  );
}