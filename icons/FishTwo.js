'use strict';

var React = require('react');

function FishTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.9,24c0,3.2,6.8,8,15.1,8s13.9-6.4,15.1-8c-1.2-1.6-6.8-8-15.1-8s-15.1,4.8-15.1,8ZM11.9,24l-6-6M11.9,24l-6,6M32,23.3h0M28,16c-3.5,6.6-3.4,10.2,0,16.1"/>' : '<path d="M11.9,24c0,3.2,6.8,8,15.1,8s13.9-6.4,15.1-8c-1.2-1.6-6.8-8-15.1-8s-15.1,4.8-15.1,8ZM11.9,24l-6-6M11.9,24l-6,6M32,23.3h0M28,16c-3.5,6.6-3.4,10.2,0,16.1"/>';

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

module.exports = FishTwo;
