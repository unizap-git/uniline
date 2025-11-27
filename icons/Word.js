'use strict';

var React = require('react');

function Word(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM18,8.2l-2,8c-.1.4-.5.7-.9.8,0,0,0,0,0,0-.4,0-.7-.2-.9-.6l-2.1-4.5-2.1,4.5c-.2.4-.6.6-1,.6-.4,0-.8-.3-.9-.8l-2-8c-.1-.5.2-1.1.7-1.2.5-.1,1.1.2,1.2.7l1.3,5.2,1.8-3.9c.2-.4.5-.6.9-.6s.7.2.9.6l1.8,3.9,1.3-5.2c.1-.5.7-.9,1.2-.7.5.1.9.7.7,1.2Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M14 16L18 32L24 19L30 32L34 16"/>';

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

module.exports = Word;
