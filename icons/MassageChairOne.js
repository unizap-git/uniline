'use strict';

var React = require('react');

function MassageChairOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15 28V15.6522C15 13 18 10 24 10C30 10 33 13 33 15.6522V28"/><path d="M12 34V28H36V34H12Z"/><path d="M20 4H28"/><path d="M8 16V28H40V16"/><path d="M17 43L31 43"/><path d="M24 34V43"/><path d="M24 4V10"/>' : '<path d="M15 28V15.6522C15 13 18 10 24 10C30 10 33 13 33 15.6522V28"/><path d="M12 34V28H36V34H12Z"/><path d="M20 4H28"/><path d="M8 16V28H40V16"/><path d="M17 43L31 43"/><path d="M24 34V43"/><path d="M24 4V10"/>';

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

module.exports = MassageChairOne;
