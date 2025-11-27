'use strict';

var React = require('react');

function Margin(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M6,21V3c0-.6.4-1,1-1h-2.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h2.5c-.6,0-1-.4-1-1Z"/>     <path d="M16,21V3c0-.6.4-1,1-1H7c.6,0,1,.4,1,1v18c0,.6-.4,1-1,1h10c-.6,0-1-.4-1-1Z"/>     <path d="M19.5,2h-2.5c.6,0,1,.4,1,1v18c0,.6-.4,1-1,1h2.5c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M18.5,22h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M8.5,22h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M8.5,4h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M18,4h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M34 6V42"/><path d="M14 6V42"/><path d="M31 42H37"/><path d="M11 42H17"/><path d="M11 6H17"/><path d="M30 6H36"/>';

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

module.exports = Margin;
