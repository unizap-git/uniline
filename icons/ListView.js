'use strict';

var React = require('react');

function ListView(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="6" width="40" height="36" rx="3"/><path d="M4 14H44"/><path d="M20 24H36"/><path d="M20 32H36"/><path d="M12 24H14"/><path d="M12 32H14"/>' : '<rect x="4" y="6" width="40" height="36" rx="3"/><path d="M4 14H44"/><path d="M20 24H36"/><path d="M20 32H36"/><path d="M12 24H14"/><path d="M12 32H14"/>';

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

module.exports = ListView;
