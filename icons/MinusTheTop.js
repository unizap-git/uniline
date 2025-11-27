'use strict';

var React = require('react');

function MinusTheTop(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 41V21C5 19.8954 5.89543 19 7 19H19H27C28.1046 19 29 19.8954 29 21V29V41C29 42.1046 28.1046 43 27 43H7C5.89543 43 5 42.1046 5 41Z"/><path d="M43 7V27C43 28.1046 42.1046 29 41 29H31C29.8954 29 29 28.1046 29 27V21C29 19.8954 28.1046 19 27 19H21C19.8954 19 19 18.1046 19 17V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7Z"/>' : '<path d="M5 41V21C5 19.8954 5.89543 19 7 19H19H27C28.1046 19 29 19.8954 29 21V29V41C29 42.1046 28.1046 43 27 43H7C5.89543 43 5 42.1046 5 41Z"/><path d="M43 7V27C43 28.1046 42.1046 29 41 29H31C29.8954 29 29 28.1046 29 27V21C29 19.8954 28.1046 19 27 19H21C19.8954 19 19 18.1046 19 17V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7Z"/>';

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

module.exports = MinusTheTop;
