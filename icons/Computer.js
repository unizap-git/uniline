'use strict';

var React = require('react');

function Computer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="9.5" y="16" width="5" height="4.5"/>   <path d="M20.5,3H3.5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM13,14.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M7,20.5h10"/>' : '<rect x="19" y="32" width="10" height="9"/><rect x="5" y="8" width="38" height="24" rx="2"/><path d="M22 27H26"/><path d="M14 41L34 41"/>';

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

module.exports = Computer;
