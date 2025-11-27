'use strict';

var React = require('react');

function CommuterBag(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31.9923 22C31.9974 21.6925 32 21.3833 32 21.0725C32 9.51451 28.4183 4 24 4C19.5817 4 16 9.51451 16 21.0725C16 21.3833 16.0026 21.6925 16.0077 22"/><rect x="13" y="22" width="22" height="22" rx="2"/>' : '<path d="M31.9923 22C31.9974 21.6925 32 21.3833 32 21.0725C32 9.51451 28.4183 4 24 4C19.5817 4 16 9.51451 16 21.0725C16 21.3833 16.0026 21.6925 16.0077 22"/><rect x="13" y="22" width="22" height="22" rx="2"/>';

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

module.exports = CommuterBag;
