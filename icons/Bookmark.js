'use strict';

var React = require('react');

function Bookmark(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,1h-2.5c.6,0,1,.4,1,1v9c0,.4-.2.8-.6.9-.1,0-.2,0-.4,0-.3,0-.5-.1-.7-.3l-2.3-2.4-2.3,2.4c-.3.3-.7.4-1.1.2-.4-.2-.6-.5-.6-.9V2c0-.6.4-1,1-1h-5.5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2Z"/>   <path d="M19,3H5c-.6,0-1-.4-1-1s.4-1,1-1h14c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 22V4H33V22L27 15.7273L21 22Z"/><path d="M10 4H38"/>';

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

module.exports = Bookmark;
