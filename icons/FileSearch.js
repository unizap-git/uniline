'use strict';

var React = require('react');

function FileSearch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 20.8421V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H26"/><path d="M14 17H20"/><path d="M28 17H34"/><path d="M14 28H20"/><path d="M14 34H20"/><path d="M17 20L17 14"/><path d="M37.728 37.728L41.9707 41.9707"/><circle cx="33.4854" cy="33.4853" r="6" transform="rotate(45 33.4854 33.4853)"/>' : '<path d="M40 20.8421V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H26"/><path d="M14 17H20"/><path d="M28 17H34"/><path d="M14 28H20"/><path d="M14 34H20"/><path d="M17 20L17 14"/><path d="M37.728 37.728L41.9707 41.9707"/><circle cx="33.4854" cy="33.4853" r="6" transform="rotate(45 33.4854 33.4853)"/>';

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

module.exports = FileSearch;
