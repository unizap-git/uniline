'use strict';

var React = require('react');

function BottleThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.1875 10H26.8125L33 21.1806V44H15V21.1806L21.1875 10Z"/><rect x="20" y="4" width="8" height="6"/><rect x="21" y="23" width="6" height="12" rx="3"/>' : '<path d="M21.1875 10H26.8125L33 21.1806V44H15V21.1806L21.1875 10Z"/><rect x="20" y="4" width="8" height="6"/><rect x="21" y="23" width="6" height="12" rx="3"/>';

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

module.exports = BottleThree;
