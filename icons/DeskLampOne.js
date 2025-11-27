'use strict';

var React = require('react');

function DeskLampOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 40.9989H42"/><path d="M39 18.999L39 40.999"/><path d="M27 13.999L39 23.999"/><path d="M26.3399 14.5773C26.5526 14.3398 26.7433 14.0744 26.9065 13.7825C28.0894 11.6675 27.3562 8.8005 25.3075 7.57941C23.2587 6.35832 20.4884 7.13826 19.3038 9.25217C19.1168 9.58576 19.0131 9.84723 18.9203 10.1561C15.3443 9.88004 11.913 11.6307 10 15.0512L26.6935 25C28.6065 21.5794 28.3595 17.6363 26.3399 14.5773Z"/>' : '<path d="M6 40.9989H42"/><path d="M39 18.999L39 40.999"/><path d="M27 13.999L39 23.999"/><path d="M26.3399 14.5773C26.5526 14.3398 26.7433 14.0744 26.9065 13.7825C28.0894 11.6675 27.3562 8.8005 25.3075 7.57941C23.2587 6.35832 20.4884 7.13826 19.3038 9.25217C19.1168 9.58576 19.0131 9.84723 18.9203 10.1561C15.3443 9.88004 11.913 11.6307 10 15.0512L26.6935 25C28.6065 21.5794 28.3595 17.6363 26.3399 14.5773Z"/>';

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

module.exports = DeskLampOne;
