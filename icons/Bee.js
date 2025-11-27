'use strict';

var React = require('react');

function Bee(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30 28.6957C30 35 27.3137 44 24 44C20.6863 44 18 35 18 28.6957C18 24.9977 20.6863 22 24 22C27.3137 22 30 24.9977 30 28.6957Z"/><path d="M11.4783 17C13.9884 17 20 19.2386 20 22C20 24.7614 13.9884 27 11.4783 27C8.96817 27 6 24.7614 6 22C6 19.2386 8.96817 17 11.4783 17Z"/><path d="M36.5217 17C34.0116 17 28 19.2386 28 22C28 24.7614 34.0116 27 36.5217 27C39.0318 27 42 24.7614 42 22C42 19.2386 39.0318 17 36.5217 17Z"/><rect x="19" y="9" width="10" height="13" rx="5"/><path d="M28 10C28 6.68629 30.6863 4 34 4"/><path d="M21 10C21 6.68629 17.866 4 14 4"/>' : '<path d="M30 28.6957C30 35 27.3137 44 24 44C20.6863 44 18 35 18 28.6957C18 24.9977 20.6863 22 24 22C27.3137 22 30 24.9977 30 28.6957Z"/><path d="M11.4783 17C13.9884 17 20 19.2386 20 22C20 24.7614 13.9884 27 11.4783 27C8.96817 27 6 24.7614 6 22C6 19.2386 8.96817 17 11.4783 17Z"/><path d="M36.5217 17C34.0116 17 28 19.2386 28 22C28 24.7614 34.0116 27 36.5217 27C39.0318 27 42 24.7614 42 22C42 19.2386 39.0318 17 36.5217 17Z"/><rect x="19" y="9" width="10" height="13" rx="5"/><path d="M28 10C28 6.68629 30.6863 4 34 4"/><path d="M21 10C21 6.68629 17.866 4 14 4"/>';

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

module.exports = Bee;
