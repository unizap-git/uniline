'use strict';

var React = require('react');

function Hotel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,2h20"/>   <path d="M2,22h20"/>   <g>     <path d="M14.2,15c-.4-.6-1.3-1-2.2-1s-1.7.4-2.2,1h4.3Z"/>     <path d="M19,1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h5c-.6,0-1-.4-1-1v-5c-.4,0-.9-.2-1.1-.5-.3-.3-.4-.7-.3-1.2.4-1.9,2.2-3.3,4.4-3.3s4.1,1.4,4.4,3.3c0,.4,0,.8-.3,1.2-.3.3-.7.5-1.1.5v5c0,.6-.4,1-1,1h5c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM8.5,10h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM8.5,7h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM12.5,10h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM12.5,7h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM16.5,10h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM16.5,7h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <rect x="11" y="17" width="2" height="4"/>   </g>' : '<path d="M4 4H44"/><rect x="8" y="4" width="32" height="40" rx="2"/><path d="M20 32H28V44H20V32Z"/><path d="M15 12L17 12"/><path d="M15 18L17 18"/><path d="M23 12L25 12"/><path d="M23 18L25 18"/><path d="M31 12L33 12"/><path d="M31 18L33 18"/><path d="M4 44H44"/><path d="M28 32H30C30.5523 32 31.0098 31.548 30.9044 31.0058C30.3517 28.1653 27.4709 26 24 26C20.5291 26 17.6483 28.1653 17.0956 31.0058C16.9902 31.548 17.4477 32 18 32H20"/>';

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

module.exports = Hotel;
