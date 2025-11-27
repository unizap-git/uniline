'use strict';

var React = require('react');

function ElectronicDoorLock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="4" width="26" height="40" rx="2"/><rect x="20" y="30" width="24" height="8" rx="4"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="12" cy="24" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="19" cy="18" r="2"/><circle cx="19" cy="24" r="2"/><circle cx="26" cy="12" r="2"/><circle cx="26" cy="18" r="2"/><circle cx="26" cy="24" r="2"/>' : '<rect x="6" y="4" width="26" height="40" rx="2"/><rect x="20" y="30" width="24" height="8" rx="4"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="12" cy="24" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="19" cy="18" r="2"/><circle cx="19" cy="24" r="2"/><circle cx="26" cy="12" r="2"/><circle cx="26" cy="18" r="2"/><circle cx="26" cy="24" r="2"/>';

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

module.exports = ElectronicDoorLock;
