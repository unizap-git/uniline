'use strict';

var React = require('react');

function GraphicStitchingThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"/><path d="M24 44C26.7614 44 29 41.7614 29 39C29 36.2386 26.7614 34 24 34C21.2386 34 19 36.2386 19 39C19 41.7614 21.2386 44 24 44Z"/><path d="M14 19H4V29H14V19Z"/><path d="M44 19H34V29H44V19Z"/><path d="M19 9H9V19"/><path d="M19 39H9V29"/><path d="M29 9H40V19"/><path d="M29 39H39V29"/>' : '<path d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"/><path d="M24 44C26.7614 44 29 41.7614 29 39C29 36.2386 26.7614 34 24 34C21.2386 34 19 36.2386 19 39C19 41.7614 21.2386 44 24 44Z"/><path d="M14 19H4V29H14V19Z"/><path d="M44 19H34V29H44V19Z"/><path d="M19 9H9V19"/><path d="M19 39H9V29"/><path d="M29 9H40V19"/><path d="M29 39H39V29"/>';

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

module.exports = GraphicStitchingThree;
