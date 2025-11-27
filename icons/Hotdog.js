'use strict';

var React = require('react');

function Hotdog(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M10 2.53528c.5883-.34034 1.2714-.53513 2-.53513.7286 0 1.4117.19479 2 .53513V21.465c-.5883.3404-1.2714.5352-2 .5352-.7286 0-1.4117-.1948-2-.5352V2.53528Zm3.2071 5.17192c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-1 1c-.3905.39053-.3905 1.02369 0 1.41422.3905.39052 1.0237.39052 1.4142 0l1-1Zm0 4.5c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0l-1 1c-.3905.3905-.3905 1.0237 0 1.4142.3905.3905 1.0237.3905 1.4142 0l1-1Zm0 4.5c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0l-1 1c-.3905.3905-.3905 1.0237 0 1.4142.3905.3905 1.0237.3905 1.4142 0l1-1Z" clip-rule="evenodd"/>   <path d="M8 3.02762c-2.24998.24872-4 2.15626-4 4.47253v9.00005c0 2.3162 1.75002 4.2238 4 4.4725V3.02762Zm8 17.94508c2.25-.2487 4-2.1563 4-4.4725V7.50015c0-2.31627-1.75-4.22381-4-4.47253V20.9727Z"/>' : '<path d="M23,15.9l2-2M23,25l2-2M23,34.1l2-2M17.9,40.2V7.8h-1c-3.9,0-7.1,3.2-7.1,7.1v18.2c0,3.9,3.2,7.1,7.1,7.1h1ZM30.1,40.2V7.8h1c3.9,0,7.1,3.2,7.1,7.1v18.2c0,3.9-3.2,7.1-7.1,7.1h-1ZM30.1,36.1V11.9c0-3.4-2.7-6.1-6.1-6.1s-6.1,2.7-6.1,6.1v24.3c0,3.4,2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1Z"/>';

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

module.exports = Hotdog;
