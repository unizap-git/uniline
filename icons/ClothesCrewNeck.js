'use strict';

var React = require('react');

function ClothesCrewNeck(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 17V37M11 37V44H37V37M11 37H4V17C4 14 6 10.5 9 8C12 5.5 18 4 18 4H30C30 4 36 5.5 39 8C42 10.5 44 14 44 17V37H37M11 37V17"/><path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"/>' : '<path d="M37 17V37M11 37V44H37V37M11 37H4V17C4 14 6 10.5 9 8C12 5.5 18 4 18 4H30C30 4 36 5.5 39 8C42 10.5 44 14 44 17V37H37M11 37V17"/><path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"/>';

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

module.exports = ClothesCrewNeck;
