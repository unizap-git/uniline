'use strict';

var React = require('react');

function SentToBack(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30"/><path d="M9.96906 6H6V10.0336"/><path d="M9.99705 30H6V26.012"/><path d="M26 30H29.9971V26.012"/><path d="M26.0023 6H30V9.99785"/><path d="M16.0283 6H20.0083"/><path d="M6 16V20.0148"/><path d="M30 16V20.0148"/><path d="M15.9922 30H19.9996"/>' : '<path d="M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30"/><path d="M9.96906 6H6V10.0336"/><path d="M9.99705 30H6V26.012"/><path d="M26 30H29.9971V26.012"/><path d="M26.0023 6H30V9.99785"/><path d="M16.0283 6H20.0083"/><path d="M6 16V20.0148"/><path d="M30 16V20.0148"/><path d="M15.9922 30H19.9996"/>';

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

module.exports = SentToBack;
