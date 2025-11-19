'use strict';

var React = require('react');

function FileShield(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v5.703l-4.311-1.58a2 2 0 0 0-1.377 0l-5 1.832A2 2 0 0 0 8 11.861c.03 2.134.582 4.228 1.607 6.106.848 1.555 2 2.924 3.382 4.033H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clip-rule="evenodd"/>   <path fill-rule="evenodd" d="M15.345 9.061a1 1 0 0 0-.689 0l-5 1.833a1 1 0 0 0-.656.953c.028 1.97.538 3.905 1.485 5.641a12.425 12.425 0 0 0 3.956 4.34 1 1 0 0 0 1.12 0 12.426 12.426 0 0 0 3.954-4.34A12.14 12.14 0 0 0 21 11.848a1 1 0 0 0-.656-.954l-5-1.833ZM15 19.765a10.401 10.401 0 0 0 2.76-3.235 10.15 10.15 0 0 0 1.206-4.011L15 11.065v8.7Z" clip-rule="evenodd"/>' : '<path d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h6M9 3v4a1 1 0 0 1-1 1H4m11 13a11.426 11.426 0 0 1-3.637-3.99A11.139 11.139 0 0 1 10 11.833L15 10l5 1.833a11.137 11.137 0 0 1-1.363 5.176A11.425 11.425 0 0 1 15.001 21Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = FileShield;
