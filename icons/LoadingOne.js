'use strict';

var React = require('react');

function LoadingOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 4V8"/><path d="M34 6.6795L32 10.1436"/><path d="M41.3203 14L37.8562 16"/><path d="M44 24H40"/><path d="M41.3203 34L37.8562 32"/><path d="M34 41.3205L32 37.8564"/><path d="M24 44V40"/><path d="M14 41.3205L16 37.8564"/><path d="M6.67969 34L10.1438 32"/><path d="M4 24H8"/><path d="M6.67969 14L10.1438 16"/><path d="M14 6.6795L16 10.1436"/>' : '<path d="M24 4V8"/><path d="M34 6.6795L32 10.1436"/><path d="M41.3203 14L37.8562 16"/><path d="M44 24H40"/><path d="M41.3203 34L37.8562 32"/><path d="M34 41.3205L32 37.8564"/><path d="M24 44V40"/><path d="M14 41.3205L16 37.8564"/><path d="M6.67969 34L10.1438 32"/><path d="M4 24H8"/><path d="M6.67969 14L10.1438 16"/><path d="M14 6.6795L16 10.1436"/>';

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

module.exports = LoadingOne;
