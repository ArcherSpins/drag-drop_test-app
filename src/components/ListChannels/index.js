import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import CardChannel from '../CardChannel';
import './style.css';

export default ({
  children,
  channels,
  className,
  index,
}) => (
  <Droppable droppableId="droppable" index={index}>
    {(provider, snapshot) => (
      <div
        ref={provider.innerRef}
        {...provider.droppableProps}
        className={`list-channels ${className || ''}`}
      >
        {channels.map((channel, i) => (
          <CardChannel {...channel} index={i} key={channel.id || i} />
        ))}
        {provider.placeholder}
      </div>
    )}
  </Droppable>
)
