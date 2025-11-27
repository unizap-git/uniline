'use strict';

var React = require('react');

function Viewfinder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,3h-4c-.6,0-1,.4-1,1v4"/>   <path d="M8,21h-4c-.6,0-1-.4-1-1v-4"/>   <path d="M16,21h4c.6,0,1-.4,1-1v-4"/>   <path d="M16,3h4c.6,0,1,.4,1,1v4"/>   <path d="M17.5,8h-2.5l-.7-1.1c-.2-.3-.5-.4-.8-.4h-3c-.3,0-.6.2-.8.4l-.7,1.1h-2.5c-.6,0-1,.4-1,1v7.5c0,.6.4,1,1,1h11c.6,0,1-.4,1-1v-7.5c0-.6-.4-1-1-1ZM12,15c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z"/>' : '<path d="M16 6H8C6.89543 6 6 6.89543 6 8V16"/><path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"/><path d="M32 42H40C41.1046 42 42 41.1046 42 40V32"/><path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"/><path d="M13 33V18H19L21 15H27L29 18H35V33H13Z"/><path d="M24 28C25.6569 28 27 26.6569 27 25C27 23.3431 25.6569 22 24 22C22.3431 22 21 23.3431 21 25C21 26.6569 22.3431 28 24 28Z" stroke-miterlimit="10"/>';

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

module.exports = Viewfinder;
