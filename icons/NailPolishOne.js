'use strict';

var React = require('react');

function NailPolishOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="7.5" y="1" width="9" height="10" rx="1" ry="1"/>   <g>     <polygon points="12.2 17 11.8 17 11.7 17.5 12.3 17.5 12.2 17"/>     <path d="M19,9h-7c.6,0,1,.4,1,.9v5.1c.5,0,.9.3,1,.8l.5,2.5c0,.3,0,.6-.2.8-.2.2-.5.4-.8.4h-3c-.3,0-.6-.1-.8-.4s-.3-.5-.2-.8l.5-2.5c0-.5.5-.8,1-.8v-5.1c0-.5.4-.9,1-.9h-7c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-10c0-1.1-.9-2-2-2Z"/>   </g>   <path d="M15.5,11h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="8" y="20" width="32" height="24" rx="2"/><rect x="17" y="4" width="14" height="16"/><path d="M22 32H26L27 37H21L22 32Z"/><path d="M24 20V32"/><path d="M31 20H17"/>';

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

module.exports = NailPolishOne;
