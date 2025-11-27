'use strict';

var React = require('react');

function CableCar(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.7,13.7l-2.5-5.5c-.3-.7-1-1.2-1.8-1.2H6.6c-.8,0-1.5.5-1.8,1.2l-2.5,5.5c-.2.5-.2,1.1,0,1.7l2.5,5.5c.3.7,1,1.2,1.8,1.2h10.7c.8,0,1.5-.5,1.8-1.2l2.5-5.5c.2-.5.2-1.1,0-1.7ZM10,16.5c0,.6-.4,1-1,1h-5c-.6,0-1-.4-1-1s.4-1,1-1h4v-3h-3.5c-.6,0-1-.4-1-1s.4-1,1-1h4.5c.6,0,1,.4,1,1v5ZM20,17h-7.5c-.6,0-1-.4-1-1v-4.5c0-.6.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1h-6v2.5h6.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M19,2s-4.7,1.8-8.7,2.2c-4,.4-6.3.3-6.3.3"/>   <path d="M13,4v4l-4.5-3.5"/>   <path d="M4.5,18.8c-.4,0-.7-.2-.9-.6l-1.3-2.8c-.2-.5-.2-1.1,0-1.7l2.1-4.6c.2-.5.8-.7,1.3-.5.5.2.7.8.5,1.3l-2.1,4.6,1.3,2.8c.2.5,0,1.1-.5,1.3-.1,0-.3,0-.4,0Z"/>   <path d="M19.5,18.8c-.1,0-.3,0-.4,0-.5-.2-.7-.8-.5-1.3l1.3-2.8-2.1-4.6c-.2-.5,0-1.1.5-1.3.5-.2,1.1,0,1.3.5l2.1,4.6c.2.5.2,1.1,0,1.7l-1.3,2.8c-.2.4-.5.6-.9.6Z"/>' : '<path d="M13.2797 42C12.4996 42 11.7907 41.5464 11.4637 40.8381L6.38682 29.8381C6.14138 29.3063 6.14138 28.6937 6.38682 28.1619L11.4637 17.1619C11.7907 16.4536 12.4996 16 13.2797 16L34.7203 16C35.5004 16 36.2093 16.4536 36.5363 17.1619L41.6132 28.1619C41.8586 28.6937 41.8586 29.3063 41.6132 29.8381L36.5363 40.8381C36.2093 41.5464 35.5004 42 34.7203 42L13.2797 42Z"/><path d="M9 23L18 23L18 33L8 33"/><path d="M39 23L25 23L25 32L40 32"/><path d="M37.9993 4C37.9993 4 28.5 7.5 20.5641 8.39392C12.6282 9.28784 7.99988 9 7.99988 9"/><path d="M26 8V16L17 9"/><path d="M10.6154 19L6.38682 28.1619C6.14138 28.6937 6.14138 29.3063 6.38682 29.8381L9 35.5"/><path d="M37.3848 19L41.6133 28.1619C41.8588 28.6937 41.8588 29.3063 41.6133 29.8381L39.0002 35.5"/>';

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

module.exports = CableCar;
