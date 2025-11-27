'use strict';

var React = require('react');

function Tool(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 16C44 22.6274 38.6274 28 32 28C29.9733 28 28.0639 27.4975 26.3896 26.6104L9 44L4 39L21.3896 21.6104C20.5025 19.9361 20 18.0267 20 16C20 9.37258 25.3726 4 32 4C34.0267 4 35.9361 4.50245 37.6104 5.38959L30 13L35 18L42.6104 10.3896C43.4975 12.0639 44 13.9733 44 16Z"/>' : '<path d="M44 16C44 22.6274 38.6274 28 32 28C29.9733 28 28.0639 27.4975 26.3896 26.6104L9 44L4 39L21.3896 21.6104C20.5025 19.9361 20 18.0267 20 16C20 9.37258 25.3726 4 32 4C34.0267 4 35.9361 4.50245 37.6104 5.38959L30 13L35 18L42.6104 10.3896C43.4975 12.0639 44 13.9733 44 16Z"/>';

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

module.exports = Tool;
