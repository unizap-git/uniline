'use strict';

var React = require('react');

function BuildingThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M9,22v-8.7l-2,1.2v7.4c0,.6-.4,1-1,1h4c-.6,0-1-.4-1-1Z"/>     <path d="M17,22v-7.4l-2-1.2v8.7c0,.6-.4,1-1,1h4c-.6,0-1-.4-1-1Z"/>     <path d="M22.5,9.7L12.5,3.2c-.3-.2-.8-.2-1.1,0L1.5,9.7c-.3.2-.5.5-.5.8v11.5c0,.6.4,1,1,1h4c-.6,0-1-.4-1-1v-8c0-.3.2-.7.5-.8l4-2.5c.3-.2.7-.2,1,0,.3.2.5.5.5.9v10.5c0,.6-.4,1-1,1h4c-.6,0-1-.4-1-1v-10.5c0-.4.2-.7.5-.9.3-.2.7-.2,1,0l4,2.5c.3.2.5.5.5.8v8c0,.6-.4,1-1,1h4c.6,0,1-.4,1-1v-11.5c0-.3-.2-.7-.5-.8Z"/>   </g>   <path d="M20.5,23H4c-.6,0-1-.4-1-1s.4-1,1-1h16.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 8L44 21V44H4L4 21L24 8Z"/><path d="M20 44V23L12 28L12 44"/><path d="M28 44V23L36 28L36 44"/><path d="M41 44H8"/>';

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

module.exports = BuildingThree;
