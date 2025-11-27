'use strict';

var React = require('react');

function Qiyehao(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M28 19L14.863 12.0858C12.1994 10.6839 9 12.6154 9 15.6255V30"/><path d="M9 30L18 23V14"/><path d="M11 12L20 5L36 13L28 19"/><path d="M20 29L33.137 35.9142C35.8006 37.3161 39 35.3846 39 32.3745V18"/><path d="M39 18L30 25V34"/><path d="M37 36L28 43L12 35L20 29"/>' : '<path d="M28 19L14.863 12.0858C12.1994 10.6839 9 12.6154 9 15.6255V30"/><path d="M9 30L18 23V14"/><path d="M11 12L20 5L36 13L28 19"/><path d="M20 29L33.137 35.9142C35.8006 37.3161 39 35.3846 39 32.3745V18"/><path d="M39 18L30 25V34"/><path d="M37 36L28 43L12 35L20 29"/>';

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

module.exports = Qiyehao;
