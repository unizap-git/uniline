'use strict';

var React = require('react');

function Fingerprint(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 43V22C18 18.6863 20.6863 16 24 16C27.3137 16 30 18.6863 30 22V43"/><path d="M12 40V22C12 15.3726 17.3726 10 24 10C30.6274 10 36 15.3726 36 22V40"/><path d="M6 35V22C6 12.0589 14.0589 4 24 4C33.9411 4 42 12.0589 42 22V35"/><path d="M24 44V31"/><path d="M24 24.625V21.875"/>' : '<path d="M18 43V22C18 18.6863 20.6863 16 24 16C27.3137 16 30 18.6863 30 22V43"/><path d="M12 40V22C12 15.3726 17.3726 10 24 10C30.6274 10 36 15.3726 36 22V40"/><path d="M6 35V22C6 12.0589 14.0589 4 24 4C33.9411 4 42 12.0589 42 22V35"/><path d="M24 44V31"/><path d="M24 24.625V21.875"/>';

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

module.exports = Fingerprint;
