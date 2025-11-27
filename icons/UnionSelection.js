'use strict';

var React = require('react');

function UnionSelection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M32 16H41C42.1046 16 43 16.8954 43 18V41C43 42.1046 42.1046 43 41 43H18C16.8954 43 16 42.1046 16 41V32"/><path d="M32 16V7C32 5.89543 31.1046 5 30 5H7C5.89543 5 5 5.89543 5 7V30C5 31.1046 5.89543 32 7 32H16"/><path d="M41.0005 16L17.0005 40"/><path d="M32.0005 7L7.00049 32"/><path d="M32.0005 16L16.0005 32"/><path d="M43.0005 24L24.0005 43"/><path d="M24.0005 5L5.00049 24"/><path d="M43.0005 34L34.0005 43"/><path d="M14.0005 5L5.00049 14"/>' : '<path d="M32 16H41C42.1046 16 43 16.8954 43 18V41C43 42.1046 42.1046 43 41 43H18C16.8954 43 16 42.1046 16 41V32"/><path d="M32 16V7C32 5.89543 31.1046 5 30 5H7C5.89543 5 5 5.89543 5 7V30C5 31.1046 5.89543 32 7 32H16"/><path d="M41.0005 16L17.0005 40"/><path d="M32.0005 7L7.00049 32"/><path d="M32.0005 16L16.0005 32"/><path d="M43.0005 24L24.0005 43"/><path d="M24.0005 5L5.00049 24"/><path d="M43.0005 34L34.0005 43"/><path d="M14.0005 5L5.00049 14"/>';

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

module.exports = UnionSelection;
