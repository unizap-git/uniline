'use strict';

var React = require('react');

function English(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM10.2,11c.6,0,1,.4,1,1s-.4,1-1,1h-2.8v1.5h2.8c.6,0,1,.4,1,1s-.4,1-1,1h-3.8c-.6,0-1-.4-1-1v-7c0-.6.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-3v1.5h2.8ZM18.5,15.5c0,.6-.4,1-1,1s-1-.4-1-1v-3.2c0-.7-.6-1.2-1.2-1.2s-1.2.6-1.2,1.2v3.2c0,.6-.4,1-1,1s-1-.4-1-1v-6c0-.6.4-1,1-1s.8.3,1,.8c.4-.2.8-.3,1.3-.3,1.8,0,3.2,1.5,3.2,3.2v3.2Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M13 31V17H21"/><path d="M13 24H20.5"/><path d="M13 31H20.5"/><path d="M26 31L26 19"/><path d="M26 31L26 24.5C26 22.0147 28.0147 20 30.5 20V20C32.9853 20 35 22.0147 35 24.5L35 31"/>';

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

module.exports = English;
