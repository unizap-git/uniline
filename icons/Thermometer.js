'use strict';

var React = require('react');

function Thermometer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16,12.5v-7.5c0-2.2-1.8-4-4-4s-4,1.8-4,4v7.5c-1.3,1.1-2,2.7-2,4.5,0,3.3,2.7,6,6,6s6-2.7,6-6-.7-3.3-2-4.5ZM12,20c-1.7,0-3-1.3-3-3s.8-2.4,2-2.8v-5.7c0-.6.4-1,1-1s1,.4,1,1v5.7c1.2.4,2,1.5,2,2.8s-1.3,3-3,3Z"/>' : '<path d="M18 25.9993V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V25.9993C32.4289 27.8237 34 30.7284 34 34C34 39.5228 29.5228 44 24 44C18.4772 44 14 39.5228 14 34C14 30.7284 15.5711 27.8237 18 25.9993Z"/><path d="M24 17V30"/><path d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z"/>';

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

module.exports = Thermometer;
