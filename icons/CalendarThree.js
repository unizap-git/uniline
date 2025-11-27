'use strict';

var React = require('react');

function CalendarThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.5,2v4"/>   <path d="M15.5,2v4"/>   <g>     <path d="M14.5,22v-5h-5v5c0,.6-.4,1-1,1h7c-.6,0-1-.4-1-1Z"/>     <path d="M22,17h-5.5v5c0,.6-.4,1-1,1h5.5c1.1,0,2-.9,2-2v-5c0,.6-.4,1-1,1Z"/>     <path d="M2,15h5.5v-4H2c-.6,0-1-.4-1-1v6c0-.6.4-1,1-1Z"/>     <path d="M7.5,22v-5H2c-.6,0-1-.4-1-1v5c0,1.1.9,2,2,2h5.5c-.6,0-1-.4-1-1Z"/>     <path d="M21,3H3c-1.1,0-2,.9-2,2v5c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-5c0-1.1-.9-2-2-2Z"/>     <path d="M22,11h-5.5v4h5.5c.6,0,1,.4,1,1v-6c0,.6-.4,1-1,1Z"/>     <rect x="9.5" y="11" width="5" height="4"/>   </g>   <path d="M22,20.5c-.6,0-1-.4-1-1V6.5c0-.6.4-1,1-1s1,.4,1,1v13c0,.6-.4,1-1,1Z"/>   <path d="M2,20.5c-.6,0-1-.4-1-1V6.5c0-.6.4-1,1-1s1,.4,1,1v13c0,.6-.4,1-1,1Z"/>   <path d="M17,23H7c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="4" y="8" width="40" height="36" rx="2"/><path d="M4 20H44"/><path d="M4 32H44"/><path d="M17 4V12"/><path d="M31 4V12"/><path d="M17 20V44"/><path d="M31 20V44"/><path d="M44 13V39"/><path d="M4 13L4 39"/><path d="M14 44H34"/>';

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

module.exports = CalendarThree;
