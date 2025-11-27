'use strict';

var React = require('react');

function ContrastView(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="7" y="7" width="17" height="34"/><path d="M24 7H28"/><path d="M33 7H35"/><path d="M33 41H35"/><path d="M41 7V9"/><path d="M41 15V17"/><path d="M41 23V25"/><path d="M41 31V33"/><path d="M41 39V41"/><path d="M27 41H24"/><path d="M24 4V44"/>' : '<rect x="7" y="7" width="17" height="34"/><path d="M24 7H28"/><path d="M33 7H35"/><path d="M33 41H35"/><path d="M41 7V9"/><path d="M41 15V17"/><path d="M41 23V25"/><path d="M41 31V33"/><path d="M41 39V41"/><path d="M27 41H24"/><path d="M24 4V44"/>';

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

module.exports = ContrastView;
