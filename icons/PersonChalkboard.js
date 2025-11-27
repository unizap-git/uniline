'use strict';

var React = require('react');

function PersonChalkboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16,10c0-.6-.4-1-1-1h-3v2h3c.6,0,1-.4,1-1Z"/>   <path d="M13,15v-2h2c1.7,0,3-1.3,3-3s-1.3-3-3-3h-2.3c.2-.5.3-1,.3-1.5s0-1-.2-1.5c0,0,.2,0,.2,0h7c.6,0,1,.4,1,1v9c0,.6-.4,1-1,1h-2.5l1.9,4.6c.2.5,0,1.1-.5,1.3-.5.2-1.1,0-1.3-.5l-1.8-4.4-1.8,4.4c-.2.4-.6.7-1.1.6.1-.3.2-.6.2-1v-2.6l1-2.4h-1ZM6,5.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5-2.5-1.1-2.5-2.5Z"/>   <path d="M15,11h-4v9c0,.6-.4,1-1,1s-1-.4-1-1v-4h-1v4c0,.6-.4,1-1,1s-1-.4-1-1v-6.7l-1.2,1.8c-.3.5-.9.6-1.4.3-.5-.3-.6-.9-.3-1.4l3-4.5c0-.1.2-.3.4-.3.1,0,.2,0,.4-.1,0,0,0,0,.1,0h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M26.8,8.2h15.8v20.4h-15.8M13.3,19.5l-6.8,10.2M13.3,19.5v11.3M13.3,19.5h6.8M20,19.5h11.3M20,19.5v11.3M13.3,30.8h6.8M13.3,30.8v11.3M20,30.8v11.3M33.6,28.5l5.7,13.6M32.5,28.5l-5.7,13.6M20,9.3c0,1.9-1.5,3.4-3.4,3.4s-3.4-1.5-3.4-3.4,1.5-3.4,3.4-3.4,3.4,1.5,3.4,3.4Z"/>';

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

module.exports = PersonChalkboard;
