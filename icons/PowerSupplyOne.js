'use strict';

var React = require('react');

function PowerSupplyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,2v2.5"/>   <path d="M15,2v2.5"/>   <path d="M12,17v5h8v-3.7"/>   <path d="M21,8.7l-1-4.4c-.1-.5-.5-.8-1-.8H5c-.5,0-.9.3-1,.8l-1,4.4c0,.2,0,.4,0,.6l3.5,8.1c.2.4.5.6.9.6h9c.4,0,.8-.2.9-.6l3.5-8.1c0-.2.1-.4,0-.6ZM15,11.5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M33 34H15L8 17.75L10 9H38L40 17.75L33 34Z"/><path d="M18 4V9"/><path d="M30 4V9"/><path d="M24 34V44H40V36.6316"/><path d="M18 21H30"/>';

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

module.exports = PowerSupplyOne;
