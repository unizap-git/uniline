'use strict';

var React = require('react');

function Cpu(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,3H5c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM16,15c0,.6-.4,1-1,1h-6c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1h6c.6,0,1,.4,1,1v6Z"/>   <path d="M7.5,1v3V1Z" fill-rule="evenodd"/>   <path d="M7.5,1v3"/>   <path d="M7.5,20v3-3Z" fill-rule="evenodd"/>   <path d="M7.5,20v3"/>   <path d="M12,1v3V1Z" fill-rule="evenodd"/>   <path d="M12,1v3"/>   <path d="M12,20v3-3Z" fill-rule="evenodd"/>   <path d="M12,20v3"/>   <path d="M16.5,1v3V1Z" fill-rule="evenodd"/>   <path d="M16.5,1v3"/>   <path d="M16.5,20v3-3Z" fill-rule="evenodd"/>   <path d="M16.5,20v3"/>   <path d="M1,7.5h3H1Z" fill-rule="evenodd"/>   <path d="M1,7.5h3"/>   <path d="M20,7.5h3-3Z" fill-rule="evenodd"/>   <path d="M20,7.5h3"/>   <path d="M1,12h3H1Z" fill-rule="evenodd"/>   <path d="M1,12h3"/>   <path d="M20,12h3-3Z" fill-rule="evenodd"/>   <path d="M20,12h3"/>   <path d="M1,16.5h3H1Z" fill-rule="evenodd"/>   <path d="M1,16.5h3"/>   <path d="M20,16.5h3-3Z" fill-rule="evenodd"/>   <path d="M20,16.5h3"/>' : '<path d="M38 8H10C8.89543 8 8 8.89543 8 10V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V10C40 8.89543 39.1046 8 38 8Z"/><path d="M30 18H18V30H30V18Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9092 2V8V2Z"/><path d="M14.9092 2V8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9092 40V46V40Z"/><path d="M14.9092 40V46"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 2V8V2Z"/><path d="M24 2V8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 40V46V40Z"/><path d="M24 40V46"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33.0908 2V8V2Z"/><path d="M33.0908 2V8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33.0908 40V46V40Z"/><path d="M33.0908 40V46"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 14.9092H8H2Z"/><path d="M2 14.9092H8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 14.9092H46H40Z"/><path d="M40 14.9092H46"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 24H8H2Z"/><path d="M2 24H8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 24H46H40Z"/><path d="M40 24H46"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 33.0908H8H2Z"/><path d="M2 33.0908H8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 33.0908H46H40Z"/><path d="M40 33.0908H46"/>';

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

module.exports = Cpu;
