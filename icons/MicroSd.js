'use strict';

var React = require('react');

function MicroSd(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,1.5H7.5c-1.1,0-2,.9-2,2v5.6l-2.3,2.7c-.1.2-.2.4-.2.6v1.5c0,.6.4,1,1,1h1.5v.5l-2.1,1.7c-.2.2-.4.5-.4.8v2.5c0,1.1.9,2,2,2h13.5c1.1,0,2-.9,2-2V3.5c0-1.1-.9-2-2-2ZM11,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM14,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM17,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M13 7C13 5.89543 13.8954 5 15 5H37C38.1046 5 39 5.89543 39 7V41C39 42.1046 38.1046 43 37 43H10C8.89543 43 8 42.1046 8 41V36L13 32V28H8V25L13 19V7Z"/><path d="M32 11V15"/><path d="M20 11V15"/><path d="M26 11V15"/>';

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

module.exports = MicroSd;
