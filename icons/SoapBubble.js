'use strict';

var React = require('react');

function SoapBubble(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11,7c-5,0-9,3.6-9,8s4,8,9,8,9-3.6,9-8S16,7,11,7ZM15.7,15.5c0,0-.2,0-.2,0-.4,0-.9-.3-1-.8-.3-1.3-1.1-1.7-1.7-1.8-.5,0-.9-.6-.9-1.1,0-.5.6-.9,1.1-.9.8,0,2.7.6,3.3,3.2.1.5-.2,1.1-.7,1.2Z"/>   <circle cx="4" cy="4" r="2"/>   <circle cx="20.5" cy="6.5" r="1.5"/>' : '<ellipse cx="22" cy="30" rx="16" ry="14"/><path d="M26 24C27.3333 24.1667 30 25 31 29"/><circle cx="8" cy="8" r="4"/><circle cx="41" cy="13" r="3"/>';

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

module.exports = SoapBubble;
