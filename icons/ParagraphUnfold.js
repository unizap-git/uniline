'use strict';

var React = require('react');

function ParagraphUnfold(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 4V44"/><path d="M38 4V8"/><path d="M38 22V26"/><path d="M38 40V44"/><path d="M14 15H42"/><path d="M14 33H42"/>' : '<path d="M6 4V44"/><path d="M38 4V8"/><path d="M38 22V26"/><path d="M38 40V44"/><path d="M14 15H42"/><path d="M14 33H42"/>';

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

module.exports = ParagraphUnfold;
