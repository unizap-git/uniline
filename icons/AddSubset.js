'use strict';

var React = require('react');

function AddSubset(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 28V35H18"/><path d="M18 28H42V42H18V35V28Z"/><line x1="6" y1="13.5" x2="6" y2="12.5"/><line x1="6" y1="20" x2="6" y2="19"/><line x1="6" y1="7" x2="6" y2="6"/><line x1="32" y1="13.5" x2="32" y2="12.5"/><line x1="32" y1="20" x2="32" y2="19"/><line x1="32" y1="7" x2="32" y2="6"/><line x1="32" y1="20" x2="31" y2="20"/><line x1="7" y1="20" x2="6" y2="20"/><line x1="7" y1="6" x2="6" y2="6"/><line x1="13" y1="6" x2="12" y2="6"/><line x1="19.5" y1="6" x2="18.5" y2="6"/><line x1="19.5" y1="20" x2="18.5" y2="20"/><line x1="26" y1="6" x2="25" y2="6"/><line x1="13" y1="20" x2="12" y2="20"/><line x1="26" y1="20" x2="25" y2="20"/><line x1="32" y1="6" x2="31" y2="6"/>' : '<path d="M10 28V35H18"/><path d="M18 28H42V42H18V35V28Z"/><line x1="6" y1="13.5" x2="6" y2="12.5"/><line x1="6" y1="20" x2="6" y2="19"/><line x1="6" y1="7" x2="6" y2="6"/><line x1="32" y1="13.5" x2="32" y2="12.5"/><line x1="32" y1="20" x2="32" y2="19"/><line x1="32" y1="7" x2="32" y2="6"/><line x1="32" y1="20" x2="31" y2="20"/><line x1="7" y1="20" x2="6" y2="20"/><line x1="7" y1="6" x2="6" y2="6"/><line x1="13" y1="6" x2="12" y2="6"/><line x1="19.5" y1="6" x2="18.5" y2="6"/><line x1="19.5" y1="20" x2="18.5" y2="20"/><line x1="26" y1="6" x2="25" y2="6"/><line x1="13" y1="20" x2="12" y2="20"/><line x1="26" y1="20" x2="25" y2="20"/><line x1="32" y1="6" x2="31" y2="6"/>';

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

module.exports = AddSubset;
