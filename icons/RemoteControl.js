'use strict';

var React = require('react');

function RemoteControl(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="11" y="4" width="26" height="40" rx="2"/><circle cx="24" cy="34" r="4"/><rect x="18" y="10" width="12" height="8"/><path d="M23 24H25"/>' : '<rect x="11" y="4" width="26" height="40" rx="2"/><circle cx="24" cy="34" r="4"/><rect x="18" y="10" width="12" height="8"/><path d="M23 24H25"/>';

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

module.exports = RemoteControl;
