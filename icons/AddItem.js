'use strict';

var React = require('react');

function AddItem(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 30V24"/><path d="M6 30H24H42V42H6V30Z"/><line x1="6" y1="12.5" x2="6" y2="11.5"/><line x1="6" y1="18" x2="6" y2="17"/><line x1="6" y1="7" x2="6" y2="6"/><line x1="42" y1="12.5" x2="42" y2="11.5"/><line x1="42" y1="18" x2="42" y2="17"/><line x1="42" y1="7" x2="42" y2="6"/><line x1="42" y1="18" x2="41" y2="18"/><line x1="7" y1="18" x2="6" y2="18"/><line x1="7" y1="6" x2="6" y2="6"/><line x1="14" y1="6" x2="13" y2="6"/><line x1="21" y1="6" x2="20" y2="6"/><line x1="21" y1="18" x2="20" y2="18"/><line x1="28" y1="6" x2="27" y2="6"/><line x1="14" y1="18" x2="13" y2="18"/><line x1="28" y1="18" x2="27" y2="18"/><line x1="35" y1="6" x2="34" y2="6"/><line x1="35" y1="18" x2="34" y2="18"/><line x1="42" y1="6" x2="41" y2="6"/>' : '<path d="M24 30V24"/><path d="M6 30H24H42V42H6V30Z"/><line x1="6" y1="12.5" x2="6" y2="11.5"/><line x1="6" y1="18" x2="6" y2="17"/><line x1="6" y1="7" x2="6" y2="6"/><line x1="42" y1="12.5" x2="42" y2="11.5"/><line x1="42" y1="18" x2="42" y2="17"/><line x1="42" y1="7" x2="42" y2="6"/><line x1="42" y1="18" x2="41" y2="18"/><line x1="7" y1="18" x2="6" y2="18"/><line x1="7" y1="6" x2="6" y2="6"/><line x1="14" y1="6" x2="13" y2="6"/><line x1="21" y1="6" x2="20" y2="6"/><line x1="21" y1="18" x2="20" y2="18"/><line x1="28" y1="6" x2="27" y2="6"/><line x1="14" y1="18" x2="13" y2="18"/><line x1="28" y1="18" x2="27" y2="18"/><line x1="35" y1="6" x2="34" y2="6"/><line x1="35" y1="18" x2="34" y2="18"/><line x1="42" y1="6" x2="41" y2="6"/>';

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

module.exports = AddItem;
