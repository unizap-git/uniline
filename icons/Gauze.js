'use strict';

var React = require('react');

function Gauze(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13,2.5C7.8,2.5,3.5,6.8,3.5,12s4.3,9.5,9.5,9.5,9.5-4.3,9.5-9.5S18.2,2.5,13,2.5ZM13,16.5c-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5,4.5,2,4.5,4.5-2,4.5-4.5,4.5Z"/>   <path d="M2.5,20.5h10.5"/>' : '<circle cx="26" cy="24" r="17"/><circle cx="26" cy="24" r="7"/><path d="M5 41L26 41"/>';

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

module.exports = Gauze;
