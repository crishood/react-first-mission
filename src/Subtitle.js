import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <Subtitle theSubtitle='Del react dev'/>

export const Subtitle = (props) => {
    return (

        <h2>props.theSubtitle</h2>

    );
  };