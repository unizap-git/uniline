'use strict';

var React = require('react');

function Crown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.6,7.7c-.3-.2-.7-.3-1.1-.1l-4.2,2.1-4.5-6.3c-.4-.5-1.3-.5-1.6,0l-4.5,6.3-4.2-2.1c-.3-.2-.8-.1-1.1.1s-.4.6-.4,1l2.5,11.5c0,.5.5.8,1,.8h15c.5,0,.9-.3,1-.8l2.5-11.5c0-.4,0-.8-.4-1ZM12,17.5c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>' : '<path d="M9 40L4 17L14 22L24 8L34 22L44 17L39 40H9Z"/><path d="M24 33C26.2091 33 28 31.2091 28 29C28 26.7909 26.2091 25 24 25C21.7909 25 20 26.7909 20 29C20 31.2091 21.7909 33 24 33Z"/>';

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

module.exports = Crown;
