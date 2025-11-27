'use strict';

var React = require('react');

function FolderSettingsOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"/><circle cx="35" cy="35" r="4"/><path d="M35 28V31"/><path d="M35 39V42"/><path d="M39.8281 30L37.7068 32.1213"/><path d="M31.8281 38L29.7068 40.1213"/><path d="M30 30L32.1213 32.1213"/><path d="M38 38L40.1213 40.1213"/><path d="M28 35H29.5H31"/><path d="M39 35H40.5H42"/>' : '<path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"/><circle cx="35" cy="35" r="4"/><path d="M35 28V31"/><path d="M35 39V42"/><path d="M39.8281 30L37.7068 32.1213"/><path d="M31.8281 38L29.7068 40.1213"/><path d="M30 30L32.1213 32.1213"/><path d="M38 38L40.1213 40.1213"/><path d="M28 35H29.5H31"/><path d="M39 35H40.5H42"/>';

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

module.exports = FolderSettingsOne;
