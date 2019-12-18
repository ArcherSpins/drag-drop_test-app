import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Draggable } from 'react-beautiful-dnd';

import { CardChannel, DeleteButton, TransparentButton } from './styled';
import { green } from '../../variables';

const AntSwitch = withStyles(theme => ({
  root: {
    width: 48,
    height: 20,
    padding: 0,
    display: 'flex',
    paddingBottom: 2,
  },
  switchBase: {
    padding: 3,
    color: theme.palette.grey[100],
    '&$checked': {
      transform: 'translateX(28px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: green,
        borderColor: 'green',
      },
    },
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: '0px 0px 4px 1px #737373',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#E4E4E4',
  },
  checked: {},
}))(Switch);

export default ({
  id,
  index,
  title,
  url
}) => {
  const [selected, toggleSwitcher] = React.useState(false);
  
  return (
    <Draggable
      draggableId={String(id)}
      index={Number(index)}
    >
      {
        (provider, shot) => (
          <CardChannel
            style={{ outline: 'none' }}
            {...provider.dragHandleProps}
            {...provider.draggableProps}
            ref={provider.innerRef}
          >
            <div
              id={id}
              className="title-channel d-flex justify-content-between"
            >
              <div className="d-flex align-items-center">
                {
                  url && <img className="image-card-channel" src={url} alt={title} />
                }
                <p>{title}</p>
              </div>
              <div className="d-flex align-items-center">
                <AntSwitch
                  checked={selected}
                  onChange={() => toggleSwitcher(!selected)}
                  value="checkedC"
                />
                <DeleteButton style={{ margin: '0 15px' }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.90076 8.54076L4.56306 6.20306L2.27911 8.48702L0.545987 6.7539L2.82994 4.46994L0.505682 2.14568L2.14476 0.506611L4.46902 2.83087L6.75297 0.546916L8.48609 2.28004L6.20213 4.56399L8.53983 6.90169L6.90076 8.54076Z" fill="#FF574F"/>
                  </svg>
                </DeleteButton>
                <TransparentButton>
                  <svg width="5" height="16" viewBox="0 0 5 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.82669" cy="1.90536" r="1.84133" fill="#C4C4C4"/>
                    <circle cx="2.82669" cy="7.74472" r="1.84133" fill="#C4C4C4"/>
                    <circle cx="2.82669" cy="13.5841" r="1.84133" fill="#C4C4C4"/>
                  </svg>
                </TransparentButton>
              </div>
            </div>
          </CardChannel>
        )
      }
    </Draggable>
  );
}
