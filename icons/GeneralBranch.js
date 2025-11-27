'use strict';

var React = require('react');

function GeneralBranch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7.5,2.5v2" stroke-miterlimit="2"/>   <path d="M16.5,2.5v2" stroke-miterlimit="2"/>   <g>     <path d="M20,3.5H4c-1.1,0-2,.9-2,2v3c0-.6.4-1,1-1h18c.6,0,1,.4,1,1v-3c0-1.1-.9-2-2-2Z"/>     <path d="M21,9.5H3c-.6,0-1-.4-1-1v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-12c0,.6-.4,1-1,1ZM15,16h-2v2c0,.6-.4,1-1,1s-1-.4-1-1v-2h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-2c0-.6.4-1,1-1s1,.4,1,1v2h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   </g>   <path d="M3,5.5v6" stroke-miterlimit="2"/>   <path d="M21,5.5v6" stroke-miterlimit="2"/>' : '<path d="M40.0001 9H8C6.89543 9 6 9.89543 6 11L6.00003 41C6.00003 42.1046 6.89546 43 8.00003 43H40.0001C41.1047 43 42.0001 42.1046 42.0001 41V11C42.0001 9.89543 41.1047 9 40.0001 9Z"/><path d="M15 5V9"/><path d="M33 5V9"/><path d="M6 17H42"/><path d="M18 30H30"/><path d="M24 24V36"/><path d="M6 11L6 23"/><path d="M42 11V23"/>';

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

module.exports = GeneralBranch;
