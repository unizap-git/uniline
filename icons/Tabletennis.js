'use strict';

var React = require('react');

function Tabletennis(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31.4502 16.96C34.2116 16.96 36.4502 14.7214 36.4502 11.96C36.4502 9.19854 34.2116 6.95996 31.4502 6.95996C28.6888 6.95996 26.4502 9.19854 26.4502 11.96C26.4502 14.7214 28.6888 16.96 31.4502 16.96Z" stroke-miterlimit="2"/><path d="M36 34L34 23L23 28L10 25" stroke-miterlimit="2"/><path d="M4 41.0298H44" stroke-miterlimit="2"/><circle cx="9" cy="25" r="5"/><circle cx="6" cy="17" r="2"/><path d="M34 23L44 29L29 34" stroke-miterlimit="2"/>' : '<path d="M31.4502 16.96C34.2116 16.96 36.4502 14.7214 36.4502 11.96C36.4502 9.19854 34.2116 6.95996 31.4502 6.95996C28.6888 6.95996 26.4502 9.19854 26.4502 11.96C26.4502 14.7214 28.6888 16.96 31.4502 16.96Z" stroke-miterlimit="2"/><path d="M36 34L34 23L23 28L10 25" stroke-miterlimit="2"/><path d="M4 41.0298H44" stroke-miterlimit="2"/><circle cx="9" cy="25" r="5"/><circle cx="6" cy="17" r="2"/><path d="M34 23L44 29L29 34" stroke-miterlimit="2"/>';

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

module.exports = Tabletennis;
