'use client'
import GeckoTerminalChart from "@/components/Chart";
import React, {useEffect} from "react";

export default function Price() {
  useEffect(() => {
    if (!document.getElementById('portal-root')) {
      const portal = document.createElement('div');
      portal.id = 'portal-root';
      document.body.appendChild(portal);
    }
  }, []);

  return (
    <GeckoTerminalChart src="https://www.geckoterminal.com/uk/bsc/pools/0x4f47ac9f39a0f263d194b3480ea8eab63538a5a4?embed=1" />
  )
}