'use strict';

var React = require('react');

function DatabaseNetworkPoint(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 36V30"/><path d="M20 40H6"/><path d="M28 40H42"/><path d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"/><path d="M37 17C37 24.1797 31.1797 30 24 30C16.8203 30 11 24.1797 11 17M37 17C37 9.8203 31.1797 4 24 4C16.8203 4 11 9.8203 11 17M37 17H11"/><path d="M29 17C29 24.1797 26.7614 30 24 30C21.2386 30 19 24.1797 19 17C19 9.8203 21.2386 4 24 4C26.7614 4 29 9.8203 29 17Z"/><path d="M37 17H11"/>' : '<path d="M24 36V30"/><path d="M20 40H6"/><path d="M28 40H42"/><path d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"/><path d="M37 17C37 24.1797 31.1797 30 24 30C16.8203 30 11 24.1797 11 17M37 17C37 9.8203 31.1797 4 24 4C16.8203 4 11 9.8203 11 17M37 17H11"/><path d="M29 17C29 24.1797 26.7614 30 24 30C21.2386 30 19 24.1797 19 17C19 9.8203 21.2386 4 24 4C26.7614 4 29 9.8203 29 17Z"/><path d="M37 17H11"/>';

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

module.exports = DatabaseNetworkPoint;
