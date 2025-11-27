'use strict';

var React = require('react');

function Worker(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16,8c0,2.2-1.8,4-4,4s-4-1.8-4-4"/>   <path d="M12,4c-2.2,0-4,1.8-4,4h8c0-2.2-1.8-4-4-4Z"/>   <path d="M6,8h12"/>   <path d="M12,2v2"/>   <path d="M12,12.5c-5.2,0-9.5,4-9.5,9s.4,1,1,1h17c.6,0,1-.4,1-1,0-5-4.3-9-9.5-9ZM10,19c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM16,19c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16"/><path d="M24 8C19.5817 8 16 11.5817 16 16H32C32 11.5817 28.4183 8 24 8Z"/><path d="M12 16H36"/><path d="M24 4V8"/><path d="M24 27C14.6112 27 7 34.1634 7 43H41C41 34.1634 33.3888 27 24 27Z"/><path d="M18 34V38"/><path d="M30 34V38"/>';

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

module.exports = Worker;
