'use strict';

var React = require('react');

function ArrowTurnDownRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M3.74 3.749a.75.75 0 0 1 .75.75V15h13.938l-2.47-2.47a.75.75 0 0 1 1.061-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06l2.47-2.47H3.738a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 .75-.751Z" clip-rule="evenodd"/>' : '<path d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"/>';

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

module.exports = ArrowTurnDownRight;
