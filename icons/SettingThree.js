'use strict';

var React = require('react');

function SettingThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="24" r="15"/><path d="M24 39V44"/><path d="M39 23H44"/><path d="M4 23H9"/><path d="M24 4V9"/><path d="M34.6064 34.6064L38.142 38.142"/><path d="M33.8994 12.6865L37.4349 9.15099"/><path d="M9.15088 37.4351L12.6864 33.8995"/><path d="M9.85791 9.85791L13.3934 13.3934"/>' : '<circle cx="24" cy="24" r="15"/><path d="M24 39V44"/><path d="M39 23H44"/><path d="M4 23H9"/><path d="M24 4V9"/><path d="M34.6064 34.6064L38.142 38.142"/><path d="M33.8994 12.6865L37.4349 9.15099"/><path d="M9.15088 37.4351L12.6864 33.8995"/><path d="M9.85791 9.85791L13.3934 13.3934"/>';

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

module.exports = SettingThree;
