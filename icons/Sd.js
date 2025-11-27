'use strict';

var React = require('react');

function Sd(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.5,1.5h-10c-.6,0-1.1.2-1.5.7h0s-3.2,3.7-3.2,3.7c-.2.2-.2.4-.2.7v2.5c0,.6.4,1,1,1h1v1h-1c-.6,0-1,.4-1,1v8.5c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2V3.5c0-1.1-.9-2-2-2ZM11.5,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM14.5,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM17.5,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M15.4024 5.68299C15.7822 5.24896 16.3308 5 16.9075 5H37C38.1046 5 39 5.89543 39 7V41C39 42.1046 38.1046 43 37 43H11C9.89543 43 9 42.1046 9 41V24H13V18H9V13L15.4024 5.68299Z"/><path d="M33 11V15"/><path d="M21 11V15"/><path d="M27 11V15"/>';

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

module.exports = Sd;
