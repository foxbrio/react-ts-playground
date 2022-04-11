import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import './Todo.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Todo() {
  return (
    <React.Fragment>
      <Wrapper>
        <Title> TodoApp1 </Title>
      </Wrapper>
    </React.Fragment>
  );
}
