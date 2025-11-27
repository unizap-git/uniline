'use strict';

var React = require('react');

function Bedside(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,8H2c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-12c0-.6-.4-1-1-1ZM13,19h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM13,13h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M4,21v2"/>   <path d="M20,21v2"/>   <path d="M12,9v-4"/>   <path d="M16,5h-8"/>' : '<rect x="4" y="18" width="40" height="12"/><rect x="4" y="30" width="40" height="12"/><path d="M22 24H26"/><path d="M22 36H26"/><path d="M8 42V46"/><path d="M40 42V46"/><path d="M24 18V10"/><path d="M32 10H16"/>';

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

module.exports = Bedside;
