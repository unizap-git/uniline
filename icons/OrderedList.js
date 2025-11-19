'use strict';

var React = require('react');

function OrderedList(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,21h-5c-.4,0-.8-.3-.9-.7-.1-.4,0-.9.3-1.1l3.3-2.5c.2-.1.3-.4.3-.7,0-.6-.4-1-1-1h0c-.3,0-.5.1-.7.3-.2.2-.3.4-.3.7,0,.6-.4,1-1,1h0c-.6,0-1-.4-1-1,0-.8.3-1.6.9-2.1.6-.6,1.3-.9,2.1-.9h0c.8,0,1.6.3,2.1.9.6.6.9,1.3.9,2.1,0,.9-.4,1.7-1,2.3l-1,.7h2c.6,0,1,.4,1,1s-.4,1-1,1ZM20,19h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1ZM20,13h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1ZM8,11h-4c-.6,0-1-.4-1-1s.4-1,1-1h1v-3.4l-.6.3c-.5.2-1.1,0-1.3-.4-.2-.5,0-1.1.4-1.3l2-1c.3-.2.7-.1,1,0,.3.2.5.5.5.9v5h1c.6,0,1,.4,1,1s-.4,1-1,1ZM20,7h-8c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"/>';

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

module.exports = OrderedList;
