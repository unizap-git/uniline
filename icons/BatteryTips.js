'use strict';

var React = require('react');

function BatteryTips(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,3v-1c0-.6.4-1,1-1h2c.6,0,1,.4,1,1v1h-4Z"/>   <path d="M16,3h-8c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h8c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM12,18c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM13,14c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5Z"/>' : '<rect x="14" y="44" width="36" height="20" rx="2" transform="rotate(-90 14 44)"/><path d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z"/><path d="M24 28L24 18"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 24 34)"/>';

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

module.exports = BatteryTips;
