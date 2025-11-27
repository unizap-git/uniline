'use strict';

var React = require('react');

function ExpandRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,4H5.5c-.6,0-1-.4-1-1s.4-1,1-1h12.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M18,22H5.5c-.6,0-1-.4-1-1s.4-1,1-1h12.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <g>     <path d="M8,21V3c0-.6.4-1,1-1h-4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h4.5c-.6,0-1-.4-1-1Z"/>     <path d="M19.5,2h-10.5c.6,0,1,.4,1,1v18c0,.6-.4,1-1,1h10.5c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM16.7,13.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2-2c-.4-.4-.4-1,0-1.4l2-2c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.3,1.3,1.3,1.3Z"/>   </g>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M18 6V42"/><path d="M11 6H36"/><path d="M11 42H36"/><path d="M32 20L28 24L32 28"/>';

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

module.exports = ExpandRight;
