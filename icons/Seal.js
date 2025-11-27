'use strict';

var React = require('react');

function Seal(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 37C5 35.8954 5.89543 35 7 35H41C42.1046 35 43 35.8954 43 37V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V37Z"/><path d="M5 31C5 29.8954 5.89543 29 7 29H41C42.1046 29 43 29.8954 43 31V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V31Z"/><path d="M18.763 15.6637C18.9051 15.2657 19.2821 15 19.7047 15H28.2953C28.7179 15 29.0949 15.2657 29.237 15.6637L34 29H14L18.763 15.6637Z"/><rect x="15" y="4" width="18" height="10.8" rx="5.4"/>' : '<path d="M5 37C5 35.8954 5.89543 35 7 35H41C42.1046 35 43 35.8954 43 37V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V37Z"/><path d="M5 31C5 29.8954 5.89543 29 7 29H41C42.1046 29 43 29.8954 43 31V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V31Z"/><path d="M18.763 15.6637C18.9051 15.2657 19.2821 15 19.7047 15H28.2953C28.7179 15 29.0949 15.2657 29.237 15.6637L34 29H14L18.763 15.6637Z"/><rect x="15" y="4" width="18" height="10.8" rx="5.4"/>';

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

module.exports = Seal;
