'use strict';

var React = require('react');

function CommentOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,2H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h3.5v1.5c0,.3.2.7.5.9.2,0,.3.1.5.1s.3,0,.4-.1l4.8-2.4h10.3c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM17,11.5H7c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44 6H4V36H13V41L23 36H44V6Z"/><path d="M14 21H34"/>';

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

module.exports = CommentOne;
