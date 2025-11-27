'use strict';

var React = require('react');

function Prison(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,2v4c0,.3.2.5.5.5h6c.3,0,.5-.2.5-.5V2"/>   <path d="M3,3.5h7"/>   <path d="M14,11H3v11h11"/>   <path d="M8,22V6.5"/>   <path d="M5,11v-4.5"/>   <path d="M6.5,2v1.5"/>   <path d="M13.5,6.5v1.5"/>   <path d="M17.5,6.5v1.5"/>   <path d="M21.5,6.5v1.5"/>   <path d="M21.5,7h-8c-.6,0-1,.4-1,1v14c0,.6.4,1,1,1h4c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1h4c.6,0,1-.4,1-1v-14c0-.6-.4-1-1-1Z"/>   <path d="M15.5,22h4" stroke-miterlimit="2"/>' : '<path d="M6 4V12C6 12.5523 6.44772 13 7 13H19C19.5523 13 20 12.5523 20 12V4"/><path d="M6 7H20"/><path d="M28 22H6V44H28"/><path d="M16 44V13"/><path d="M10 22V13"/><path d="M13 4V7"/><path d="M27 13V16"/><path d="M35 13V16"/><path d="M43 13V16"/><path d="M43 44V16H27V44H43Z"/><path d="M35 34V44"/><path d="M31 44L39 44"/>';

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

module.exports = Prison;
