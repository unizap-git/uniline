'use strict';

var React = require('react');

function WeixinPeopleNearby(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="15" cy="10" r="4"/><circle cx="33" cy="10" r="4"/><path d="M10 20H20L18 42H12L10 20Z"/><path d="M28 20H38L36 42H30L28 20Z"/>' : '<circle cx="15" cy="10" r="4"/><circle cx="33" cy="10" r="4"/><path d="M10 20H20L18 42H12L10 20Z"/><path d="M28 20H38L36 42H30L28 20Z"/>';

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

module.exports = WeixinPeopleNearby;
