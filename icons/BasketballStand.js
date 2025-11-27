'use strict';

var React = require('react');

function BasketballStand(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="5" width="40" height="28" rx="2"/><path d="M31 22V15H17V22"/><path d="M18 39H30"/><path d="M17 33H31"/><path d="M32 27L30 39L31 43"/><path d="M16 27L18 39L17 43"/><path d="M24 27L24 43"/><path d="M34 27L14 27"/>' : '<rect x="4" y="5" width="40" height="28" rx="2"/><path d="M31 22V15H17V22"/><path d="M18 39H30"/><path d="M17 33H31"/><path d="M32 27L30 39L31 43"/><path d="M16 27L18 39L17 43"/><path d="M24 27L24 43"/><path d="M34 27L14 27"/>';

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

module.exports = BasketballStand;
