'use strict';

var React = require('react');

function TriangleRuler(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 44L4 4V44H44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path d="M30 44V41"/><path d="M24 44V41"/><path d="M18 44V41"/><path d="M12 44V41"/><path d="M4 36H7"/><path d="M4 30H7"/><path d="M4 24H7"/><path d="M4 18H7"/>' : '<path d="M44 44L4 4V44H44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 35H25L13 23V35Z"/><path d="M30 44V41"/><path d="M24 44V41"/><path d="M18 44V41"/><path d="M12 44V41"/><path d="M4 36H7"/><path d="M4 30H7"/><path d="M4 24H7"/><path d="M4 18H7"/>';

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

module.exports = TriangleRuler;
