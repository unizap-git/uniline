'use strict';

var React = require('react');

function Sim(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.7,4.9l-3.6-3.6c-.2-.2-.4-.3-.7-.3H4c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V5.6c0-.3-.1-.5-.3-.7ZM12.5,6c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3ZM9.5,6c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3ZM6.5,6c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3ZM17.5,18c0,.6-.4,1-1,1H7.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1h9c.6,0,1,.4,1,1v5Z"/>' : '<path d="M8 4H32.8889L40 11.2727V44H8V4Z"/><path d="M33 26H15V36H33V26Z"/><path d="M15 12V18"/><path d="M21 12V18"/><path d="M27 12V18"/>';

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

module.exports = Sim;
