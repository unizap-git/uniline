'use strict';

var React = require('react');

function Archery(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 42C22.9411 42 31 33.9411 31 24C31 14.0589 22.9411 6 13 6"/><circle cx="9" cy="24" r="3"/><path d="M12 24L42 24"/><path d="M38 20L42 24L38 28"/>' : '<path d="M13 42C22.9411 42 31 33.9411 31 24C31 14.0589 22.9411 6 13 6"/><circle cx="9" cy="24" r="3"/><path d="M12 24L42 24"/><path d="M38 20L42 24L38 28"/>';

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

module.exports = Archery;
