'use strict';

var React = require('react');
var Icons = require('./index.js');

function Icon(props) {
  var name = props.name;
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  // Convert icon name to PascalCase to match component name
  function toPascalCase(str) {
    return str
      .split('-')
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }

  var componentName = toPascalCase(name);
  var IconComponent = Icons[componentName];

  if (!IconComponent) {
    console.warn('Icon "' + name + '" (' + componentName + ') not found');
    return React.createElement('div', {
      className: 'inline-flex items-center justify-center ' + className,
      style: Object.assign({ width: size, height: size }, style)
    }, React.createElement('div', {
      style: { width: size, height: size },
      className: 'bg-gray-200 dark:bg-gray-600 rounded animate-pulse'
    }));
  }

  return React.createElement(IconComponent, {
    size: size,
    strokeWidth: strokeWidth,
    color: color,
    fill: fill,
    className: className,
    style: style
  });
}

module.exports = Icon;
