'use strict';

var React = require('react');

function FileSettingsOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"/><circle cx="34" cy="36" r="5"/><path d="M34 28V31"/><path d="M34 41V44"/><path d="M39.8281 30L37.7068 32.1213"/><path d="M29.8281 40L27.7068 42.1213"/><path d="M28 30L30.1213 32.1213"/><path d="M38 40L40.1213 42.1213"/><path d="M26 36H27.5H29"/><path d="M39 36H40.5H42"/><path d="M30 4V14H40"/>' : '<path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"/><circle cx="34" cy="36" r="5"/><path d="M34 28V31"/><path d="M34 41V44"/><path d="M39.8281 30L37.7068 32.1213"/><path d="M29.8281 40L27.7068 42.1213"/><path d="M28 30L30.1213 32.1213"/><path d="M38 40L40.1213 42.1213"/><path d="M26 36H27.5H29"/><path d="M39 36H40.5H42"/><path d="M30 4V14H40"/>';

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

module.exports = FileSettingsOne;
