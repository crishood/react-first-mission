import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <Title theTitle='La leyenda'/>

export const Title = (props) => {
    return (

        <h1>props.theTitle</h1>

    );
  };