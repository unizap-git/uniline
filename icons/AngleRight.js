'use strict';

var React = require('react');

function AngleRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,20c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l6.3-6.3-6.3-6.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l7,7c.4.4.4,1,0,1.4l-7,7c-.2.2-.5.3-.7.3Z"/>' : '<path d="m9 5 7 7-7 7"/>';

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

module.exports = AngleRight;
