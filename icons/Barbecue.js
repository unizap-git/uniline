'use strict';

var React = require('react');

function Barbecue(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="12" y="4" width="8" height="8" rx="4"/><rect x="12" y="22" width="8" height="8" rx="4"/><line x1="16" y1="31" x2="16" y2="44"/><rect x="28" y="4" width="8" height="8" rx="4"/><rect x="28" y="22" width="8" height="8" rx="4"/><line x1="32" y1="31" x2="32" y2="44"/><path d="M13 17H19" stroke-miterlimit="2"/><path d="M29 17H35" stroke-miterlimit="2"/><path d="M13 36H19" stroke-miterlimit="2"/><path d="M29 36H35" stroke-miterlimit="2"/><line x1="16" y1="14" x2="16" y2="20"/><line x1="32" y1="14" x2="32" y2="20"/>' : '<rect x="12" y="4" width="8" height="8" rx="4"/><rect x="12" y="22" width="8" height="8" rx="4"/><line x1="16" y1="31" x2="16" y2="44"/><rect x="28" y="4" width="8" height="8" rx="4"/><rect x="28" y="22" width="8" height="8" rx="4"/><line x1="32" y1="31" x2="32" y2="44"/><path d="M13 17H19" stroke-miterlimit="2"/><path d="M29 17H35" stroke-miterlimit="2"/><path d="M13 36H19" stroke-miterlimit="2"/><path d="M29 36H35" stroke-miterlimit="2"/><line x1="16" y1="14" x2="16" y2="20"/><line x1="32" y1="14" x2="32" y2="20"/>';

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

module.exports = Barbecue;
