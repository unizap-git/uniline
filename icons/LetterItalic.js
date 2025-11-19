'use strict';

var React = require('react');

function LetterItalic(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.9,20h-2.9c-.6,0-1-.4-1-1s.4-1,1-1h2.2l5.3-12h-1.8c-.6,0-1-.4-1-1s.4-1,1-1h3.3s0,0,0,0h3c.6,0,1,.4,1,1s-.4,1-1,1h-2.3l-5.3,12h1.9c.6,0,1,.4,1,1s-.4,1-1,1h-3.5Z"/>' : '<path d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"/>';

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

module.exports = LetterItalic;
