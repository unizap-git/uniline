'use strict';

var React = require('react');

function CreditCardPlus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M11 16.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm4.5 2.5v-1.5H14v-2h1.5V14h2v1.5H19v2h-1.5V19h-2Z" clip-rule="evenodd"/>   <path d="M3.987 4A2 2 0 0 0 2 6v9a2 2 0 0 0 2 2h5v-2H4v-5h16V6a2 2 0 0 0-2-2H3.987Z"/>   <path fill-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>' : '<path d="M16.5 15v1.5m0 0V18m0-1.5H15m1.5 0H18M3 9V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3M3 9v6a1 1 0 0 0 1 1h5M3 9h16m0 0v1M6 12h3m12 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = CreditCardPlus;
