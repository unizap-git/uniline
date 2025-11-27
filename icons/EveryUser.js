'use strict';

var React = require('react');

function EveryUser(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="14" cy="29" r="5"/><circle cx="34" cy="29" r="5"/><circle cx="24" cy="9" r="5"/><path d="M24 44C24 38.4772 19.5228 34 14 34C8.47715 34 4 38.4772 4 44"/><path d="M44 44C44 38.4772 39.5228 34 34 34C28.4772 34 24 38.4772 24 44"/><path d="M34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24"/>' : '<circle cx="14" cy="29" r="5"/><circle cx="34" cy="29" r="5"/><circle cx="24" cy="9" r="5"/><path d="M24 44C24 38.4772 19.5228 34 14 34C8.47715 34 4 38.4772 4 44"/><path d="M44 44C44 38.4772 39.5228 34 34 34C28.4772 34 24 38.4772 24 44"/><path d="M34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24"/>';

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

module.exports = EveryUser;
