'use strict';

var React = require('react');

function PhoneOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="5" y="5" width="38" height="38" rx="3"/><rect x="11" y="12" width="8" height="24"/><rect x="25" y="12" width="12" height="6"/><circle cx="25" cy="24" r="2"/><circle cx="25" cy="30" r="2"/><circle cx="25" cy="36" r="2"/><circle cx="31" cy="24" r="2"/><circle cx="31" cy="30" r="2"/><circle cx="31" cy="36" r="2"/><circle cx="37" cy="24" r="2"/><circle cx="37" cy="30" r="2"/><circle cx="37" cy="36" r="2"/>' : '<rect x="5" y="5" width="38" height="38" rx="3"/><rect x="11" y="12" width="8" height="24"/><rect x="25" y="12" width="12" height="6"/><circle cx="25" cy="24" r="2"/><circle cx="25" cy="30" r="2"/><circle cx="25" cy="36" r="2"/><circle cx="31" cy="24" r="2"/><circle cx="31" cy="30" r="2"/><circle cx="31" cy="36" r="2"/><circle cx="37" cy="24" r="2"/><circle cx="37" cy="30" r="2"/><circle cx="37" cy="36" r="2"/>';

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

module.exports = PhoneOne;
