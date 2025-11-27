'use strict';

var React = require('react');

function LinkThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="34.6074" y="3.4939" width="14" height="18" rx="2" transform="rotate(45 34.6074 3.4939)"/><rect x="16.2227" y="21.8787" width="14" height="18" rx="2" transform="rotate(45 16.2227 21.8787)"/><path d="M31.0723 16.929L16.9301 31.0711"/>' : '<rect x="34.6074" y="3.4939" width="14" height="18" rx="2" transform="rotate(45 34.6074 3.4939)"/><rect x="16.2227" y="21.8787" width="14" height="18" rx="2" transform="rotate(45 16.2227 21.8787)"/><path d="M31.0723 16.929L16.9301 31.0711"/>';

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

module.exports = LinkThree;
