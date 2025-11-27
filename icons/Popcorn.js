'use strict';

var React = require('react');

function Popcorn(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.3,7.9c-.2-.2-.5-.4-.8-.4H3.5c-.3,0-.6.1-.8.4-.2.2-.3.5-.2.8l2.7,11.9c.2.9.3,1.5.9,1.9.5.4,1.1.4,2.1.4h1.4c-.5,0-1-.4-1-1l-.5-13.5c0-.6.4-1,1-1,.6,0,1,.4,1,1l.5,13.5c0,.6-.4,1-1,1,0,0,0,0,0,0h4s0,0,0,0c-.6,0-1-.5-1-1l.5-13.5c0-.6.5-1,1-1,.6,0,1,.5,1,1l-.5,13.5c0,.5-.5,1-1,1h1.4c.9,0,1.5,0,2.1-.4.6-.4.7-1.1.9-1.9l2.7-11.9c0-.3,0-.6-.2-.8Z"/>   <path d="M15.5,22H7.5"/>   <path d="M15.5,8.5H7.5"/>   <path d="M5.5,8.5s-.5-1.5.2-2.3,2.3-.5,2.3-.5c0,0,0-1.5,1-2s2.5.2,2.5.2c0,0,1-1.7,2.5-1.2,1.5.4,1.5,2.3,1.5,2.3,0,0,1.2,0,2,1,.8,1,0,2.5,0,2.5"/>' : '<path d="M33.6961 40.8677L39 17H7L12.3039 40.8677C12.6376 42.3694 12.8045 43.1202 13.3529 43.5601C13.9013 44 14.6704 44 16.2087 44H29.7913C31.3296 44 32.0987 44 32.6471 43.5601C33.1955 43.1202 33.3624 42.3694 33.6961 40.8677Z"/><path d="M27 44L28 17"/><path d="M19 44L18 17"/><path d="M31 44H15"/><path d="M31 17H15"/><path d="M11.0004 16.9999C11.0004 16.9999 10.0004 13.9999 11.5004 12.4999C13.0004 10.9999 16.0004 11.4999 16.0004 11.4999C16.0004 11.4999 16.0004 8.4999 18.0004 7.4999C20.0004 6.4999 23.0004 7.99988 23.0004 7.99988C23.0004 7.99988 25.0004 4.64271 28.0004 5.49992C31.0004 6.35713 31.0004 9.99994 31.0004 9.99994C31.0004 9.99994 33.5004 9.99998 35.0004 11.9999C36.5004 13.9999 35.0004 16.9999 35.0004 16.9999"/>';

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

module.exports = Popcorn;
