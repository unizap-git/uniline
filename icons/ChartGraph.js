'use strict';

var React = require('react');

function ChartGraph(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="17" y="6" width="14" height="9"/><rect x="6" y="33" width="14" height="9"/><rect x="28" y="33" width="14" height="9"/><path d="M24 16V24"/><path d="M13 33V24H35V33"/>' : '<rect x="17" y="6" width="14" height="9"/><rect x="6" y="33" width="14" height="9"/><rect x="28" y="33" width="14" height="9"/><path d="M24 16V24"/><path d="M13 33V24H35V33"/>';

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

module.exports = ChartGraph;
