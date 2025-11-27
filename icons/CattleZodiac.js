'use strict';

var React = require('react');

function CattleZodiac(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 31L44 37"/><path d="M5 44V18C5 13 7 8 16 6L30 4"/><path d="M19 20C20.5 21.5 22.5 25 28 25C31.1667 25 38 26.5 38 33V44"/><path d="M16 6C22 6 25 9 25 16"/><path d="M30 44C30 39.5817 26.4183 36 22 36C17.5817 36 14 39.5817 14 44"/>' : '<path d="M38 31L44 37"/><path d="M5 44V18C5 13 7 8 16 6L30 4"/><path d="M19 20C20.5 21.5 22.5 25 28 25C31.1667 25 38 26.5 38 33V44"/><path d="M16 6C22 6 25 9 25 16"/><path d="M30 44C30 39.5817 26.4183 36 22 36C17.5817 36 14 39.5817 14 44"/>';

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

module.exports = CattleZodiac;
