'use strict';

var React = require('react');

function NewspaperFolding(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11,22l-.5-4"/>   <path d="M21,5h-8c-.3,0-.6.1-.7.3-.2.2-.3.5-.2.8l1.4,11.6-3.2,3.7c-.3.3-.3.7-.2,1.1s.5.6.9.6h10c.6,0,1-.4,1-1V6c0-.6-.4-1-1-1ZM16.5,15h-2.5c-.6,0-1-.4-1-1s.4-1,1-1h2.5c.6,0,1,.4,1,1s-.4,1-1,1ZM16.5,11h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M13.5,1.9c0-.5-.5-.9-1-.9H3c-.6,0-1,.4-1,1v16c0,.6.4,1,1,1h11.5c.3,0,.6-.1.8-.3.2-.2.3-.5.2-.8L13.5,1.9ZM6,5h3.5c.6,0,1,.4,1,1s-.4,1-1,1h-3.5c-.6,0-1-.4-1-1s.4-1,1-1ZM6,9h4c.6,0,1,.4,1,1s-.4,1-1,1h-4c-.6,0-1-.4-1-1s.4-1,1-1ZM10.5,15h-4.5c-.6,0-1-.4-1-1s.4-1,1-1h4.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M22 44L21 36"/><path d="M42 44V12H26L27 20L28 28L29 36L22 44H42Z"/><path d="M28 28H33"/><path d="M27 20H33"/><path d="M6 4H25L26 12L27 20L28 28L29 36H21H6V4Z"/><path d="M12 12H19"/><path d="M12 20H20"/><path d="M12 28H21"/>';

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

module.exports = NewspaperFolding;
