'use strict';

var React = require('react');

function Group(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12 4H4V12H12V4Z"/><path d="M44 36H36V44H44V36Z"/><path d="M12 36H4V44H12V36Z"/><path d="M44 4H36V12H44V4Z"/><path d="M8 36V12"/><path d="M40 36V12"/><path d="M12 8H36"/><path d="M12 40H36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16H25.6V22.4H32V32H22.4V25.6H16V16Z"/>' : '<path d="M12 4H4V12H12V4Z"/><path d="M44 36H36V44H44V36Z"/><path d="M12 36H4V44H12V36Z"/><path d="M44 4H36V12H44V4Z"/><path d="M8 36V12"/><path d="M40 36V12"/><path d="M12 8H36"/><path d="M12 40H36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16H25.6V22.4H32V32H22.4V25.6H16V16Z"/>';

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

module.exports = Group;
