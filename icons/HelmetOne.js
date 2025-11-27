'use strict';

var React = require('react');

function HelmetOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 11C14.6112 11 7 18.8147 7 28.4545V35H41V28.4545C41 18.8147 33.3888 11 24 11Z"/><rect x="4" y="35" width="40" height="6"/><rect x="21" y="6" width="6" height="18"/>' : '<path d="M24 11C14.6112 11 7 18.8147 7 28.4545V35H41V28.4545C41 18.8147 33.3888 11 24 11Z"/><rect x="4" y="35" width="40" height="6"/><rect x="21" y="6" width="6" height="18"/>';

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

module.exports = HelmetOne;
