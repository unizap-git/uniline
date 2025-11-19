'use strict';

var React = require('react');

function LetterBold(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14.5,20H6c-.6,0-1-.4-1-1s.4-1,1-1h1V6h-1c-.6,0-1-.4-1-1s.4-1,1-1h6.5c2.5,0,4.5,2,4.5,4.5s-.4,2-1,2.8c1.7.6,3,2.3,3,4.2s-2,4.5-4.5,4.5ZM9,18h5.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5h-5.5v5ZM9,11h3.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5h-3.5v5Z"/>' : '<path d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/>';

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

module.exports = LetterBold;
