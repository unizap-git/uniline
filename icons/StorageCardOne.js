'use strict';

var React = require('react');

function StorageCardOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M33.7778 4H15.7778V12H33.7778V4Z"/><path d="M15.3661 4H10.7778C9.67326 4 8.77783 4.89543 8.77783 6V42C8.77783 43.1046 9.67326 44 10.7778 44H38.7778C39.8824 44 40.7778 43.1046 40.7778 42V6C40.7778 4.89543 39.8824 4 38.7778 4H34.1896"/><path d="M27.7775 20L19.7778 28.0012H29.7818L21.7781 36.0018"/>' : '<path d="M33.7778 4H15.7778V12H33.7778V4Z"/><path d="M15.3661 4H10.7778C9.67326 4 8.77783 4.89543 8.77783 6V42C8.77783 43.1046 9.67326 44 10.7778 44H38.7778C39.8824 44 40.7778 43.1046 40.7778 42V6C40.7778 4.89543 39.8824 4 38.7778 4H34.1896"/><path d="M27.7775 20L19.7778 28.0012H29.7818L21.7781 36.0018"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 49 48',
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

module.exports = StorageCardOne;
