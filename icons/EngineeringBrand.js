'use strict';

var React = require('react');

function EngineeringBrand(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="5" y="6" width="38" height="20" rx="2"/><path d="M12 26V42"/><path d="M36 33H12"/><path d="M16 42L8 42"/><path d="M40 42L32 42"/><path d="M36 26V42"/>' : '<rect x="5" y="6" width="38" height="20" rx="2"/><path d="M12 26V42"/><path d="M36 33H12"/><path d="M16 42L8 42"/><path d="M40 42L32 42"/><path d="M36 26V42"/>';

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

module.exports = EngineeringBrand;
