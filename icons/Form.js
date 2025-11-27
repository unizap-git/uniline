'use strict';

var React = require('react');

function Form(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,19v-10.5,10.5Z" fill-rule="evenodd"/>   <path d="M2,20c-.6,0-1-.4-1-1v-10.5c0-.6.4-1,1-1s1,.4,1,1v10.5c0,.6-.4,1-1,1Z"/>   <path d="M22,19v-10.5,10.5Z" fill-rule="evenodd"/>   <path d="M22,20c-.6,0-1-.4-1-1v-10.5c0-.6.4-1,1-1s1,.4,1,1v10.5c0,.6-.4,1-1,1Z"/>   <g>     <path d="M14.5,20v-4.5h-5v4.5c0,.6-.4,1-1,1h7c-.6,0-1-.4-1-1Z"/>     <path d="M7.5,20v-4.5H2c-.6,0-1-.4-1-1v4.5c0,1.1.9,2,2,2h5.5c-.6,0-1-.4-1-1Z"/>     <path d="M22,15.5h-5.5v4.5c0,.6-.4,1-1,1h5.5c1.1,0,2-.9,2-2v-4.5c0,.6-.4,1-1,1Z"/>     <path d="M2,13.5h5.5v-3H2c-.6,0-1-.4-1-1v5c0-.6.4-1,1-1Z"/>     <path d="M22,10.5h-5.5v3h5.5c.6,0,1,.4,1,1v-5c0,.6-.4,1-1,1Z"/>     <path d="M21,3H3c-1.1,0-2,.9-2,2v4.5c0-.6.4-1,1-1h20c.6,0,1,.4,1,1v-4.5c0-1.1-.9-2-2-2Z"/>     <rect x="9.5" y="10.5" width="5" height="3"/>   </g>   <path d="M19.5,21H4.5c-.6,0-1-.4-1-1s.4-1,1-1h15c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="4" y="8" width="40" height="32" rx="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 29H44H4Z"/><path d="M4 29H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 19H44H4Z"/><path d="M4 19H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 40V19V40Z"/><path d="M17 40V19"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 38V17V38Z"/><path d="M4 38V17"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 38V17V38Z"/><path d="M44 38V17"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31 40V19V40Z"/><path d="M31 40V19"/><path d="M9 40H39"/>';

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

module.exports = Form;
