'use strict';

var React = require('react');

function Shovel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 4H35L34 13L25.5 19H22.5L14 13L13 4Z"/><path d="M24 19V30"/><rect x="21" y="30" width="6" height="14" rx="3"/>' : '<path d="M13 4H35L34 13L25.5 19H22.5L14 13L13 4Z"/><path d="M24 19V30"/><rect x="21" y="30" width="6" height="14" rx="3"/>';

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

module.exports = Shovel;
