'use strict';

var React = require('react');

function Telescope(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="5" width="12" height="38" rx="6"/><rect x="30" y="5" width="12" height="38" rx="6"/><path d="M12 43C15.3137 43 18 40.3137 18 37C18 33.6863 15.3137 31 12 31C8.68629 31 6 33.6863 6 37C6 40.3137 8.68629 43 12 43Z"/><path d="M36 43C39.3137 43 42 40.3137 42 37C42 33.6863 39.3137 31 36 31C32.6863 31 30 33.6863 30 37C30 40.3137 32.6863 43 36 43Z"/><path d="M30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21"/><path d="M30 31C30 27.6863 27.3137 25 24 25C20.6863 25 18 27.6863 18 31"/>' : '<rect x="6" y="5" width="12" height="38" rx="6"/><rect x="30" y="5" width="12" height="38" rx="6"/><path d="M12 43C15.3137 43 18 40.3137 18 37C18 33.6863 15.3137 31 12 31C8.68629 31 6 33.6863 6 37C6 40.3137 8.68629 43 12 43Z"/><path d="M36 43C39.3137 43 42 40.3137 42 37C42 33.6863 39.3137 31 36 31C32.6863 31 30 33.6863 30 37C30 40.3137 32.6863 43 36 43Z"/><path d="M30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21"/><path d="M30 31C30 27.6863 27.3137 25 24 25C20.6863 25 18 27.6863 18 31"/>';

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

module.exports = Telescope;
