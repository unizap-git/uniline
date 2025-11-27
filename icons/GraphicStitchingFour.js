'use strict';

var React = require('react');

function GraphicStitchingFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M39 14C41.7614 14 44 11.7614 44 9C44 6.23858 41.7614 4 39 4C36.2386 4 34 6.23858 34 9C34 11.7614 36.2386 14 39 14Z"/><path d="M9 44C11.7614 44 14 41.7614 14 39C14 36.2386 11.7614 34 9 34C6.23858 34 4 36.2386 4 39C4 41.7614 6.23858 44 9 44Z"/><path d="M14 4H4V14H14V4Z"/><path d="M44 34H34V44H44V34Z"/><path d="M34 9H14"/><path d="M34 39H14"/><path d="M9 34V14"/><path d="M39 34V14"/>' : '<path d="M39 14C41.7614 14 44 11.7614 44 9C44 6.23858 41.7614 4 39 4C36.2386 4 34 6.23858 34 9C34 11.7614 36.2386 14 39 14Z"/><path d="M9 44C11.7614 44 14 41.7614 14 39C14 36.2386 11.7614 34 9 34C6.23858 34 4 36.2386 4 39C4 41.7614 6.23858 44 9 44Z"/><path d="M14 4H4V14H14V4Z"/><path d="M44 34H34V44H44V34Z"/><path d="M34 9H14"/><path d="M34 39H14"/><path d="M9 34V14"/><path d="M39 34V14"/>';

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

module.exports = GraphicStitchingFour;
