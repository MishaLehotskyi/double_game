import React, { useState } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const ClickableTooltipInfo = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = () => {
      setOpen(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      title="Переходите по ссылке (силка будет когда токен залистенным) покупаете 100 токенов DBE после чего вы автоматически появляетесь в строке участников и получаете свой номер Билета. Ваш номер билета указан напротив вашего адреса кошелька."
      disableFocusListener
      disableHoverListener
      disableTouchListener
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: '14px',
          },
        },
      }}
    >
      <IconButton onClick={handleClick}>
        <InfoIcon sx={{ color: 'white' }} />
      </IconButton>
    </Tooltip>
  );
};

export default ClickableTooltipInfo;