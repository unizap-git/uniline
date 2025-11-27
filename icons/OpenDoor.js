'use strict';

var React = require('react');

function OpenDoor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,5h7v14H3V5Z"/>   <path d="M21.3,4L10.3,1c-.3,0-.6,0-.9.2-.2.2-.4.5-.4.8v20c0,.3.1.6.4.8.2.1.4.2.6.2s.2,0,.3,0l11-3c.4-.1.7-.5.7-1V5c0-.5-.3-.8-.7-1ZM15,13c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M20 4V44L42 38V10L20 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 10H20V38H6V10Z"/><path d="M28 22V26"/>';

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

module.exports = OpenDoor;
