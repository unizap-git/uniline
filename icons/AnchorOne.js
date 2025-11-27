'use strict';

var React = require('react');

function AnchorOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 35C40 25.7953 32.8366 10 24 10C15.1634 10 8 25.7953 8 35"/><rect x="4" y="35" width="8" height="8"/><rect x="4" y="6" width="8" height="8"/><rect x="36" y="35" width="8" height="8"/><rect x="36" y="6" width="8" height="8"/><path d="M12 10H36"/>' : '<path d="M40 35C40 25.7953 32.8366 10 24 10C15.1634 10 8 25.7953 8 35"/><rect x="4" y="35" width="8" height="8"/><rect x="4" y="6" width="8" height="8"/><rect x="36" y="35" width="8" height="8"/><rect x="36" y="6" width="8" height="8"/><path d="M12 10H36"/>';

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

module.exports = AnchorOne;
