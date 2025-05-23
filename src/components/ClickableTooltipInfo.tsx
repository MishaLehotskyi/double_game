import React, { useState } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const ClickableTooltipInfo = ({ info }: { info: string }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      title={info}
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