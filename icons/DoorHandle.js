'use strict';

var React = require('react');

function DoorHandle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="4" width="26" height="40" rx="2"/><path d="M14 34H24"/><path d="M42 20V14H23.0004C22.0882 12.7856 20.6358 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22C20.6358 22 22.0882 21.2144 23.0004 20H42Z"/>' : '<rect x="6" y="4" width="26" height="40" rx="2"/><path d="M14 34H24"/><path d="M42 20V14H23.0004C22.0882 12.7856 20.6358 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22C20.6358 22 22.0882 21.2144 23.0004 20H42Z"/>';

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

module.exports = DoorHandle;
