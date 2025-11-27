'use strict';

var React = require('react');

function CakeThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,18h18"/>   <path d="M3,21h18"/>   <g>     <path d="M19.5,11.5h-2v3c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1v-3h-1v1.5c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1v-1.5h-2c-.6,0-1-.4-1-1v6.5c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2v-6.5c0,.6-.4,1-1,1Z"/>     <path d="M18.5,6H5.5c-1.1,0-2,.9-2,2v2.5c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v1.5h1v-1.5c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v3h1v-3c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v-2.5c0-1.1-.9-2-2-2Z"/>   </g>   <path d="M4.5,12.5c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M19.5,12.5c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M16.5,7v-3"/>   <path d="M12,7V2"/>   <path d="M7.5,7v-3"/>' : '<path d="M39 34V16C39 14.8954 38.1046 14 37 14H34.3125H26.3438H11C9.89543 14 9 14.8954 9 16V34C9 35.1046 9.89543 36 11 36H37C38.1046 36 39 35.1046 39 34Z"/><path d="M6 36H42"/><path d="M6 42H42"/><path d="M9 21H15V26H21V21H27V29H33V21H39"/><path d="M9 23V19"/><path d="M39 23V19"/><path d="M33 14V8"/><path d="M24 14L24 4"/><path d="M15 14L15 8"/>';

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

module.exports = CakeThree;
