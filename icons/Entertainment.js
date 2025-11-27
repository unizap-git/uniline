'use strict';

var React = require('react');

function Entertainment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 24C21.5228 24 26 19.5228 26 14C26 8.47715 21.5228 4 16 4C10.4772 4 6 8.47715 6 14C6 19.5228 10.4772 24 16 24Z"/><path d="M26 15.202C26.0144 15.2163 30.7229 21.1376 40.1256 32.9656C40.4562 33.363 40.4295 33.9468 40.064 34.3124L35.9805 38.3959C35.615 38.7614 35.0311 38.7881 34.6338 38.4575L17.8222 24"/><path d="M26.4702 24.47L29.2986 27.2985"/><path d="M17 44.0864C18.9166 41.5881 21.2468 40.3389 23.9906 40.3389C28.1063 40.3389 32.9629 45.5097 37.1063 44.798C41.2496 44.0864 42.4355 40 39.8851 37.7375"/>' : '<path d="M16 24C21.5228 24 26 19.5228 26 14C26 8.47715 21.5228 4 16 4C10.4772 4 6 8.47715 6 14C6 19.5228 10.4772 24 16 24Z"/><path d="M26 15.202C26.0144 15.2163 30.7229 21.1376 40.1256 32.9656C40.4562 33.363 40.4295 33.9468 40.064 34.3124L35.9805 38.3959C35.615 38.7614 35.0311 38.7881 34.6338 38.4575L17.8222 24"/><path d="M26.4702 24.47L29.2986 27.2985"/><path d="M17 44.0864C18.9166 41.5881 21.2468 40.3389 23.9906 40.3389C28.1063 40.3389 32.9629 45.5097 37.1063 44.798C41.2496 44.0864 42.4355 40 39.8851 37.7375"/>';

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

module.exports = Entertainment;
