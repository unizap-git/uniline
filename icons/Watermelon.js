'use strict';

var React = require('react');

function Watermelon(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.5,6H1.5c-.6,0-1,.4-1,1,0,6.1,4.9,11,11,11s11-4.9,11-11-.4-1-1-1ZM9,10.9l-1.1,1.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.1-1.1c.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM12.5,13c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5ZM16.5,11.9c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.1-1.1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.1,1.1c.4.4.4,1,0,1.4Z"/>' : '<path d="M23 34C34.0457 34 43 25.0457 43 14H3C3 25.0457 11.9543 34 23 34Z"/><path d="M23 23V26"/><path d="M16.6358 20.3638L14.5145 22.4851"/><path d="M29.3643 20.3642L31.4856 22.4855"/>';

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

module.exports = Watermelon;
