'use strict';

var React = require('react');

function NextJs(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,.7C5.7.7.7,5.7.7,12s5.1,11.3,11.3,11.3,11.3-5.1,11.3-11.3S18.3.7,12,.7ZM15.1,7.5h1.5v6h-1.5v-6ZM18.2,21.4l-9.2-12v7.1h-1.5V7.5h1.9l10.1,13c-.4.3-.8.6-1.2.9Z" fill-rule="evenodd"/>' : '<polyline points="8.4 16.2 8.4 7.2 18.4 20.4" fill-rule="evenodd"/>   <line x1="15.7" y1="13.2" x2="15.7" y2="7.2" stroke-miterlimit="10"/>   <circle cx="12" cy="12" r="10.6" stroke-miterlimit="10"/>';

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

module.exports = NextJs;
