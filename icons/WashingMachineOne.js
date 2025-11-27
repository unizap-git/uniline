'use strict';

var React = require('react');

function WashingMachineOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,23H5c-1.1,0-2-.9-2-2V3c0-1.1.9-2,2-2h14c1.1,0,2,.9,2,2v18c0,1.1-.9,2-2,2ZM5,3h0v18h14V3H5Z"/>   <path d="M19,1H5c-1.1,0-2,.9-2,2v3c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-3c0-1.1-.9-2-2-2ZM7,5.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM10,5.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <circle cx="12" cy="14.5" r="3.5" stroke-miterlimit="2"/>' : '<rect x="8" y="4" width="32" height="40" rx="2"/><path d="M8 12C8 13.1046 8.89543 14 10 14H38C39.1046 14 40 13.1046 40 12V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V12Z"/><circle cx="14" cy="9" r="2"/><circle cx="20" cy="9" r="2"/><circle cx="24" cy="29" r="7"/>';

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

module.exports = WashingMachineOne;
