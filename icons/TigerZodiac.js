'use strict';

var React = require('react');

function TigerZodiac(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 44V15C6 13.5 7 9.8 11 7L8.5 4C10.1667 4 14.1 4.6 16.5 7C20.6667 6.66667 30 9 26.5 15C25.6101 16.3349 24 17 21 17"/><path d="M19 24C23 24 31 29 31 38C31 40 32 42.8834 36.1343 42.4015C39 42.0674 41.6269 40.0523 43 35.8759"/><path d="M17 44.0003C17 40.0001 19 35.0003 27 35.0003L30 35.0003"/>' : '<path d="M6 44V15C6 13.5 7 9.8 11 7L8.5 4C10.1667 4 14.1 4.6 16.5 7C20.6667 6.66667 30 9 26.5 15C25.6101 16.3349 24 17 21 17"/><path d="M19 24C23 24 31 29 31 38C31 40 32 42.8834 36.1343 42.4015C39 42.0674 41.6269 40.0523 43 35.8759"/><path d="M17 44.0003C17 40.0001 19 35.0003 27 35.0003L30 35.0003"/>';

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

module.exports = TigerZodiac;
