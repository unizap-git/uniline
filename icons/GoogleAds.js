'use strict';

var React = require('react');

function GoogleAds(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-d2b387bb10dde87)"><path d="M41.3551 34.1527L29.5218 8.7761C28.1213 5.77286 24.5514 4.47352 21.5482 5.87396C18.545 7.27439 17.2456 10.8443 18.6461 13.8475L30.4794 39.2241C31.8798 42.2274 35.4497 43.5267 38.4529 42.1263C41.4562 40.7258 42.7555 37.156 41.3551 34.1527Z"/><path d="M23.4375 26.5357L17.5209 39.224C16.1204 42.2273 12.5506 43.5266 9.54731 42.1262V42.1262C6.54407 40.7257 5.24474 37.1558 6.64517 34.1526L18.374 9"/><circle cx="12.0828" cy="36.6882" r="6" transform="rotate(25 12.0828 36.6882)"/></g><defs><clipPath id="icon-d2b387bb10dde87"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-b7dd919b10dde87)"><path d="M41.3551 34.1527L29.5218 8.7761C28.1213 5.77286 24.5514 4.47352 21.5482 5.87396C18.545 7.27439 17.2456 10.8443 18.6461 13.8475L30.4794 39.2241C31.8798 42.2274 35.4497 43.5267 38.4529 42.1263C41.4562 40.7258 42.7555 37.156 41.3551 34.1527Z"/><path d="M23.4375 26.5357L17.5209 39.224C16.1204 42.2273 12.5506 43.5266 9.54731 42.1262V42.1262C6.54407 40.7257 5.24474 37.1558 6.64517 34.1526L18.374 9"/><circle cx="12.0828" cy="36.6882" r="6" transform="rotate(25 12.0828 36.6882)"/></g><defs><clipPath id="icon-b7dd919b10dde87"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = GoogleAds;
