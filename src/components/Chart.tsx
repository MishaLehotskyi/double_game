'use client';

import React from 'react';

interface GeckoTerminalChartProps {
  src: string;
  title?: string;
  height?: string;
}

const GeckoTerminalChart: React.FC<GeckoTerminalChartProps> = ({
  src,
  title = 'GeckoTerminal Chart',
}) => {
  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      height="100%"
      style={{ border: 'none', overflowY: 'scroll', height: 'calc(100vh - 60px)' }}
      allowFullScreen
    />
  );
};

export default GeckoTerminalChart;