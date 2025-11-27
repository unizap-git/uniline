'use strict';

var React = require('react');

function Upload(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<mask id="icon-29ed788d7f10b972" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48" style="mask-type: alpha"><path d="M48 0H0V48H48V0Z"/></mask><g mask="url(#icon-29ed788d7f10b972)"><path d="M6 24.0083V42H42V24"/><path d="M33 15L24 6L15 15"/><path d="M23.9917 32V6"/></g>' : '<mask id="icon-89871ea7f10b972" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48" style="mask-type: alpha"><path d="M48 0H0V48H48V0Z"/></mask><g mask="url(#icon-89871ea7f10b972)"><path d="M6 24.0083V42H42V24"/><path d="M33 15L24 6L15 15"/><path d="M23.9917 32V6"/></g>';

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

module.exports = Upload;
