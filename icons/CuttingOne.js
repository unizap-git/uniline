'use strict';

var React = require('react');

function CuttingOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect width="48" height="48" fill-opacity="0.01"/><path d="M11 42C13.7614 42 16 39.7614 16 37C16 34.2386 13.7614 32 11 32C8.23858 32 6 34.2386 6 37C6 39.7614 8.23858 42 11 42Z"/><path d="M37 42C39.7614 42 42 39.7614 42 37C42 34.2386 39.7614 32 37 32C34.2386 32 32 34.2386 32 37C32 39.7614 34.2386 42 37 42Z"/><path d="M15.3774 39.4131L17.5 35.8162L34.5 6.37138"/><path d="M13.4957 6.17518L30.4957 35.62L32.6265 39.4131"/>' : '<rect width="48" height="48" fill-opacity="0.01"/><path d="M11 42C13.7614 42 16 39.7614 16 37C16 34.2386 13.7614 32 11 32C8.23858 32 6 34.2386 6 37C6 39.7614 8.23858 42 11 42Z"/><path d="M37 42C39.7614 42 42 39.7614 42 37C42 34.2386 39.7614 32 37 32C34.2386 32 32 34.2386 32 37C32 39.7614 34.2386 42 37 42Z"/><path d="M15.3774 39.4131L17.5 35.8162L34.5 6.37138"/><path d="M13.4957 6.17518L30.4957 35.62L32.6265 39.4131"/>';

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

module.exports = CuttingOne;
