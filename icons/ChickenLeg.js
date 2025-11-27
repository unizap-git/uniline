'use strict';

var React = require('react');

function ChickenLeg(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,20.5l-3.5-3.5" stroke-miterlimit="2"/>   <circle cx="21.1" cy="20" r="1.2"/>   <circle cx="20" cy="21.1" r="1.2"/>   <path d="M14.9,3.9C12.2,1.1,7.8-.3,3.6,3.9-.6,8,.9,12.4,3.6,15.2c1.6,1.6,4.3,2.9,7.1,3.5.9.2,1.8.3,2.6.3,1.8,0,3.2-.4,4.1-1.3,2.7-2.7.9-10.4-2.5-13.8ZM6,11.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM8.5,13c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM8.5,10c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<g clip-path="url(#icon-34b63c71818cc704)"><path d="M33.3748 33.8744C37.6175 29.6318 34.7891 15.4897 28.4251 9.12572C25.5966 6.29723 17.465 0.286877 8.62606 9.12565C-0.212837 17.9644 5.7977 26.0963 8.62606 28.9246C14.9901 35.2887 29.1322 38.1171 33.3748 33.8744Z"/><path d="M41 41C40.2533 40.2533 36.0222 36.0222 33.9999 33.9999"/><circle cx="42.193" cy="40.0713" r="2.5" transform="rotate(135 42.193 40.0713)"/><circle cx="40.0719" cy="42.1924" r="2.5" transform="rotate(135 40.0719 42.1924)"/><circle cx="17" cy="18" r="2"/><circle cx="12" cy="21" r="2"/><circle cx="17" cy="24" r="2"/></g><defs><clipPath id="icon-34b63c71818cc704"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = ChickenLeg;
