'use strict';

var React = require('react');

function Trunk(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,6v-3"/>   <path d="M14,6v-3"/>   <path d="M8,2h8"/>   <path d="M9,20v2"/>   <path d="M15,20v2"/>   <path d="M16,5h-8c-1.7,0-3,1.3-3,3v10c0,1.7,1.3,3,3,3h8c1.7,0,3-1.3,3-3v-10c0-1.7-1.3-3-3-3ZM14,13.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="12" y="12" width="24" height="28" rx="4"/><path d="M20 12V6"/><path d="M28 12V6"/><path d="M16 4H32"/><path d="M18 40V44"/><path d="M30 40V44"/><path d="M20 25H24H28"/>';

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

module.exports = Trunk;
