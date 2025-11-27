'use strict';

var React = require('react');

function FinancingTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,5v-1.5c0-.8.7-1.5,1.5-1.5h13c.8,0,1.5.7,1.5,1.5v13c0,.8-.7,1.5-1.5,1.5h-1.5" stroke-miterlimit="2"/>   <path d="M17.5,4H3.5c-1.4,0-2.5,1.1-2.5,2.5v14c0,1.4,1.1,2.5,2.5,2.5h14c1.4,0,2.5-1.1,2.5-2.5V6.5c0-1.4-1.1-2.5-2.5-2.5ZM12.9,11h.7c.6,0,1,.4,1,1s-.4,1-1,1h-.7c-.4,1.5-1.6,2.7-3.2,3l1.5,1.5c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.1-3.1c-.3-.3-.4-.7-.2-1.1s.5-.6.9-.6h1.5c.8,0,1.5-.4,1.8-1.1h-3.4c-.6,0-1-.4-1-1s.4-1,1-1h3.4c-.4-.6-1-1.1-1.8-1.1h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h6.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.1c.2.3.4.7.4,1.1Z"/>' : '<path d="M12 9.92704V7C12 5.34315 13.3431 4 15 4H41C42.6569 4 44 5.34315 44 7V33C44 34.6569 42.6569 36 41 36H38.0174"/><rect x="4" y="10" width="34" height="34" rx="3"/><path d="M15 17L21 23L27 17"/><path d="M14 25H28"/><path d="M14 31H28"/><path d="M21 25V36"/>';

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

module.exports = FinancingTwo;
