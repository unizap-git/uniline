'use strict';

var React = require('react');

function AdjacentItem(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 29H42V41H14V35V29Z"/><path d="M14 7H42V19H14V13V7Z"/><path d="M14 13V19H42V7H14V13ZM14 13H6V35H14M14 35V41H42V29H14V35Z"/><path d="M14 13H6V35H14"/><path d="M14 29H42V41H14V35V29Z"/><path d="M14 7H42V19H14V13V7Z"/>' : '<path d="M14 29H42V41H14V35V29Z"/><path d="M14 7H42V19H14V13V7Z"/><path d="M14 13V19H42V7H14V13ZM14 13H6V35H14M14 35V41H42V29H14V35Z"/><path d="M14 13H6V35H14"/><path d="M14 29H42V41H14V35V29Z"/><path d="M14 7H42V19H14V13V7Z"/>';

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

module.exports = AdjacentItem;
