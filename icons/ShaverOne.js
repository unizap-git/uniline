'use strict';

var React = require('react');

function ShaverOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 14H12V6.02055L16.4737 4L20.7193 6.02055L24.193 4L27.6667 6.02055L31.9123 4L36 6.02055V14Z"/><path d="M12.0001 14C12.0001 14 12 18 12.0001 33C12.0003 48 36.0001 48 36.0001 33C36.0001 18 36.0001 14 36.0001 14"/><path d="M20 35L28 35"/><circle cx="24" cy="25" r="4"/>' : '<path d="M36 14H12V6.02055L16.4737 4L20.7193 6.02055L24.193 4L27.6667 6.02055L31.9123 4L36 6.02055V14Z"/><path d="M12.0001 14C12.0001 14 12 18 12.0001 33C12.0003 48 36.0001 48 36.0001 33C36.0001 18 36.0001 14 36.0001 14"/><path d="M20 35L28 35"/><circle cx="24" cy="25" r="4"/>';

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

module.exports = ShaverOne;
