'use strict';

var React = require('react');

function Endocrine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.6,6.9c-.2-.3-.5-.4-.9-.4-.3,0-.6.2-.8.5-.8,1.4-1.4,2.1-1.8,2.5,0,0,0-.2,0-.3,0-1.1,0-2.7-.8-4.1-.9-1.7-2.4-3.1-4.6-4.1-.3-.1-.7-.1-1,.1-.3.2-.4.6-.4.9.3,2.5.1,3.8-.1,4.3,0,.2-.7.9-1.2,1.3-1.7,1.6-4.3,4.1-4,7.8.5,4.7,3.6,7.4,8.5,7.4s9.4,0,9.4-7.9-.8-6.1-2.4-8.2ZM13.4,19.1c-.7.6-1.5.9-2.3.9s-.7,0-1-.1c-1.1-.3-2.3-1.2-2.6-2.9-.3-1.8.6-3.8,2.7-5.7.3-.3.7-.3,1-.2.3.1.6.4.6.8.1,1.1.4,1.9.9,2.4,1.1,1.2,1.6,2.2,1.6,3.2,0,.6-.3,1.2-.8,1.7Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1466 44C31.2933 44 40 43.0106 40 30.1802C40 23.9643 38.5085 18.9042 35.5256 15C32.7392 19.6667 30.674 22 29.3299 22C27.3139 22 29.3299 15.9107 26.9987 11.2914C25.4445 8.21194 22.6879 5.78146 18.7289 4C19.2794 8.43691 19.1603 11.6554 18.3715 13.6554C17.1882 16.6554 7.15114 21.91 8.05783 30.9349C8.96453 39.9599 15 44 23.1466 44Z"/><path d="M21.7076 24.0083C17.9028 27.4666 16.2811 30.6674 16.8427 33.6109C17.3261 36.1448 19.2487 37.3764 20.6969 37.7735C21.8196 38.0814 23.7635 38.2536 25.5004 36.7067C27.3402 35.0682 26.6071 32.7388 23.9392 29.8571C22.8138 28.6415 22.0699 26.6919 21.7076 24.0083Z"/>';

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

module.exports = Endocrine;
