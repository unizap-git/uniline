'use strict';

var React = require('react');

function CookingPot(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 44H38V20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474V44Z"/><path d="M38 22.0437C38 21.8001 38 21.4346 38 20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474C10 21.4332 10 21.7975 10 22.0404L38 22.0437Z"/><path d="M4 22H44"/><path d="M21 4H27"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 44H38V20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474V44Z"/><path d="M38 22.0437C38 21.8001 38 21.4346 38 20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474C10 21.4332 10 21.7975 10 22.0404L38 22.0437Z"/><path d="M4 22H44"/><path d="M21 4H27"/>';

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

module.exports = CookingPot;
