'use strict';

var React = require('react');

function Ram(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40.8,18.3c.6,0,1-.4,1-1v-3.6c0-.6-.4-1-1-1H7.2c-.6,0-1,.4-1,1v3.6c0,.6.4,1,1,1s.7.3.7.7-.3.7-.7.7c-.6,0-1,.4-1,1v13.6c0,.6.4,1,1,1h3.7v-3.4c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5v3.4h2.8v-3.4c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5v3.4h2.8v-3.4c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5v3.4h2.8v-3.4c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5v3.4h2.8v-3.4c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5v3.4h3.7c.6,0,1-.4,1-1v-13.6c0-.6-.4-1-1-1s-.7-.3-.7-.7.3-.7.7-.7ZM23.3,24c0,.6-.4,1-1,1h-10c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v5ZM36.7,24c0,.6-.4,1-1,1h-10c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v5Z"/>' : '<line x1="12.3" y1="34.3" x2="12.3" y2="31.3"/>   <line x1="18.2" y1="34.3" x2="18.2" y2="31.3"/>   <line x1="29.8" y1="34.3" x2="29.8" y2="31.3"/>   <line x1="24" y1="34.3" x2="24" y2="31.3"/>   <line x1="35.7" y1="34.3" x2="35.7" y2="31.3"/>   <rect x="12.3" y="19" width="10" height="5"/>   <rect x="25.7" y="19" width="10" height="5"/>   <path d="M39.2,19c0-.9.8-1.7,1.7-1.7v-3.6H7.2v3.6c.9,0,1.7.8,1.7,1.7s-.8,1.7-1.7,1.7v13.6h33.7v-13.6c-.9,0-1.7-.8-1.7-1.7Z"/>';

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

module.exports = Ram;
