'use strict';

var React = require('react');

function BabyBottle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 20H12V44H36V20Z"/><path d="M26 36H36"/><path d="M26 28H36"/><path d="M8 20H40"/><path d="M12 14H20.4V7.6C20.4 6.39815 21.6 4 24 4C26.4 4 27.6 6.39815 27.6 7.6V14H36"/>' : '<path d="M36 20H12V44H36V20Z"/><path d="M26 36H36"/><path d="M26 28H36"/><path d="M8 20H40"/><path d="M12 14H20.4V7.6C20.4 6.39815 21.6 4 24 4C26.4 4 27.6 6.39815 27.6 7.6V14H36"/>';

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

module.exports = BabyBottle;
