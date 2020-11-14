import React from 'react';
import styled from 'styled-components';

interface HelloInterface {
  text: string;
}

const Heading: any = styled.h2`
  /* ${(props: any)=> props.theme.color.primary && `color: ${props.color}`} */
`;

export const theme = {
  bg: 'red',
  changeBg: (color: string) => theme.bg = color,
}


export const Hello: React.FC<HelloInterface> = ({ text }) => {
  return (
    <Heading style={{ backgroundColor: theme.bg }}>{text}</Heading>
  )
}