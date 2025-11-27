'use strict';

var React = require('react');

function EnterKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,1h-10c-.6,0-1,.4-1,1v7H2c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM18,16c0,.6-.4,1-1,1h-6.1l.3.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2-2c0,0-.2-.2-.2-.3-.1-.2-.1-.5,0-.8,0-.1.1-.2.2-.3l2-2c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.3.3h5.1v-3.5c0-.6.4-1,1-1s1,.4,1,1v4.5Z"/>' : '<path d="M44 44V4H24V20H4V44H44Z"/><path d="M21 28L17 32L21 36"/><path d="M34 23V32H17"/>';

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

module.exports = EnterKey;
