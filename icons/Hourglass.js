'use strict';

var React = require('react');

function Hourglass(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 4H40"/><path d="M8 44H40"/><path d="M12 4V16L21 26"/><path d="M36 44V29.5L27 21"/><path d="M12 44V30L18.5 23.5"/><path d="M36 4V16L29.5 23.5"/><path d="M18 33H19"/><path d="M29.1465 32.6465L29.8536 33.3536"/><path d="M24 38H25"/>' : '<path d="M8 4H40"/><path d="M8 44H40"/><path d="M12 4V16L21 26"/><path d="M36 44V29.5L27 21"/><path d="M12 44V30L18.5 23.5"/><path d="M36 4V16L29.5 23.5"/><path d="M18 33H19"/><path d="M29.1465 32.6465L29.8536 33.3536"/><path d="M24 38H25"/>';

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

module.exports = Hourglass;
