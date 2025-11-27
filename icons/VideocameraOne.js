'use strict';

var React = require('react');

function VideocameraOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="21" width="31" height="20" rx="2"/><rect x="20" y="27" width="9" height="8"/><circle cx="27" cy="13" r="5"/><circle cx="13" cy="13" r="5"/><path d="M35 35L44 39V23L35 27"/>' : '<rect x="4" y="21" width="31" height="20" rx="2"/><rect x="20" y="27" width="9" height="8"/><circle cx="27" cy="13" r="5"/><circle cx="13" cy="13" r="5"/><path d="M35 35L44 39V23L35 27"/>';

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

module.exports = VideocameraOne;
