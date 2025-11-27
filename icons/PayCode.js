'use strict';

var React = require('react');

function PayCode(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,1H2c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM7,16c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1s1,.4,1,1v8ZM11,16c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1s1,.4,1,1v8ZM15,16c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1s1,.4,1,1v8ZM19,16c0,.6-.4,1-1,1s-1-.4-1-1v-8c0-.6.4-1,1-1s1,.4,1,1v8Z"/>' : '<path d="M44 4H4V44H44V4Z"/><path d="M12 16V32"/><path d="M20 16V32"/><path d="M28 16V32"/><path d="M36 16V32"/>';

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

module.exports = PayCode;
