'use strict';

var React = require('react');

function BuildingFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.5,23H2c-.6,0-1-.4-1-1v-10c0-.3.1-.6.4-.8l6.5-5c.4-.3,1.1-.3,1.4.2.3.4.3,1.1-.2,1.4l-6.1,4.7v8.5h5.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <g>     <path d="M22.3,11.1l-13.5-5c-.3-.1-.6,0-.9.1s-.4.5-.4.8v15c0,.6.4,1,1,1h4.5c-.6,0-1-.4-1-1v-7.5c0-.3.2-.6.4-.8.3-.2.6-.2.9-.1l4.5,1.5c.4.1.7.5.7.9v6c0,.6-.4,1-1,1h4.5c.6,0,1-.4,1-1v-10c0-.4-.3-.8-.7-.9Z"/>     <path d="M16.5,22v-5.3l-2.5-.8v6.1c0,.6-.4,1-1,1h4.5c-.6,0-1-.4-1-1Z"/>   </g>   <path d="M22,23h-13.5c-.6,0-1-.4-1-1s.4-1,1-1h13.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 14L44 24V44H17L17 14Z"/><path d="M17 14L4 24L4 44H17"/><path d="M35 44V32L26 29L26 44"/><path d="M44 44H17"/>';

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

module.exports = BuildingFour;
