'use strict';

var React = require('react');

function ModifyTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,5.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M10,20.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <g>     <path d="M7,19.5V4.5c0-.6.4-1,1-1H3c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h5c-.6,0-1-.4-1-1Z"/>     <path d="M21,3.5h-13c.6,0,1,.4,1,1v15c0,.6-.4,1-1,1h13c1.1,0,2-.9,2-2V5.5c0-1.1-.9-2-2-2ZM10.8,7.8c.4-.4,1-.4,1.4,0l1,1c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1-1c-.4-.4-.4-1,0-1.4ZM19.2,16.2c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1-1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1,1c.4.4.4,1,0,1.4ZM19.2,9.2l-7,7c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l7-7c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>   </g>' : '<rect x="4" y="9" width="40" height="30" rx="2"/><path d="M16 9V39"/><path d="M20 9H12"/><path d="M20 39H12"/><path d="M23 31L37 17"/><path d="M25 19L23 17"/><path d="M37 31L35 29"/>';

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

module.exports = ModifyTwo;
