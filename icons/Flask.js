'use strict';

var React = require('react');

function Flask(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M8.05005 2c-.55229 0-1 .44772-1 1s.44771 1 1 1h1v3.31532c-2.69858 1.16334-5 3.63038-5 6.88468 0 4.3349 3.60924 7.8 7.99995 7.8 4.3908 0 8-3.4651 8-7.8 0-3.2543-2.3014-5.72134-5-6.88468V4h1c.5523 0 1-.44772 1-1s-.4477-1-1-1H8.05005ZM11.05 8V4h2v4c0 .42712.2713.8071.6753.9458 2.3906.82083 4.2201 2.7442 4.3204 5.0542H6.05438c.10031-2.31 1.92977-4.23337 4.32042-5.0542.404-.1387.6752-.51868.6752-.9458Z" clip-rule="evenodd"/>' : '<path d="M10.05 3.00002v5C7.33127 8.93351 5.05005 11.2392 5.05005 14.2c0 3.7555 3.13401 6.8 6.99995 6.8 3.866 0 7-3.0445 7-6.8 0-2.9608-2.2812-5.26649-5-6.19998v-5m-4 0h4m-4 0H8.05005m5.99995 0h2M5.09798 15H19.0021"/>';

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

module.exports = Flask;
