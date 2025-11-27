'use strict';

var React = require('react');

function Ungroup(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.2727 4H4V11.2727H11.2727V4Z"/><path d="M43.9998 36.7271H36.7271V43.9998H43.9998V36.7271Z"/><path d="M11.2727 24H4V31.2727H11.2727V24Z"/><path d="M23.9998 36.7271H16.7271V43.9998H23.9998V36.7271Z"/><path d="M31.2727 4H24V11.2727H31.2727V4Z"/><path d="M43.9998 16.7271H36.7271V23.9998H43.9998V16.7271Z"/><path d="M11.2729 7.63623H24.0002"/><path d="M24 40.3638H36.7273"/><path d="M11.2729 27.6366H27.6366V11.2729"/><path d="M28.8275 20.3633H36.7269M20.3633 36.7269V27.6282V36.7269Z"/><path d="M7.63672 11.2725V23.9997"/><path d="M40.3633 24V36.7273"/>' : '<path d="M11.2727 4H4V11.2727H11.2727V4Z"/><path d="M43.9998 36.7271H36.7271V43.9998H43.9998V36.7271Z"/><path d="M11.2727 24H4V31.2727H11.2727V24Z"/><path d="M23.9998 36.7271H16.7271V43.9998H23.9998V36.7271Z"/><path d="M31.2727 4H24V11.2727H31.2727V4Z"/><path d="M43.9998 16.7271H36.7271V23.9998H43.9998V16.7271Z"/><path d="M11.2729 7.63623H24.0002"/><path d="M24 40.3638H36.7273"/><path d="M11.2729 27.6366H27.6366V11.2729"/><path d="M28.8275 20.3633H36.7269M20.3633 36.7269V27.6282V36.7269Z"/><path d="M7.63672 11.2725V23.9997"/><path d="M40.3633 24V36.7273"/>';

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

module.exports = Ungroup;
