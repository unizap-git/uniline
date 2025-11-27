'use strict';

var React = require('react');

function Garage(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="5" width="36" height="38"/><rect x="12" y="12" width="24" height="6"/><path d="M16 18V43"/><path d="M32 18V43"/><path d="M16 24H32"/><path d="M16 30H32"/><path d="M16 36H32"/>' : '<rect x="6" y="5" width="36" height="38"/><rect x="12" y="12" width="24" height="6"/><path d="M16 18V43"/><path d="M32 18V43"/><path d="M16 24H32"/><path d="M16 30H32"/><path d="M16 36H32"/>';

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

module.exports = Garage;
