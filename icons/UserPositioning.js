'use strict';

var React = require('react');

function UserPositioning(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="16" r="6"/><path d="M36 36C36 29.3726 30.6274 24 24 24C17.3726 24 12 29.3726 12 36"/><path d="M36 4H44V12"/><path d="M12 4H4V12"/><path d="M36 44H44V36"/><path d="M12 44H4V36"/>' : '<circle cx="24" cy="16" r="6"/><path d="M36 36C36 29.3726 30.6274 24 24 24C17.3726 24 12 29.3726 12 36"/><path d="M36 4H44V12"/><path d="M12 4H4V12"/><path d="M36 44H44V36"/><path d="M12 44H4V36"/>';

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

module.exports = UserPositioning;
