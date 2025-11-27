'use strict';

var React = require('react');

function VolumeMute(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect opacity="0.01" x="30" y="18" width="13" height="13"/><mask id="icon-9fa2260e6a0e536" maskUnits="userSpaceOnUse" x="30" y="18" width="13" height="13" style="mask-type: alpha"><rect x="30" y="18" width="13" height="13"/></mask><g mask="url(#icon-9fa2260e6a0e536)"><path d="M40.7348 20.2858L32.2495 28.7711"/><path d="M32.2496 20.2858L40.7349 28.7711"/></g><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"/>' : '<rect opacity="0.01" x="30" y="18" width="13" height="13"/><mask id="icon-4b75ad78e6a0e536" maskUnits="userSpaceOnUse" x="30" y="18" width="13" height="13" style="mask-type: alpha"><rect x="30" y="18" width="13" height="13"/></mask><g mask="url(#icon-4b75ad78e6a0e536)"><path d="M40.7348 20.2858L32.2495 28.7711"/><path d="M32.2496 20.2858L40.7349 28.7711"/></g><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"/>';

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

module.exports = VolumeMute;
