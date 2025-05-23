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
  height = '1500px',
}) => {
  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      height={height}
      style={{ border: 'none' }}
      allowFullScreen
    />
  );
};

export default GeckoTerminalChart;