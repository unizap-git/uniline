'use strict';

var React = require('react');

function SolarEnergyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 30H16C19.3137 30 22 32.6863 22 36C22 39.3137 19.3137 42 16 42H10V30Z"/><path d="M10 28V44"/><path d="M4 32H10"/><path d="M4 38H10"/><path d="M22 36H30C31.1046 36 32 35.1046 32 34V23"/><path d="M32 4V11"/><path d="M22.8789 7.87891L27.1215 12.1215"/><path d="M22.8789 25.1211L27.1215 20.8785"/><path d="M41.1211 7.87891L36.8785 12.1215"/><path d="M41.1211 25.1211L36.8785 20.8785"/><circle cx="32" cy="17" r="6"/><path d="M20 17H26"/><path d="M38 17H44"/>' : '<path d="M10 30H16C19.3137 30 22 32.6863 22 36C22 39.3137 19.3137 42 16 42H10V30Z"/><path d="M10 28V44"/><path d="M4 32H10"/><path d="M4 38H10"/><path d="M22 36H30C31.1046 36 32 35.1046 32 34V23"/><path d="M32 4V11"/><path d="M22.8789 7.87891L27.1215 12.1215"/><path d="M22.8789 25.1211L27.1215 20.8785"/><path d="M41.1211 7.87891L36.8785 12.1215"/><path d="M41.1211 25.1211L36.8785 20.8785"/><circle cx="32" cy="17" r="6"/><path d="M20 17H26"/><path d="M38 17H44"/>';

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

module.exports = SolarEnergyOne;
