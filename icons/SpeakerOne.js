'use strict';

var React = require('react');

function SpeakerOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="15" width="11" height="18"/><path d="M15 15L33 8V40L15 33"/><path d="M40 17H42"/><path d="M39 25H44"/><path d="M40 33H42"/>' : '<rect x="4" y="15" width="11" height="18"/><path d="M15 15L33 8V40L15 33"/><path d="M40 17H42"/><path d="M39 25H44"/><path d="M40 33H42"/>';

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

module.exports = SpeakerOne;
