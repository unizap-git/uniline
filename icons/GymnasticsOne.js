'use strict';

var React = require('react');

function GymnasticsOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M27 24C29.7614 24 32 21.7614 32 19C32 16.2386 29.7614 14 27 14C24.2386 14 22 16.2386 22 19C22 21.7614 24.2386 24 27 24Z" stroke-miterlimit="2"/><path d="M23 29L21 36L12 33L8 44" stroke-miterlimit="2"/><path d="M21 36L22.49 42.48C22.71 43.37 23.51 44 24.43 44H35.01" stroke-miterlimit="2"/><path d="M7 23L23 29L14 20L13 11" stroke-miterlimit="2"/><path d="M12 4C14 4 14.69 4 17 4C29 4 44 5.45 44 32" stroke-miterlimit="2"/>' : '<path d="M27 24C29.7614 24 32 21.7614 32 19C32 16.2386 29.7614 14 27 14C24.2386 14 22 16.2386 22 19C22 21.7614 24.2386 24 27 24Z" stroke-miterlimit="2"/><path d="M23 29L21 36L12 33L8 44" stroke-miterlimit="2"/><path d="M21 36L22.49 42.48C22.71 43.37 23.51 44 24.43 44H35.01" stroke-miterlimit="2"/><path d="M7 23L23 29L14 20L13 11" stroke-miterlimit="2"/><path d="M12 4C14 4 14.69 4 17 4C29 4 44 5.45 44 32" stroke-miterlimit="2"/>';

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

module.exports = GymnasticsOne;
