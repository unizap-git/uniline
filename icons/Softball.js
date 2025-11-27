'use strict';

var React = require('react');

function Softball(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44Z" stroke-miterlimit="2"/><path d="M10 38C13.7 34.37 16 29.59 16 24C16 18.48 13.62 13.62 10 10" stroke-miterlimit="2"/><path d="M38 38C34.3 34.37 32 29.59 32 24C32 18.48 34.38 13.62 38 10" stroke-miterlimit="2"/><path d="M28 24H36" stroke-miterlimit="2"/><path d="M12 24H20" stroke-miterlimit="2"/><path d="M30 34L36 31" stroke-miterlimit="2"/><path d="M36 17L30 14" stroke-miterlimit="2"/><path d="M18 34L12 31" stroke-miterlimit="2"/><path d="M12 17L18 14" stroke-miterlimit="2"/>' : '<path d="M24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44Z" stroke-miterlimit="2"/><path d="M10 38C13.7 34.37 16 29.59 16 24C16 18.48 13.62 13.62 10 10" stroke-miterlimit="2"/><path d="M38 38C34.3 34.37 32 29.59 32 24C32 18.48 34.38 13.62 38 10" stroke-miterlimit="2"/><path d="M28 24H36" stroke-miterlimit="2"/><path d="M12 24H20" stroke-miterlimit="2"/><path d="M30 34L36 31" stroke-miterlimit="2"/><path d="M36 17L30 14" stroke-miterlimit="2"/><path d="M18 34L12 31" stroke-miterlimit="2"/><path d="M12 17L18 14" stroke-miterlimit="2"/>';

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

module.exports = Softball;
