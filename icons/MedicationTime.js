'use strict';

var React = require('react');

function MedicationTime(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14.5,1.5h-1c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1s-1-.4-1-1V2.5c0-.6.4-1,1-1h-3c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1s-1-.4-1-1V2.5c0-.6.4-1,1-1h-3c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1s-1-.4-1-1V2.5c0-.6.4-1,1-1h-1c-1.7,0-3,1.3-3,3v1c0,1.7,1.3,3,3,3h8c1.7,0,3-1.3,3-3v-1c0-1.7-1.3-3-3-3Z"/>   <path d="M13.5,20H4c-.6,0-1-.4-1-1v-10.5c0-.6.4-1,1-1h13c.6,0,1,.4,1,1v4.5"/>   <path d="M17,16v2h2"/>   <circle cx="17.5" cy="17.5" r="4.5" stroke-miterlimit="2"/>   <path d="M14.5,3.5H6.5c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M6.5,7.5h8"/>' : '<rect x="9" y="5" width="24" height="10" rx="4"/><path d="M21 5V13"/><path d="M15 5V13"/><path d="M27 5V13"/><path d="M27 40H8C6.89543 40 6 39.1046 6 38V17C6 15.8954 6.89543 15 8 15H34C35.1046 15 36 15.8954 36 17V26"/><path d="M34 32V36H38"/><circle cx="35" cy="35" r="9"/><path d="M13 5L29 5"/><path d="M13 15L29 15"/>';

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

module.exports = MedicationTime;
