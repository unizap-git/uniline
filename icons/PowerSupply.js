'use strict';

var React = require('react');

function PowerSupply(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,18v4"/>   <path d="M20.9,12.3l-3.3-9.3c-.2-.6-.8-1-1.4-1H7.9c-.6,0-1.2.4-1.4,1l-3.3,9.3c0,.3-.1.5,0,.8l.9,4.7c.1.7.8,1.2,1.5,1.2h13.2c.7,0,1.3-.5,1.5-1.2l.9-4.7c0-.3,0-.5,0-.8ZM10.2,15.2c-.2,0-.3.1-.5.1-.3,0-.7-.2-.9-.5l-1.5-2.6c-.3-.5-.1-1.1.4-1.4.5-.3,1.1-.1,1.4.4l1.5,2.6c.3.5.1,1.1-.4,1.4ZM13,9c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM16.6,12.2l-1.5,2.6c-.2.3-.5.5-.9.5s-.3,0-.5-.1c-.5-.3-.6-.9-.4-1.4l1.5-2.6c.3-.5.9-.6,1.4-.4.5.3.6.9.4,1.4Z"/>' : '<path d="M32.2965 6H15.7035C15.2815 6 14.9049 6.26493 14.7623 6.66214L8.09221 25.2431C8.03184 25.4113 8.01763 25.5926 8.05107 25.7681L9.84516 35.1871C9.935 35.6588 10.3474 36 10.8275 36H37.1725C37.6526 36 38.065 35.6588 38.1548 35.1871L39.9489 25.7681C39.9824 25.5926 39.9682 25.4113 39.9078 25.2431L33.2377 6.66214C33.0951 6.26493 32.7185 6 32.2965 6Z"/><path d="M24 36V44"/><path d="M24 12V18"/><path d="M16.5 23.4019L19.5 28.598"/><path d="M31.5 23.4019L28.5 28.598"/>';

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

module.exports = PowerSupply;
