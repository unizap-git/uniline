'use strict';

var React = require('react');

function GraphicStitching(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 24L34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14L24 24Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 34L24 24L14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34 34C39.5228 34 44 29.5228 44 24C44 18.4772 39.5228 14 34 14L24 24L34 34Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C29.5228 44 34 39.5228 34 34L24 24L14 34C14 39.5228 18.4772 44 24 44Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 24L34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14L24 24Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 34L24 24L14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34 34C39.5228 34 44 29.5228 44 24C44 18.4772 39.5228 14 34 14L24 24L34 34Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C29.5228 44 34 39.5228 34 34L24 24L14 34C14 39.5228 18.4772 44 24 44Z"/>';

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

module.exports = GraphicStitching;
