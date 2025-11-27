'use strict';

var React = require('react');

function NetworkTree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="2" y="17" width="4" height="4"/>   <path d="M12,17v-8"/>   <path d="M4,17v-4h16v4"/>   <rect x="18" y="17" width="4" height="4"/>   <rect x="10" y="17" width="4" height="4"/>   <path d="M20,2H4c-.6,0-1,.4-1,1v6c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM8,7h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="4" y="34" width="8" height="8"/><rect x="8" y="6" width="32" height="12"/><path d="M24 34V18"/><path d="M8 34V26H40V34"/><rect x="36" y="34" width="8" height="8"/><rect x="20" y="34" width="8" height="8"/><path d="M14 12H16"/>';

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

module.exports = NetworkTree;
