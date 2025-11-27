'use strict';

var React = require('react');

function Tape(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,5h18"/>   <g>     <path d="M21,4h-4.1c.8,0,1.5.4,1.8,1.2.3.7.2,1.5-.3,2.1l-.8,1c-.4.5-.9.7-1.5.7H8c-.6,0-1.2-.3-1.5-.7l-.8-1c-.5-.6-.6-1.4-.3-2.1.3-.7,1-1.2,1.8-1.2H3c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM7.5,16.5c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3ZM16.5,16.5c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>     <path d="M7.1,6l.8,1h8.1l.8-1H7.1s0,0,0,0Z"/>   </g>' : '<path d="M4 12C4 10.8954 4.89543 10 6 10H10H38H42C43.1046 10 44 10.8954 44 12V36C44 37.1046 43.1046 38 42 38H6C4.89543 38 4 37.1046 4 36V12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2701 10C12.5744 10 11.6481 11.9777 12.7336 13.2804L14.4003 15.2804C14.7803 15.7364 15.3432 16 15.9367 16H24H32.0633C32.6568 16 33.2197 15.7364 33.5997 15.2804L35.2664 13.2804C36.3519 11.9777 35.4256 10 33.7299 10H14.2701Z"/><path d="M6 10V10H10H38H42"/><path d="M33 31C35.2091 31 37 29.2091 37 27C37 24.7909 35.2091 23 33 23C30.7909 23 29 24.7909 29 27C29 29.2091 30.7909 31 33 31Z"/><path d="M15 31C17.2091 31 19 29.2091 19 27C19 24.7909 17.2091 23 15 23C12.7909 23 11 24.7909 11 27C11 29.2091 12.7909 31 15 31Z"/>';

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

module.exports = Tape;
