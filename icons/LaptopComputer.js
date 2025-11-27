'use strict';

var React = require('react');

function LaptopComputer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,21H2c-.6,0-1-.4-1-1s.4-1,1-1h20c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M20.5,3H3.5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM13,8h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="5" y="8" width="38" height="24" rx="2"/><path d="M4 40L44 40"/><path d="M22 14L26 14"/>';

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

module.exports = LaptopComputer;
