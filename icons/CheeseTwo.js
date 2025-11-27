'use strict';

var React = require('react');

function CheeseTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,24l14.5-10.5c1.4,2,4.3,2.5,6.3,1.1,2-1.4,3-3.8,1.1-6.3-.1-.1,2.8-2.3,3-2.3s11.2,2.2,11.2,18M6,24h36M6,24v18h36v-18M15,30.8h0M24,35.2h0M33,30.8h0"/>' : '<path d="M6,24l14.5-10.5c1.4,2,4.3,2.5,6.3,1.1,2-1.4,3-3.8,1.1-6.3-.1-.1,2.8-2.3,3-2.3s11.2,2.2,11.2,18M6,24h36M6,24v18h36v-18M15,30.8h0M24,35.2h0M33,30.8h0"/>';

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

module.exports = CheeseTwo;
