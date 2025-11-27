'use strict';

var React = require('react');

function HangerTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 32H40.9098C42.6165 32 44 30.6165 44 28.9098C44 27.7394 43.3387 26.6693 42.2918 26.1459L24 17L5.7082 26.1459C4.6613 26.6693 4 27.7394 4 28.9098C4 30.6165 5.38352 32 7.09017 32H11"/><path d="M11 30H37V32V44H11V32V30Z"/><path d="M24 17C24 17 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8"/>' : '<path d="M37 32H40.9098C42.6165 32 44 30.6165 44 28.9098C44 27.7394 43.3387 26.6693 42.2918 26.1459L24 17L5.7082 26.1459C4.6613 26.6693 4 27.7394 4 28.9098C4 30.6165 5.38352 32 7.09017 32H11"/><path d="M11 30H37V32V44H11V32V30Z"/><path d="M24 17C24 17 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8"/>';

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

module.exports = HangerTwo;
