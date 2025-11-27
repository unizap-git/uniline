'use strict';

var React = require('react');

function MapRoadTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,1H3c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2ZM19.3,13.9l-1.1.4,1.2,3.3c.2.5,0,1.1-.6,1.3-.1,0-.2,0-.4,0-.4,0-.8-.2-.9-.6l-1.2-3.3-11,3.9c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7-.2-.5,0-1.1.6-1.3l14-5c.5-.2,1.1,0,1.3.6.2.5,0,1.1-.6,1.3ZM4.7,13.6l.9-.3c.5-.2,1.1,0,1.3.6s0,1.1-.6,1.3l-.9.3c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7-.2-.5,0-1.1.6-1.3ZM8.4,12.2l.9-.3c.5-.2,1.1,0,1.3.6.2.5,0,1.1-.6,1.3l-.9.3c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7-.2-.5,0-1.1.6-1.3ZM12.2,10.9l.9-.3c.5-.2,1.1,0,1.3.6.2.5,0,1.1-.6,1.3l-.9.3c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7-.2-.5,0-1.1.6-1.3ZM16,9.5l.9-.3c.5-.2,1.1,0,1.3.6.2.5,0,1.1-.6,1.3l-.9.3c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7-.2-.5,0-1.1.6-1.3ZM19.3,6.9l-14,5c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7-.2-.5,0-1.1.6-1.3l2.2-.8-1.3-3.4c-.2-.5,0-1.1.6-1.3.5-.2,1.1,0,1.3.6l1.3,3.5,9.9-3.5c.5-.2,1.1,0,1.3.6.2.5,0,1.1-.6,1.3Z"/>' : '<path d="M42 4H6C4.89543 4 4 4.89543 4 6V42C4 43.1046 4.89543 44 6 44H42C43.1046 44 44 43.1046 44 42V6C44 4.89543 43.1046 4 42 4Z"/><path d="M10 22L38 12"/><path d="M10 29L38 19" stroke-dasharray="2 6"/><path d="M10 36L38 26"/><path d="M16 19L13 11"/><path d="M37 36L34 28"/>';

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

module.exports = MapRoadTwo;
