'use strict';

var React = require('react');

function Steoller(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 24H12L14.5 34H36L40 24Z"/><path d="M12 24L8 15H3.5"/><circle cx="20" cy="41" r="3"/><circle cx="31" cy="41" r="3"/><path d="M23 8.0002L28 24.0002H40C40 24.0002 43.5 16.0002 37.5 10.0002C31.5 4.00022 25.6667 6.66686 23 8.0002Z"/>' : '<path d="M40 24H12L14.5 34H36L40 24Z"/><path d="M12 24L8 15H3.5"/><circle cx="20" cy="41" r="3"/><circle cx="31" cy="41" r="3"/><path d="M23 8.0002L28 24.0002H40C40 24.0002 43.5 16.0002 37.5 10.0002C31.5 4.00022 25.6667 6.66686 23 8.0002Z"/>';

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

module.exports = Steoller;
