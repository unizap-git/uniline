'use strict';

var React = require('react');

function TowerOfPisa(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-595739de3947dd08)"><path d="M4 44H44"/><path d="M21.2498 7.47448L36.7046 11.6156L28.0004 43.9998L11.0004 43.9998L21.2498 7.47448Z"/><path d="M19.3174 6.95703L38.6359 12.1334"/><path d="M16.2109 18.5479L35.5295 23.7242"/><path d="M25.4823 20.9316L26.5176 17.0679"/><path d="M13.1055 30.1392L32.424 35.3155"/><path d="M22.4823 31.9316L23.5176 28.0679"/><rect x="25.1826" y="4.38721" width="10" height="4" rx="1" transform="rotate(15 25.1826 4.38721)"/><path d="M19.4823 42.9316L20.5176 39.0679"/></g><defs><clipPath id="icon-595739de3947dd08"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-1877ba23947dd08)"><path d="M4 44H44"/><path d="M21.2498 7.47448L36.7046 11.6156L28.0004 43.9998L11.0004 43.9998L21.2498 7.47448Z"/><path d="M19.3174 6.95703L38.6359 12.1334"/><path d="M16.2109 18.5479L35.5295 23.7242"/><path d="M25.4823 20.9316L26.5176 17.0679"/><path d="M13.1055 30.1392L32.424 35.3155"/><path d="M22.4823 31.9316L23.5176 28.0679"/><rect x="25.1826" y="4.38721" width="10" height="4" rx="1" transform="rotate(15 25.1826 4.38721)"/><path d="M19.4823 42.9316L20.5176 39.0679"/></g><defs><clipPath id="icon-1877ba23947dd08"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = TowerOfPisa;
