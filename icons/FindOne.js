'use strict';

var React = require('react');

function FindOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23.8 14C29.4333 14 34 18.4772 34 24C34 29.5228 29.4333 34 23.8 34C21.1876 34 18.8046 33.0372 17 31.4537"/><path d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C18.5856 44 13.6737 41.8485 10.0726 38.3537C6.32733 34.719 4 29.6313 4 24C4 18.6326 6.11433 13.759 9.55556 10.1667"/><path d="M9.55566 10.167L24.0001 24.0003L10.0727 38.3539"/>' : '<path d="M23.8 14C29.4333 14 34 18.4772 34 24C34 29.5228 29.4333 34 23.8 34C21.1876 34 18.8046 33.0372 17 31.4537"/><path d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C18.5856 44 13.6737 41.8485 10.0726 38.3537C6.32733 34.719 4 29.6313 4 24C4 18.6326 6.11433 13.759 9.55556 10.1667"/><path d="M9.55566 10.167L24.0001 24.0003L10.0727 38.3539"/>';

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

module.exports = FindOne;
