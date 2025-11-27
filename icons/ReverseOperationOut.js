'use strict';

var React = require('react');

function ReverseOperationOut(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1.5H3c-.6,0-1,.4-1,1v16c0,.6.4,1,1,1h9c.6,0,1-.4,1-1V2.5c0-.6-.4-1-1-1ZM9.1,11.8c.4.4.3,1,0,1.4-.2.2-.4.2-.7.2s-.6-.1-.8-.3l-1.8-2.1c-.4-.4-.3-1,0-1.4l2-1.9c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4l-1.3,1.2,1.2,1.4Z"/>   <path d="M21,4.5h-9c-.6,0-1,.4-1,1v16c0,.6.4,1,1,1h9c.6,0,1-.4,1-1V5.5c0-.6-.4-1-1-1ZM18.3,14.1l-1.8,2.1c-.2.2-.5.3-.8.3s-.5,0-.7-.2c-.4-.4-.5-1,0-1.4l1.2-1.4-1.3-1.2c-.4-.4-.4-1,0-1.4.4-.4,1-.4,1.4,0l2,1.9c.4.4.4,1,0,1.4Z"/>' : '<rect x="6" y="5" width="18" height="32"/><rect x="24" y="11" width="18" height="32"/><path d="M17 17L13 20.7895L16.6667 25"/><path d="M31 23L35 26.7895L31.3333 31"/>';

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

module.exports = ReverseOperationOut;
