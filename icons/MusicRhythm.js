'use strict';

var React = require('react');

function MusicRhythm(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 42H10"/><path d="M5 36H10"/><path d="M5 30H10"/><path d="M5 24H10"/><path d="M16 42H21"/><path d="M16 36H21"/><path d="M16 30H21"/><path d="M16 24H21"/><path d="M16 18H21"/><path d="M16 12H21"/><path d="M16 6H21"/><path d="M27 42H32"/><path d="M38 42H43"/><path d="M27 36H32"/><path d="M38 36H43"/><path d="M27 30H32"/><path d="M38 30H43"/><path d="M38 24H43"/><path d="M38 18H43"/>' : '<path d="M5 42H10"/><path d="M5 36H10"/><path d="M5 30H10"/><path d="M5 24H10"/><path d="M16 42H21"/><path d="M16 36H21"/><path d="M16 30H21"/><path d="M16 24H21"/><path d="M16 18H21"/><path d="M16 12H21"/><path d="M16 6H21"/><path d="M27 42H32"/><path d="M38 42H43"/><path d="M27 36H32"/><path d="M38 36H43"/><path d="M27 30H32"/><path d="M38 30H43"/><path d="M38 24H43"/><path d="M38 18H43"/>';

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

module.exports = MusicRhythm;
