'use strict';

var React = require('react');

function TypeDrive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,20H4.5c-.6,0-1-.4-1-1s.4-1,1-1h15c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <g>     <circle cx="7.5" cy="10.5" r="1"/>     <circle cx="16.5" cy="10.5" r="1"/>     <path d="M10.3,11.5h3.4c-.1-.3-.2-.6-.2-1s0-.7.2-1h-3.4c.1.3.2.6.2,1s0,.7-.2,1Z"/>     <polygon points="8.4 17 7.4 18 16.3 18 15.1 17 8.4 17"/>     <path d="M21,4H3c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h2c-.4,0-.8-.2-.9-.6s0-.8.2-1.1l2.7-2.7c.4-.4.9-.6,1.4-.6h6.7c.5,0,.9.2,1.3.5l3.2,2.8c.3.3.4.7.3,1.1-.1.4-.5.7-.9.7h2c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM16.5,13.5H7.5c-1.7,0-3-1.3-3-3s1.3-3,3-3h9c1.7,0,3,1.3,3,3s-1.3,3-3,3Z"/>   </g>' : '<path d="M4 12C4 10.8954 4.89543 10 6 10H42C43.1046 10 44 10.8954 44 12V36C44 37.1046 43.1046 38 42 38H6C4.89543 38 4 37.1046 4 36V12Z"/><path d="M15.4142 32.5858C15.7893 32.2107 16.298 32 16.8284 32H30.2602C30.7376 32 31.1992 32.1708 31.5617 32.4815L38 38H10L15.4142 32.5858Z"/><path d="M39 38H9"/><circle cx="15" cy="21" r="4"/><circle cx="33" cy="21" r="4"/><path d="M15 25L33 25"/><path d="M15 17L33 17"/>';

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

module.exports = TypeDrive;
