'use strict';

var React = require('react');

function EmailBlock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,17.5V4.5H2v14h11"/>   <path d="M17.5,12c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5,5.5-2.5,5.5-5.5-2.5-5.5-5.5-5.5ZM19.2,17.2l-2,2c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l2-2c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>   <path d="M2,4.5l10,6.5,10-6.5"/>' : '<path d="M44 35V9H24H4V23V37H26"/><circle cx="35" cy="35" r="9"/><path d="M37 33L33 37"/><path d="M4 9L24 22L44 9"/>';

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

module.exports = EmailBlock;
