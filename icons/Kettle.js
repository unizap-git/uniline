'use strict';

var React = require('react');

function Kettle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6.77783" y="37" width="36" height="7"/><path d="M38.7778 36L36.7778 10H4.77783L11.3438 17.5493C11.8727 18.1574 12.1347 18.9527 12.0707 19.7561L10.7778 36"/><path d="M26.7778 18H21.7778"/><path d="M26.7778 24H21.7778"/><path d="M26.7778 30H21.7778"/><path d="M36.7778 10H44.7778V26H38.7778"/><path d="M19.7778 9V4H28.7778V9"/>' : '<rect x="6.77783" y="37" width="36" height="7"/><path d="M38.7778 36L36.7778 10H4.77783L11.3438 17.5493C11.8727 18.1574 12.1347 18.9527 12.0707 19.7561L10.7778 36"/><path d="M26.7778 18H21.7778"/><path d="M26.7778 24H21.7778"/><path d="M26.7778 30H21.7778"/><path d="M36.7778 10H44.7778V26H38.7778"/><path d="M19.7778 9V4H28.7778V9"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 49 48',
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

module.exports = Kettle;
