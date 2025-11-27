'use strict';

var React = require('react');

function BankCard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M22,9H2c-.6,0-1-.4-1-1v11c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2v-11c0,.6-.4,1-1,1ZM18,17h-4.5c-.6,0-1-.4-1-1s.4-1,1-1h4.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M21,3H3c-1.1,0-2,.9-2,2v3c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-3c0-1.1-.9-2-2-2Z"/>   </g>   <path d="M22,5v8"/>   <path d="M2,5v8"/>' : '<path d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"/><path d="M4 16H44"/><path d="M27 32H36"/><path d="M44 10V26"/><path d="M4 10V26"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
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

module.exports = BankCard;
