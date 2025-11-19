'use strict';

var React = require('react');

function LetterUnderline(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,20H6c-.6,0-1-.4-1-1s.4-1,1-1h3c-1.2-.9-2-2.4-2-4V6h-1c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-1v8c0,1.7,1.3,3,3,3s3-1.3,3-3V6h-1c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-1v8c0,1.6-.8,3.1-2,4h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = LetterUnderline;
