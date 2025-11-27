'use strict';

var React = require('react');

function RopeSkipping(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 32C10 32 10 14.866 10 11C10 7.13401 13.134 4 17 4C20.866 4 24 7.13401 24 11C24 11 24 33.134 24 37C24 40.866 27.134 44 31 44C34.866 44 38 40.866 38 37V16"/><path d="M41 4V16H35V4H41Z"/><path d="M32 16H35M44 16H41M41 16V4H35V16M41 16H35"/><path d="M7 44V32H13V44H7Z"/><path d="M16 32H13M4 32H7M7 32V44H13V32M7 32H13"/>' : '<path d="M10 32C10 32 10 14.866 10 11C10 7.13401 13.134 4 17 4C20.866 4 24 7.13401 24 11C24 11 24 33.134 24 37C24 40.866 27.134 44 31 44C34.866 44 38 40.866 38 37V16"/><path d="M41 4V16H35V4H41Z"/><path d="M32 16H35M44 16H41M41 16V4H35V16M41 16H35"/><path d="M7 44V32H13V44H7Z"/><path d="M16 32H13M4 32H7M7 32V44H13V32M7 32H13"/>';

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

module.exports = RopeSkipping;
