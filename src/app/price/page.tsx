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
    <GeckoTerminalChart src="https://www.geckoterminal.com/bsc/pools/0x26cb8a2d69be6d305dd339a31b1b0ff19c78ce69?embed=1" />
  )
}