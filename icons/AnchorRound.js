'use strict';

var React = require('react');

function AnchorRound(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 38C42 28.0589 33.9411 18 24 18C14.0589 18 6 28.0589 6 38"/><path d="M20 14L10 14"/><path d="M38 14H28"/><circle cx="7" cy="14" r="3"/><circle cx="41" cy="14" r="3"/><circle cx="24" cy="14" r="4"/>' : '<path d="M42 38C42 28.0589 33.9411 18 24 18C14.0589 18 6 28.0589 6 38"/><path d="M20 14L10 14"/><path d="M38 14H28"/><circle cx="7" cy="14" r="3"/><circle cx="41" cy="14" r="3"/><circle cx="24" cy="14" r="4"/>';

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

module.exports = AnchorRound;
