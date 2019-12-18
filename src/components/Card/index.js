import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Card } from './styled';


export default ({
  icon,
  content,
  bgColor,
  path,
}) => (
  <Link to={path || '/channels'}>
    <Card>
      <Header bgColor={bgColor}>
        <img src={icon} alt={title} />
      </Header>
      <p>{content}</p>
    </Card>
  </Link>
);
