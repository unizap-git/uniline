'use strict';

var React = require('react');

function AfroPick(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-f8717fa881a6d40)"><path d="M21 4.37207L4.02944 21.3426L26.6569 43.9701L43.6274 26.9995"/><path d="M26.6572 10.0288L9.68666 26.9994"/><path d="M32.3135 15.6855L15.3429 32.6561"/><path d="M37.9707 21.3428L21.0001 38.3133"/><path d="M16.0504 41.8487L20.2931 37.606L10.3936 27.7065L6.15091 31.9492L8.27223 34.0705L9.68645 38.3131L13.9291 39.7274L16.0504 41.8487Z"/></g><defs><clipPath id="icon-f8717fa881a6d40"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-bc6b359881a6d40)"><path d="M21 4.37207L4.02944 21.3426L26.6569 43.9701L43.6274 26.9995"/><path d="M26.6572 10.0288L9.68666 26.9994"/><path d="M32.3135 15.6855L15.3429 32.6561"/><path d="M37.9707 21.3428L21.0001 38.3133"/><path d="M16.0504 41.8487L20.2931 37.606L10.3936 27.7065L6.15091 31.9492L8.27223 34.0705L9.68645 38.3131L13.9291 39.7274L16.0504 41.8487Z"/></g><defs><clipPath id="icon-bc6b359881a6d40"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = AfroPick;
