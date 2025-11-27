'use strict';

var React = require('react');

function BasketballOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24"/><path d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24" stroke-miterlimit="2"/><path d="M12 4H4V36H12V4Z" stroke-miterlimit="2"/><path d="M12 24H44" stroke-miterlimit="2"/><path d="M18 24L20 28.5C22 33.5 21.9 38.9 20 44" stroke-miterlimit="2"/><path d="M40.9997 24L38.9997 28.5C36.9996 33.5 37.0896 38.9 38.9996 44" stroke-miterlimit="2"/><path d="M21.2197 32H37.7797" stroke-miterlimit="2"/><path d="M21.6895 40H37.3195" stroke-miterlimit="2"/><path d="M29.5 40V24" stroke-miterlimit="2"/>' : '<path d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24"/><path d="M18 24C18 17.3762 23.3762 12 30 12C36.6238 12 42 17.3762 42 24" stroke-miterlimit="2"/><path d="M12 4H4V36H12V4Z" stroke-miterlimit="2"/><path d="M12 24H44" stroke-miterlimit="2"/><path d="M18 24L20 28.5C22 33.5 21.9 38.9 20 44" stroke-miterlimit="2"/><path d="M40.9997 24L38.9997 28.5C36.9996 33.5 37.0896 38.9 38.9996 44" stroke-miterlimit="2"/><path d="M21.2197 32H37.7797" stroke-miterlimit="2"/><path d="M21.6895 40H37.3195" stroke-miterlimit="2"/><path d="M29.5 40V24" stroke-miterlimit="2"/>';

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

module.exports = BasketballOne;
