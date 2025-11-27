'use strict';

var React = require('react');

function Benz(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23,12c0-5-3.3-9.2-7.8-10.5-2.1-.7-4.4-.7-6.4,0C4.3,2.8,1,7,1,12c0,2.6.3,3.4.8,4.3.2.4.4.8.6,1.2.2.2.3.5.5.7,2,2.9,5.3,4.8,9.1,4.8s5.9-1.3,7.9-3.3h0c.7-.7,1.2-1.3,1.7-2.1.5-.9.8-1.8,1-2.8h0c.2-.9.4-1.8.4-2.8ZM4.7,17.4c-.2-.3-.4-.6-.6-1-.2-.3-.3-.5-.4-.8l7.3-4.2V3.1c.7,0,1.3,0,2,0v8.3l7.3,4.2c-.1.3-.3.6-.4.9-.2.3-.4.6-.6.9l-7.3-4.2-7.3,4.2Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M6.67969 34L24.0002 24M24.0002 4V24V4ZM41.3207 34L24.0002 24L41.3207 34Z"/><path d="M17.9998 4.9156C19.8939 4.32071 21.9094 4 23.9998 4C26.0902 4 28.1057 4.32071 29.9998 4.9156M4.62988 29C5.08644 30.7739 5.78024 32.4525 6.67544 34C7.52003 35.46 8.54389 36.8034 9.71693 38M43.3697 29C42.9131 30.7739 42.2193 32.4525 41.3242 34C40.4796 35.46 39.4557 36.8034 38.2827 38"/>';

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

module.exports = Benz;
