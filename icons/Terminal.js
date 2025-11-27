'use strict';

var React = require('react');

function Terminal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,3H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM6.7,15.8c-.2.2-.4.2-.7.2s-.6-.1-.8-.3c-.4-.4-.3-1,.1-1.4l2.6-2.2-2.6-2.2c-.4-.4-.5-1-.1-1.4.4-.4,1-.5,1.4-.1l3.5,3c.2.2.3.5.3.8s-.1.6-.3.8l-3.5,3ZM18,17h-6.5c-.6,0-1-.4-1-1s.4-1,1-1h6.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="4" y="8" width="40" height="32" rx="2"/><path d="M12 18L19 24L12 30"/><path d="M23 32H36"/>';

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

module.exports = Terminal;
