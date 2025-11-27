'use strict';

var React = require('react');

function BatteryEmpty(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"/><path d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"/>' : '<path d="M38 14H6C4.89543 14 4 14.8954 4 16V32C4 33.1046 4.89543 34 6 34H38C39.1046 34 40 33.1046 40 32V16C40 14.8954 39.1046 14 38 14Z"/><path d="M42 20H44C45.1046 20 46 20.8954 46 22V26C46 27.1046 45.1046 28 44 28H42V20Z"/>';

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

module.exports = BatteryEmpty;
