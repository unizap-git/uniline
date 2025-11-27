'use strict';

var React = require('react');

function PhoneIncoming(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.3755 9.79417C16.1021 9.79417 16.7715 10.1882 17.1241 10.8234L19.5706 15.2303C19.8909 15.8073 19.9059 16.5051 19.6108 17.0954L17.254 21.8091C17.254 21.8091 17.937 25.3205 20.7954 28.1789C23.6538 31.0374 27.1535 31.7086 27.1535 31.7086L31.8664 29.3521C32.4571 29.0568 33.1555 29.0721 33.7327 29.393L38.152 31.85C38.7866 32.2028 39.1802 32.8719 39.1802 33.598L39.1802 38.6715C39.1802 41.2551 36.7803 43.1212 34.3322 42.2952C29.3043 40.5986 21.4996 37.3684 16.5528 32.4216C11.6059 27.4747 8.3757 19.6701 6.67916 14.6421C5.85314 12.1941 7.71923 9.79417 10.3029 9.79417L15.3755 9.79417Z"/><path d="M29 19.9999L42 7.49994"/><path d="M42 19.9999H29V6.99994"/>' : '<path d="M15.3755 9.79417C16.1021 9.79417 16.7715 10.1882 17.1241 10.8234L19.5706 15.2303C19.8909 15.8073 19.9059 16.5051 19.6108 17.0954L17.254 21.8091C17.254 21.8091 17.937 25.3205 20.7954 28.1789C23.6538 31.0374 27.1535 31.7086 27.1535 31.7086L31.8664 29.3521C32.4571 29.0568 33.1555 29.0721 33.7327 29.393L38.152 31.85C38.7866 32.2028 39.1802 32.8719 39.1802 33.598L39.1802 38.6715C39.1802 41.2551 36.7803 43.1212 34.3322 42.2952C29.3043 40.5986 21.4996 37.3684 16.5528 32.4216C11.6059 27.4747 8.3757 19.6701 6.67916 14.6421C5.85314 12.1941 7.71923 9.79417 10.3029 9.79417L15.3755 9.79417Z"/><path d="M29 19.9999L42 7.49994"/><path d="M42 19.9999H29V6.99994"/>';

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

module.exports = PhoneIncoming;
