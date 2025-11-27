'use strict';

var React = require('react');

function Figma(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,12c0-1,.8-1.8,1.8-1.8h-1.8v1.8Z"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM15.6,12c0,1-.8,1.8-1.8,1.8s-1.8-.8-1.8-1.8v3.6c0,1-.8,1.8-1.8,1.8s-1.8-.8-1.8-1.8.8-1.8,1.8-1.8c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8h3.6c1,0,1.8.8,1.8,1.8s-.8,1.8-1.8,1.8c1,0,1.8.8,1.8,1.8Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M18 18C18 16.3431 19.3431 15 21 15H24V21H21C19.3431 21 18 19.6569 18 18Z"/><path d="M18 24C18 22.3431 19.3431 21 21 21H24V27H21C19.3431 27 18 25.6569 18 24Z"/><path d="M18 30C18 28.3431 19.3431 27 21 27H24V30C24 31.6569 22.6569 33 21 33C19.3431 33 18 31.6569 18 30Z"/><path d="M24 15H27C28.6569 15 30 16.3431 30 18C30 19.6569 28.6569 21 27 21H24V15Z"/><path d="M24 24C24 22.3431 25.3431 21 27 21C28.6569 21 30 22.3431 30 24C30 25.6569 28.6569 27 27 27C25.3431 27 24 25.6569 24 24Z"/>';

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

module.exports = Figma;
