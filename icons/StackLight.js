'use strict';

var React = require('react');

function StackLight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="17" y="4" width="14" height="30"/><path d="M17 14H31"/><path d="M17 24H31"/><path d="M6.87891 7.87891L11.1215 12.1215"/><path d="M6.87891 33.1211L11.1215 28.8785"/><path d="M41.1211 7.87891L36.8785 12.1215"/><path d="M41.1211 33.1211L36.8785 28.8785"/><path d="M4 21H10"/><path d="M38 21H44"/><rect x="20" y="34" width="8" height="10"/>' : '<rect x="17" y="4" width="14" height="30"/><path d="M17 14H31"/><path d="M17 24H31"/><path d="M6.87891 7.87891L11.1215 12.1215"/><path d="M6.87891 33.1211L11.1215 28.8785"/><path d="M41.1211 7.87891L36.8785 12.1215"/><path d="M41.1211 33.1211L36.8785 28.8785"/><path d="M4 21H10"/><path d="M38 21H44"/><rect x="20" y="34" width="8" height="10"/>';

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

module.exports = StackLight;
