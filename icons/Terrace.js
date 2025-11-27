'use strict';

var React = require('react');

function Terrace(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 24V40C5 41.1046 5.89543 42 7 42H41C42.1046 42 43 41.1046 43 40V24"/><path d="M43 31L5 31"/><path d="M32 23C32 18.5817 28.4183 15 24 15C19.5817 15 16 18.5817 16 23"/><path d="M24 6V8"/><path d="M35.4141 10L33.9998 11.4142"/><path d="M12 10L13.4142 11.4142"/>' : '<path d="M5 24V40C5 41.1046 5.89543 42 7 42H41C42.1046 42 43 41.1046 43 40V24"/><path d="M43 31L5 31"/><path d="M32 23C32 18.5817 28.4183 15 24 15C19.5817 15 16 18.5817 16 23"/><path d="M24 6V8"/><path d="M35.4141 10L33.9998 11.4142"/><path d="M12 10L13.4142 11.4142"/>';

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

module.exports = Terrace;
