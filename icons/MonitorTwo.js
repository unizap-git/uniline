'use strict';

var React = require('react');

function MonitorTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42.5 16.3869C41.5521 14.0859 40.1874 12.0006 38.5 10.225C34.8561 6.39055 29.7072 4 24 4C12.9543 4 4 12.9543 4 24H14L19 32L28 14L35 24H44C44 35.0457 35.0457 44 24 44C18.5491 44 13.6075 41.8194 10 38.2829C8.17976 36.4985 6.69917 34.3688 5.66417 32"/>' : '<path d="M42.5 16.3869C41.5521 14.0859 40.1874 12.0006 38.5 10.225C34.8561 6.39055 29.7072 4 24 4C12.9543 4 4 12.9543 4 24H14L19 32L28 14L35 24H44C44 35.0457 35.0457 44 24 44C18.5491 44 13.6075 41.8194 10 38.2829C8.17976 36.4985 6.69917 34.3688 5.66417 32"/>';

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

module.exports = MonitorTwo;
