'use strict';

var React = require('react');

function Effects(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"/><path d="M36.1777 36.0537L44.1777 44.0179"/>' : '<path d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"/><path d="M36.1777 36.0537L44.1777 44.0179"/>';

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

module.exports = Effects;
