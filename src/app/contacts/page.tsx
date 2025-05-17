'use client';

import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const contacts = [
  {
    label: 'Email',
    icon: EmailIcon,
    value: 'doubellgame@gmail.com',
    href: 'https://mailto:doubellgame@gmail.com',
  },
  {
    label: 'Twitter',
    icon: TwitterIcon,
    value: '@DoubelGame',
    href: 'https://x.com/DoubelGame',
  },
  {
    label: 'Telegram',
    icon: TelegramIcon,
    value: '@DoubleGameProject',
    href: 'https://t.me/DoubleGameProject',
  },
  {
    label: 'Telegram Bot',
    icon: SmartToyIcon,
    value: '@DobelGameBot',
    href: 'https://t.me/DobelGameBot',
  },
];

export default function ContactsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (value: string, index: number) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(value).then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
      }).catch(() => fallbackCopyText(value, index));
    } else {
      fallbackCopyText(value, index);
    }
  };

  const fallbackCopyText = (text: string, index: number) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
      }
    } catch (err) {
      console.error('Fallback: Copy failed', err);
    }

    document.body.removeChild(textarea);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contacts</h1>
      <ul className="space-y-4">
        {contacts.map(({ label, icon: Icon, value, href }, index) => (
          <li
            key={label}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Icon sx={{ color: '#9333ea', fontSize: 28 }} />
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-purple-600 transition-colors"
              >
                {value}
              </a>
            </div>
            <Tooltip title={copiedIndex === index ? 'Copied!' : 'Copy'}>
              <IconButton
                onClick={() => handleCopy(value, index)}
                size="small"
                sx={{ color: '#6b7280' }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}
