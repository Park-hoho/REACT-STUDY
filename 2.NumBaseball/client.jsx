import React from "react";
import ReactDom from 'react-dom';
// const React = require('react');
// const ReactDom = require('react-dom');

import NumBaseball from './TicTacToe';
// const NumBaseball = require('./NumBaseball'); // WordRelay 불러옴

ReactDom.render(<NumBaseball />, document.querySelector('#root'));