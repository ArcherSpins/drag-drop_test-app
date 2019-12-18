import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { ListChannels } from '../components';
import { MyButton } from './styled';
import { primary } from '../variables';
import facebookIcon from '../assets/facebookIcon.svg';
import './style.css';

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    title: `item ${k}`,
    url: facebookIcon,
  }));

const Channels = () => {
  const [columns, setColumns] = useState(getItems(20));

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const dragDrop = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      columns,
      result.source.index,
      result.destination.index
    );

    setColumns(items);
  }

  return (
    <div className="h-100">
      <header className="header">Channels</header>
      <main className="main">
        <div className="main-container pt-100">
          <Container style={{ marginBottom: 250 }} fixed>
            <div className="header-main d-flex justify-content-end">
              <MyButton variant="outlined" color={primary}>
                Добавить канал
              </MyButton>
            </div>
            <div className="mt-20">
              <DragDropContext onDragEnd={dragDrop}>
                <ListChannels channels={columns} id={9} index={2} />
              </DragDropContext>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Channels;
