'use strict';

var React = require('react');

function FileWord(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.7,6.3L15.7,1.3c-.2-.2-.4-.3-.7-.3H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.3-.1-.5-.3-.7ZM17,10.2l-1.5,7c0,.4-.4.7-.9.8,0,0,0,0-.1,0-.4,0-.7-.2-.9-.6l-1.6-3.2-1.6,3.2c-.2.4-.6.6-1,.5-.4,0-.8-.4-.9-.8l-1.5-7c-.1-.5.2-1.1.8-1.2.5-.1,1.1.2,1.2.8l.9,4.2,1.2-2.5c.3-.7,1.5-.7,1.8,0l1.2,2.5.9-4.2c.1-.5.6-.9,1.2-.8.5.1.9.6.8,1.2Z"/>' : '<path d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"/><path d="M16.0083 20L19.0083 34L24.0083 24L29.0083 34L32.0083 20"/>';

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

module.exports = FileWord;
