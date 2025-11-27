'use strict';

var React = require('react');

function SoundWave(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 14V12C6 8.68629 8.68629 6 12 6H36C39.3137 6 42 8.68629 42 12V14"/><path d="M32 18V30"/><path d="M40 20V28"/><path d="M24 15V33"/><path d="M16 18V30"/><path d="M8 20V28"/><path d="M6 34V36C6 39.3137 8.68629 42 12 42H36C39.3137 42 42 39.3137 42 36V34"/>' : '<path d="M6 14V12C6 8.68629 8.68629 6 12 6H36C39.3137 6 42 8.68629 42 12V14"/><path d="M32 18V30"/><path d="M40 20V28"/><path d="M24 15V33"/><path d="M16 18V30"/><path d="M8 20V28"/><path d="M6 34V36C6 39.3137 8.68629 42 12 42H36C39.3137 42 42 39.3137 42 36V34"/>';

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

module.exports = SoundWave;
