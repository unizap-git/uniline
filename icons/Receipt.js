'use strict';

var React = require('react');

function Receipt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5.6,2.1c.4-.2.8,0,1.1.2l1.3,1.3,1.3-1.3c.4-.4,1-.4,1.4,0l1.3,1.3,1.3-1.3c.4-.4,1-.4,1.4,0l1.3,1.3,1.3-1.3c.4-.4,1-.4,1.4,0,.2.2.3.4.3.7v18c0,.6-.4,1-1,1-.3,0-.5-.1-.7-.3l-1.3-1.3-1.3,1.3c-.4.4-1,.4-1.4,0l-1.3-1.3-1.3,1.3c-.4.4-1,.4-1.4,0l-1.3-1.3-1.3,1.3c-.4.4-1,.4-1.4,0-.2-.2-.3-.4-.3-.7V3c0-.4.2-.8.6-.9ZM9,7c-.6,0-1,.4-1,1s.4,1,1,1h6c.6,0,1-.4,1-1s-.4-1-1-1h-6ZM9,11c-.6,0-1,.4-1,1s.4,1,1,1h6c.6,0,1-.4,1-1s-.4-1-1-1h-6ZM9,15c-.6,0-1,.4-1,1s.4,1,1,1h6c.6,0,1-.4,1-1s-.4-1-1-1h-6Z" fill-rule="evenodd"/>' : '<path d="M18,16h12M18,24h12M18,32h12M12,6v36l4-4,4,4,4-4,4,4,4-4,4,4V6l-4,4-4-4-4,4-4-4-4,4-4-4Z"/>';

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

module.exports = Receipt;
