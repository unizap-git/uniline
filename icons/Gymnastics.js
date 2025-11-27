'use strict';

var React = require('react');

function Gymnastics(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z" stroke-miterlimit="2"/><path d="M23 29L21 36L12 34L7 44" stroke-miterlimit="2"/><path d="M21 36L23 44H34" stroke-miterlimit="2"/><path d="M7 22.9998L23 28.9998L35 26.9998L41.04 22.0298" stroke-miterlimit="2"/><path d="M12 3.99985C26 1.99985 36 5.99985 44 14.9998" stroke-miterlimit="2"/>' : '<path d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z" stroke-miterlimit="2"/><path d="M23 29L21 36L12 34L7 44" stroke-miterlimit="2"/><path d="M21 36L23 44H34" stroke-miterlimit="2"/><path d="M7 22.9998L23 28.9998L35 26.9998L41.04 22.0298" stroke-miterlimit="2"/><path d="M12 3.99985C26 1.99985 36 5.99985 44 14.9998" stroke-miterlimit="2"/>';

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

module.exports = Gymnastics;
