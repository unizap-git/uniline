'use strict';

var React = require('react');

function HotelDoNotClean(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,7.5v-.5c0-2.8-2.2-5-5-5s-5,2.2-5,5M16.5,7.5c0,6-10,6-10,6v8.5h10V7.5Z"/>   <path d="M6.5,13.5v8.5h10V7.5c0,6-10,6-10,6ZM13.7,18.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.8-.8-.8.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.8-.8-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.8.8.8-.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.8.8.8.8Z"/>' : '<path d="M13 27C13 27 33 27 33 15V44H13V27Z"/><path d="M33 15V14C33 8.47715 28.5228 4 23 4C17.4772 4 13 8.47715 13 14M33 15C33 27 13 27 13 27V44H33V15Z"/><path d="M20 32L26 38"/><path d="M26 32L20 38"/>';

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

module.exports = HotelDoNotClean;
