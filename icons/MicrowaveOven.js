'use strict';

var React = require('react');

function MicrowaveOven(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="6" width="40" height="30" rx="2"/><path d="M38.0002 15H34.0002"/><path d="M38 21H34"/><rect x="10" y="15" width="17" height="12"/><circle cx="36" cy="27" r="2"/><path d="M12 36V42"/><path d="M36 36V42"/>' : '<rect x="4" y="6" width="40" height="30" rx="2"/><path d="M38.0002 15H34.0002"/><path d="M38 21H34"/><rect x="10" y="15" width="17" height="12"/><circle cx="36" cy="27" r="2"/><path d="M12 36V42"/><path d="M36 36V42"/>';

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

module.exports = MicrowaveOven;
