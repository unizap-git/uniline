'use strict';

var React = require('react');

function BezierCurve(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="30" width="8" height="8"/><rect x="36" y="30" width="8" height="8"/><rect x="20" y="10" width="8" height="8"/><path d="M20 14H4"/><path d="M44 14H28"/><path d="M8 30.0001C8 22.5447 13.0991 16.2803 20 14.5042"/><path d="M28 14.5042C34.9009 16.2803 40 22.5447 40 30.0001"/>' : '<rect x="4" y="30" width="8" height="8"/><rect x="36" y="30" width="8" height="8"/><rect x="20" y="10" width="8" height="8"/><path d="M20 14H4"/><path d="M44 14H28"/><path d="M8 30.0001C8 22.5447 13.0991 16.2803 20 14.5042"/><path d="M28 14.5042C34.9009 16.2803 40 22.5447 40 30.0001"/>';

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

module.exports = BezierCurve;
