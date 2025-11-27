'use strict';

var React = require('react');

function Chip(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="12" y="6" width="24" height="36" rx="2"/><path d="M12 12H6"/><path d="M12 20H6"/><path d="M12 28H6"/><path d="M12 36H6"/><path d="M42 12H36"/><path d="M42 20H36"/><path d="M42 28H36"/><path d="M42 36H36"/>' : '<rect x="12" y="6" width="24" height="36" rx="2"/><path d="M12 12H6"/><path d="M12 20H6"/><path d="M12 28H6"/><path d="M12 36H6"/><path d="M42 12H36"/><path d="M42 20H36"/><path d="M42 28H36"/><path d="M42 36H36"/>';

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

module.exports = Chip;
