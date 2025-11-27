'use strict';

var React = require('react');

function MedalOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,3l5,6"/>   <path d="M21,3l-5,6"/>   <path d="M15.5,2l-2.5,6"/>   <path d="M8.5,2l2.5,6"/>   <path d="M12,7c-4.4,0-8,3.6-8,8s3.6,8,8,8,8-3.6,8-8-3.6-8-8-8ZM12,19.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5,4.5,2,4.5,4.5-2,4.5-4.5,4.5Z"/>' : '<path d="M6 6L16 18"/><path d="M42 6L32 18"/><path d="M31 4L26 16"/><path d="M17 4L22 16"/><circle cx="24" cy="30" r="14"/><circle cx="24" cy="30" r="7"/>';

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

module.exports = MedalOne;
