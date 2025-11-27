'use strict';

var React = require('react');

function Delete(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,4H4.5c-.6,0-1,.4-1,1v17c0,.6.4,1,1,1h15c.6,0,1-.4,1-1V5c0-.6-.4-1-1-1ZM11,16.5c0,.6-.4,1-1,1s-1-.4-1-1v-6.5c0-.6.4-1,1-1s1,.4,1,1v6.5ZM15,16.5c0,.6-.4,1-1,1s-1-.4-1-1v-6.5c0-.6.4-1,1-1s1,.4,1,1v6.5Z"/>   <path d="M2,5h20"/>   <path d="M8,5l1.6-3h4.7l1.6,3h-8Z"/>' : '<path d="M9 10V44H39V10H9Z"/><path d="M20 20V33"/><path d="M28 20V33"/><path d="M4 10H44"/><path d="M16 10L19.289 4H28.7771L32 10H16Z"/>';

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

module.exports = Delete;
