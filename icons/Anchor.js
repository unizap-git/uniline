'use strict';

var React = require('react');

function Anchor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<line x1="14" y1="8" x2="34" y2="8"/><line x1="14" y1="8" x2="34" y2="8"/><line x1="14" y1="40" x2="34" y2="40"/><rect x="36" y="4" width="8" height="8" rx="2"/><rect x="4" y="4" width="8" height="8" rx="2"/><rect x="36" y="36" width="8" height="8" rx="2"/><rect x="4" y="36" width="8" height="8" rx="2"/><line x1="40" y1="14" x2="40" y2="34"/><line x1="8" y1="14" x2="8" y2="34"/>' : '<line x1="14" y1="8" x2="34" y2="8"/><line x1="14" y1="8" x2="34" y2="8"/><line x1="14" y1="40" x2="34" y2="40"/><rect x="36" y="4" width="8" height="8" rx="2"/><rect x="4" y="4" width="8" height="8" rx="2"/><rect x="36" y="36" width="8" height="8" rx="2"/><rect x="4" y="36" width="8" height="8" rx="2"/><line x1="40" y1="14" x2="40" y2="34"/><line x1="8" y1="14" x2="8" y2="34"/>';

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

module.exports = Anchor;
