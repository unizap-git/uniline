'use strict';

var React = require('react');

function Consume(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4,3h16"/>   <path d="M21,5H3c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM14.4,11.4h.7c.6,0,1,.4,1,1s-.4,1-1,1h-.7c-.4,1.5-1.6,2.7-3.2,3l1.5,1.5c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.1-3.1c-.3-.3-.4-.7-.2-1.1.2-.4.5-.6.9-.6h1.5c.8,0,1.5-.4,1.8-1.1h-3.4c-.6,0-1-.4-1-1s.4-1,1-1h3.4c-.4-.6-1-1.1-1.8-1.1h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h6.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.1c.2.3.4.7.4,1.1Z"/>' : '<path d="M5.9,14.9c0-1,.8-1.8,1.8-1.8h32.6c1,0,1.8.8,1.8,1.8v23.5c0,1-.8,1.8-1.8,1.8H7.7c-1,0-1.8-.8-1.8-1.8V14.9Z"/>   <path d="M9.5,7.7h29"/>   <path d="M29.4,19.2h-10.8M29.4,24.7h-10.8M24,35.3l-5.4-5.4h2.6c2.9,0,5.4-2.4,5.4-5.4s-2.4-5.4-5.4-5.4"/>';

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

module.exports = Consume;
