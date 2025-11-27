'use strict';

var React = require('react');

function WeixinMarket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 14H10C8.89543 14 8 14.8954 8 16V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V16C40 14.8954 39.1046 14 38 14Z"/><path d="M17 18V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11V18"/>' : '<path d="M38 14H10C8.89543 14 8 14.8954 8 16V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V16C40 14.8954 39.1046 14 38 14Z"/><path d="M17 18V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11V18"/>';

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

module.exports = WeixinMarket;
