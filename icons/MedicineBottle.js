'use strict';

var React = require('react');

function MedicineBottle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,11.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M18,11.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M16,2h-8v3h8v-3Z"/>   <g>     <path d="M18,10H6c-.6,0-1-.4-1-1v12c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2v-12c0,.6-.4,1-1,1ZM14,16.5h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M17,4H7c-1.1,0-2,.9-2,2v3c0-.6.4-1,1-1h12c.6,0,1,.4,1,1v-3c0-1.1-.9-2-2-2Z"/>   </g>' : '<path d="M34 10H14C12.8954 10 12 10.8954 12 12L12 42C12 43.1046 12.8954 44 14 44H34C35.1046 44 36 43.1046 36 42V12C36 10.8954 35.1046 10 34 10Z"/><path d="M12 18H36"/><path d="M12 15V21"/><path d="M36 15V21"/><path d="M32 4H16L16 10H32V4Z"/><path d="M20 31H28"/><path d="M24 27V35"/>';

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

module.exports = MedicineBottle;
