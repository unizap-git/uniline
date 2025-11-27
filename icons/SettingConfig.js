'use strict';

var React = require('react');

function SettingConfig(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M41.5 10H35.5"/><path d="M27.5 6V14"/><path d="M27.5 10L5.5 10"/><path d="M13.5 24H5.5"/><path d="M21.5 20V28"/><path d="M43.5 24H21.5"/><path d="M41.5 38H35.5"/><path d="M27.5 34V42"/><path d="M27.5 38H5.5"/>' : '<path d="M41.5 10H35.5"/><path d="M27.5 6V14"/><path d="M27.5 10L5.5 10"/><path d="M13.5 24H5.5"/><path d="M21.5 20V28"/><path d="M43.5 24H21.5"/><path d="M41.5 38H35.5"/><path d="M27.5 34V42"/><path d="M27.5 38H5.5"/>';

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

module.exports = SettingConfig;
