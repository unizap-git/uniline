'use strict';

var React = require('react');

function Microscope(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M26 44C30.3462 40.9919 32.6627 37.9513 32.9493 34.8782C33.2359 31.805 32.308 29.5123 30.1657 28"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6553 28.2227C30.1406 28.2227 32.1553 26.2079 32.1553 23.7227C32.1553 21.2374 30.1406 19.2227 27.6553 19.2227C25.17 19.2227 23.1553 21.2374 23.1553 23.7227C23.1553 26.2079 25.17 28.2227 27.6553 28.2227Z"/><path d="M24.2882 27L18.7783 32.5772L9.58594 23.3848L27.9707 4.99999L37.1631 14.1924L30.9764 20.3791"/><path d="M6.55762 28.1357L14.4195 35.8141"/><path d="M6 44H42"/>' : '<path d="M26 44C30.3462 40.9919 32.6627 37.9513 32.9493 34.8782C33.2359 31.805 32.308 29.5123 30.1657 28"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6553 28.2227C30.1406 28.2227 32.1553 26.2079 32.1553 23.7227C32.1553 21.2374 30.1406 19.2227 27.6553 19.2227C25.17 19.2227 23.1553 21.2374 23.1553 23.7227C23.1553 26.2079 25.17 28.2227 27.6553 28.2227Z"/><path d="M24.2882 27L18.7783 32.5772L9.58594 23.3848L27.9707 4.99999L37.1631 14.1924L30.9764 20.3791"/><path d="M6.55762 28.1357L14.4195 35.8141"/><path d="M6 44H42"/>';

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

module.exports = Microscope;
