'use strict';

var React = require('react');

function WeixinGames(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 24L24 6L42 24L24 42L6 24Z"/><path d="M24 29V42"/><path d="M19 24H6"/><path d="M24 19V6"/><path d="M29 24H42"/><path d="M29 24C29 26.7614 26.7614 29 24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24Z"/>' : '<path d="M6 24L24 6L42 24L24 42L6 24Z"/><path d="M24 29V42"/><path d="M19 24H6"/><path d="M24 19V6"/><path d="M29 24H42"/><path d="M29 24C29 26.7614 26.7614 29 24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24Z"/>';

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

module.exports = WeixinGames;
