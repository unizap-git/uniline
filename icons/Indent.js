'use strict';

var React = require('react');

function Indent(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,6c0-.6.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1H6c-.6,0-1-.4-1-1ZM5,18c0-.6.4-1,1-1h12c.6,0,1,.4,1,1s-.4,1-1,1H6c-.6,0-1-.4-1-1ZM6.7,8.2c-.4-.4-1.1-.3-1.4.1-.2.2-.2.4-.2.7v6c0,.6.4,1,1,1,.2,0,.5,0,.7-.2l3.5-3c.4-.4.5-1,.1-1.4,0,0,0,0-.1-.1,0,0-3.5-3-3.5-3ZM12,10c0-.6.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1h-5c-.6,0-1-.4-1-1ZM12,14c0-.6.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1h-5c-.6,0-1-.4-1-1Z" fill-rule="evenodd"/>' : '<path d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Indent;
