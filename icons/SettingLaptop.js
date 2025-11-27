'use strict';

var React = require('react');

function SettingLaptop(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21 9H11C9.34315 9 8 10.3431 8 12V33H40V26"/><path d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"/><circle cx="35" cy="14" r="3"/><path d="M35 21V17"/><path d="M35 11V7"/><path d="M28.9378 17.5L32.4019 15.5"/><path d="M37.5982 12.5L41.0623 10.5"/><path d="M28.9375 10.5L32.4016 12.5"/><path d="M37.5982 15.5L41.0623 17.5"/>' : '<path d="M21 9H11C9.34315 9 8 10.3431 8 12V33H40V26"/><path d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"/><circle cx="35" cy="14" r="3"/><path d="M35 21V17"/><path d="M35 11V7"/><path d="M28.9378 17.5L32.4019 15.5"/><path d="M37.5982 12.5L41.0623 10.5"/><path d="M28.9375 10.5L32.4016 12.5"/><path d="M37.5982 15.5L41.0623 17.5"/>';

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

module.exports = SettingLaptop;
