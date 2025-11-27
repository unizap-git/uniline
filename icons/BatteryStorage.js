'use strict';

var React = require('react');

function BatteryStorage(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,3v-1c0-.6.4-1,1-1h2c.6,0,1,.4,1,1v1h-4Z"/>   <path d="M16,3h-8c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h8c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM14.9,13.4l-2.5,5c-.2.4-.5.6-.9.6s-.3,0-.4-.1c-.5-.2-.7-.8-.4-1.3l1.5-3.1-1.9.5c-.4,0-.8,0-1-.3-.2-.3-.3-.7-.1-1.1l2.5-5c.2-.5.8-.7,1.3-.4.5.2.7.8.4,1.3l-1.5,3.1,1.9-.5c.4,0,.8,0,1,.3.2.3.3.7.1,1.1Z"/>' : '<rect x="14" y="44" width="36" height="20" rx="2" transform="rotate(-90 14 44)"/><path d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z"/><path d="M25 18L20 28L28 26L23 36"/>';

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

module.exports = BatteryStorage;
