'use strict';

var React = require('react');

function Cocktail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-77c416d347f75cd4)"><path d="M35.8 13H32L21 32L9.8 13H6"/><path d="M25.7509 25.5961C31.3517 28.7466 38.446 26.7602 41.5964 21.1594C44.7469 15.5586 42.7605 8.46427 37.1597 5.31383C31.5589 2.16338 24.4646 4.14978 21.3142 9.75057"/><path d="M26 44H16"/><path d="M21 44L21 32"/><path d="M12 16C12 16 14 14 17 14C20 14 22 17 25 17C28 17 30 16 30 16"/></g><defs><clipPath id="icon-77c416d347f75cd4"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-26c804ff47f75cd4)"><path d="M35.8 13H32L21 32L9.8 13H6"/><path d="M25.7509 25.5961C31.3517 28.7466 38.446 26.7602 41.5964 21.1594C44.7469 15.5586 42.7605 8.46427 37.1597 5.31383C31.5589 2.16338 24.4646 4.14978 21.3142 9.75057"/><path d="M26 44H16"/><path d="M21 44L21 32"/><path d="M12 16C12 16 14 14 17 14C20 14 22 17 25 17C28 17 30 16 30 16"/></g><defs><clipPath id="icon-26c804ff47f75cd4"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Cocktail;
