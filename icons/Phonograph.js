'use strict';

var React = require('react');

function Phonograph(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="3" y="3" width="18" height="18" rx="1.5" ry="1.5" stroke-miterlimit="2"/>   <path d="M12,6c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5,6.5-2.9,6.5-6.5-2.9-6.5-6.5-6.5ZM12,13.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <path d="M18,17h0c.6,0,1,.4,1,1h0c0,.6-.4,1-1,1h0c-.6,0-1-.4-1-1h0c0-.6.4-1,1-1Z"/>   <path d="M14,10l4-4"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><circle cx="24" cy="25" r="11"/><rect x="22" y="23" width="4" height="4" rx="2"/><rect x="34" y="34" width="4" height="4" rx="2"/><path d="M28 20L36 12"/>';

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

module.exports = Phonograph;
