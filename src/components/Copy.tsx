'use client'
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import React, {useState} from "react";

export default function Copy({ text, white }: { text: string, white?: boolean }) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (value: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }).catch(() => fallbackCopyText(value));
    } else {
      fallbackCopyText(value);
    }
  };

  const fallbackCopyText = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (err) {
      console.error('Fallback: Copy failed', err);
    }

    document.body.removeChild(textarea);
  };

  return (
    <Tooltip title={copied ? 'Copied!' : 'Copy'}>
      <IconButton
        onClick={() => handleCopy(text)}
        size="small"
        sx={{color: white ? '#fff' : '#6b7280'}}
      >
        <ContentCopyIcon fontSize="small"/>
      </IconButton>
    </Tooltip>
  )
}