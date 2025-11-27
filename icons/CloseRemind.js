'use strict';

var React = require('react');

function CloseRemind(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 38C42 38 36 33 36 19C36 12.3726 30.6274 7 24 7C21.46 7 19.1042 7.78918 17.1647 9.13571M30 38H6C6 38 11.5692 33.359 11.9765 20.5"/><path d="M18 38L30 38C30 41.3137 27.3137 44 24 44C20.6863 44 18 41.3137 18 38Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 2C21.7909 2 20 3.79086 20 6H28C28 3.79086 26.2091 2 24 2Z"/><path d="M7 6.5L41 44.5"/>' : '<path d="M42 38C42 38 36 33 36 19C36 12.3726 30.6274 7 24 7C21.46 7 19.1042 7.78918 17.1647 9.13571M30 38H6C6 38 11.5692 33.359 11.9765 20.5"/><path d="M18 38L30 38C30 41.3137 27.3137 44 24 44C20.6863 44 18 41.3137 18 38Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 2C21.7909 2 20 3.79086 20 6H28C28 3.79086 26.2091 2 24 2Z"/><path d="M7 6.5L41 44.5"/>';

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

module.exports = CloseRemind;
