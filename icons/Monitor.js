'use strict';

var React = require('react');

function Monitor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,7l-4,3.4v3.2l4,3.4V7Z"/>   <path d="M18,4H2c-.6,0-1,.4-1,1v14c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V5c0-.6-.4-1-1-1ZM12.1,12.8l-3,2.5c-.2.2-.4.2-.6.2s-.6-.1-.8-.4c-.4-.4-.3-1.1.1-1.4l2.1-1.7-2.1-1.7c-.4-.4-.5-1-.1-1.4.4-.4,1-.5,1.4-.1l3,2.5c.2.2.4.5.4.8s-.1.6-.4.8Z"/>' : '<rect x="4" y="10" width="32" height="28"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 14L36 20.75V27.25L44 34V14Z"/><path d="M17 19L23 24L17 29"/>';

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

module.exports = Monitor;
