'use strict';

var React = require('react');

function CurveAdjustment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,1H2c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM19,6c-2.8,0-4.8,2.1-6,6.3-1.5,5.1-4.2,7.7-8,7.7s-1-.4-1-1,.4-1,1-1c2.8,0,4.8-2.1,6-6.3,1.5-5.1,4.2-7.7,8-7.7s1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M44 4H4V44H44V4Z"/><path d="M38 10C32 10 27 14 24 24C21 34 16 38 10 38"/>';

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

module.exports = CurveAdjustment;
