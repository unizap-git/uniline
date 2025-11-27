'use strict';

var React = require('react');

function TextureTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,1H4c-1.7,0-3,1.3-3,3v16c0,1.7,1.3,3,3,3h16c1.7,0,3-1.3,3-3V4c0-1.7-1.3-3-3-3ZM5,6c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1s-1-.4-1-1v-4ZM10,19h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM10,15h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM11,10c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM15,18c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM19,18c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM18,11h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM18,7h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M40 4H8C5.79086 4 4 5.79086 4 8V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V8C44 5.79086 42.2091 4 40 4Z"/><path d="M12 12V20"/><path d="M28 28V36"/><path d="M20 12V20"/><path d="M28 12H36"/><path d="M12 28H20"/><path d="M28 20H36"/><path d="M12 36H20"/><path d="M36 28V36"/>';

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

module.exports = TextureTwo;
