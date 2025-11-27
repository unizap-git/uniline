'use strict';

var React = require('react');

function LarkOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-215864bb36f0af1b)"><path d="M3.49381 17.7193L41.6776 6.32232L30.3639 44.5893L21.4834 35.7089L21.5251 26.4749L11.9791 26.2045L3.49381 17.7193Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.5352 14.8908C25.9731 16.4529 25.9731 18.9856 27.5352 20.5477C29.0973 22.1098 31.63 22.1098 33.1921 20.5477C34.7542 18.9856 34.7542 16.4529 33.1921 14.8908C31.63 13.3287 29.0973 13.3287 27.5352 14.8908Z"/><path d="M41.6777 6.40558L30.364 17.7193"/></g><defs><clipPath id="icon-215864bb36f0af1b"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-7d87df436f0af1b)"><path d="M3.49381 17.7193L41.6776 6.32232L30.3639 44.5893L21.4834 35.7089L21.5251 26.4749L11.9791 26.2045L3.49381 17.7193Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.5352 14.8908C25.9731 16.4529 25.9731 18.9856 27.5352 20.5477C29.0973 22.1098 31.63 22.1098 33.1921 20.5477C34.7542 18.9856 34.7542 16.4529 33.1921 14.8908C31.63 13.3287 29.0973 13.3287 27.5352 14.8908Z"/><path d="M41.6777 6.40558L30.364 17.7193"/></g><defs><clipPath id="icon-7d87df436f0af1b"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = LarkOne;
