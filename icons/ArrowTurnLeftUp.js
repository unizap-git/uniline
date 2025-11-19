'use strict';

var React = require('react');

function ArrowTurnLeftUp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M20.24 20.249a.75.75 0 0 0-.75-.75H8.989V5.56l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l2.47-2.469V20.25c0 .414.335.75.75.75h11.25a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd"/>' : '<path d="M11.99 7.5 8.24 3.75m0 0L4.49 7.5m3.75-3.75v16.499h11.25"/>';

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

module.exports = ArrowTurnLeftUp;
