'use strict';

var React = require('react');

function DashboardCar(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.57198 37.428C3.70527 33.7128 2 29.0556 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 29.0556 44.2947 33.7128 41.428 37.428"/><path d="M12.3035 31.6965C10.8474 29.4881 10 26.843 10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 26.843 37.1526 29.4881 35.6965 31.6965"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 30L40 46H8L24 30Z"/>' : '<path d="M6.57198 37.428C3.70527 33.7128 2 29.0556 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 29.0556 44.2947 33.7128 41.428 37.428"/><path d="M12.3035 31.6965C10.8474 29.4881 10 26.843 10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 26.843 37.1526 29.4881 35.6965 31.6965"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 30L40 46H8L24 30Z"/>';

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

module.exports = DashboardCar;
