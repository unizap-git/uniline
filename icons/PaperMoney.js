'use strict';

var React = require('react');

function PaperMoney(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2.5H4.5c-1.9,0-3.5,1.6-3.5,3.5v12c0,1.9,1.6,3.5,3.5,3.5h15c1.9,0,3.5-1.6,3.5-3.5V6c0-1.9-1.6-3.5-3.5-3.5ZM14.6,9.6h.8c.6,0,1,.4,1,1s-.4,1-1,1h-.8c-.4,1.7-1.8,3.1-3.6,3.4l1.7,1.7c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.4-3.4c-.3-.3-.4-.7-.2-1.1s.5-.6.9-.6h1.7c1,0,1.8-.6,2.2-1.4h-3.9c-.6,0-1-.4-1-1s.4-1,1-1h3.9c-.4-.8-1.2-1.4-2.2-1.4h-1.7c-.6,0-1-.4-1-1s.4-1,1-1h6.8c.6,0,1,.4,1,1s-.4,1-1,1h-1.4c.3.4.5.9.6,1.4Z"/>' : '<path d="M37.6,8.6H10.4c-2.5,0-4.5,2-4.5,4.5v21.8c0,2.5,2,4.5,4.5,4.5h27.3c2.5,0,4.5-2,4.5-4.5V13.1c0-2.5-2-4.5-4.5-4.5Z"/>   <path d="M30.8,14.3h-13.5M30.8,21.1h-13.5M24,34.4l-6.7-6.7h3.2c3.7,0,6.7-3,6.7-6.7s-3-6.7-6.7-6.7"/>';

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

module.exports = PaperMoney;
