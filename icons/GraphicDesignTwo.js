'use strict';

var React = require('react');

function GraphicDesignTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.6496 28.2381C12.221 25.6863 10 21.6025 10 17C10 9.26801 16.268 3 24 3C31.732 3 38 9.26801 38 17C38 21.5352 35.8435 25.5668 32.5 28.1252"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 17L44 44H4L24 17Z"/>' : '<path d="M15.6496 28.2381C12.221 25.6863 10 21.6025 10 17C10 9.26801 16.268 3 24 3C31.732 3 38 9.26801 38 17C38 21.5352 35.8435 25.5668 32.5 28.1252"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 17L44 44H4L24 17Z"/>';

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

module.exports = GraphicDesignTwo;
