'use strict';

var React = require('react');

function PrinterOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M32 33H42C43.1046 33 44 32.1046 44 31V15C44 13.8954 43.1046 13 42 13H32"/><path d="M16 33H6C4.89543 33 4 32.1046 4 31V15C4 13.8954 4.89543 13 6 13H16"/><path d="M12 13V19H36V13"/><path d="M16 13V5H32V13"/><path d="M16 29V43H32V29"/><path d="M22 35H26"/><line x1="13" y1="27" x2="35" y2="27"/>' : '<path d="M32 33H42C43.1046 33 44 32.1046 44 31V15C44 13.8954 43.1046 13 42 13H32"/><path d="M16 33H6C4.89543 33 4 32.1046 4 31V15C4 13.8954 4.89543 13 6 13H16"/><path d="M12 13V19H36V13"/><path d="M16 13V5H32V13"/><path d="M16 29V43H32V29"/><path d="M22 35H26"/><line x1="13" y1="27" x2="35" y2="27"/>';

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

module.exports = PrinterOne;
