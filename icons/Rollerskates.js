'use strict';

var React = require('react');

function Rollerskates(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,2h-8v4h8V2Z"/>   <path d="M22,5h-8c-.6,0-1,.4-1,1v2h-2.5c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h-3.5c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h-1c-2.8,0-5,2.2-5,5v3c0,1.7,1.3,3,3,3h17c1.1,0,2-.9,2-2V6c0-.6-.4-1-1-1Z"/>   <path d="M11.5,9h-5.5"/>   <path d="M4.5,22c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z"/>   <path d="M9.7,22c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z"/>   <path d="M14.8,22c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z"/>   <path d="M20,22c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z"/>' : '<path d="M44 4H28V12H44V4Z" stroke-miterlimit="2"/><path d="M44 12V34C44 35.11 43.11 36 42 36H8C5.79 36 4 34.21 4 32V26C4 21.58 7.58 18 12 18H28V12H44Z" stroke-miterlimit="2"/><path d="M14 24V18" stroke-miterlimit="2"/><path d="M21 24V18" stroke-miterlimit="2"/><path d="M23 18L12 18" stroke-miterlimit="2"/><path d="M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z" stroke-miterlimit="2"/><path d="M19.3301 44C21.5392 44 23.3301 42.2091 23.3301 40C23.3301 37.7909 21.5392 36 19.3301 36C17.1209 36 15.3301 37.7909 15.3301 40C15.3301 42.2091 17.1209 44 19.3301 44Z" stroke-miterlimit="2"/><path d="M29.6699 44C31.8791 44 33.6699 42.2091 33.6699 40C33.6699 37.7909 31.8791 36 29.6699 36C27.4608 36 25.6699 37.7909 25.6699 40C25.6699 42.2091 27.4608 44 29.6699 44Z" stroke-miterlimit="2"/><path d="M40 44C42.2091 44 44 42.2091 44 40C44 37.7909 42.2091 36 40 36C37.7909 36 36 37.7909 36 40C36 42.2091 37.7909 44 40 44Z" stroke-miterlimit="2"/>';

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

module.exports = Rollerskates;
