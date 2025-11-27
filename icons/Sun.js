'use strict';

var React = require('react');

function Sun(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.15039 9.15088L11.3778 11.3783"/><path d="M3 24H6.15"/><path d="M9.15039 38.8495L11.3778 36.6221"/><path d="M38.8495 38.8495L36.6221 36.6221"/><path d="M44.9996 24H41.8496"/><path d="M38.8495 9.15088L36.6221 11.3783"/><path d="M24 3V6.15"/><path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"/><path d="M24 45.0001V41.8501"/>' : '<path d="M11,11l2,2"/>   <path d="M5.6,24h2.8"/>   <path d="M11,37l2-2"/>   <path d="M37,37l-2-2"/>   <path d="M42.4,24h-2.8"/>   <path d="M37,11l-2,2"/>   <path d="M24,5.6v2.8"/>   <path d="M24,34.5c5.8,0,10.5-4.7,10.5-10.5s-4.7-10.5-10.5-10.5-10.5,4.7-10.5,10.5,4.7,10.5,10.5,10.5Z"/>   <path d="M24,42.4v-2.8"/>';

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

module.exports = Sun;
