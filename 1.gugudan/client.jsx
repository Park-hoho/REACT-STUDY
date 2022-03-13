const React = require('react');
const ReactDom = require('react-dom');

const GuGudan = require('./gugudan'); // WordRelay 불러옴

ReactDom.render(<GuGudan />, document.querySelector('#root'));