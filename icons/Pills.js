'use strict';

var React = require('react');

function Pills(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.4,4.9c-1.1-1.3-2.6-2.1-4.2-2.2-1.7-.1-3.3.4-4.6,1.4l-7.3,6.1c-2.6,2.2-3,6.2-.8,8.8,1.1,1.3,2.6,2.1,4.2,2.2.2,0,.4,0,.6,0,1.5,0,2.9-.5,4-1.5l7.3-6.1c1.3-1.1,2.1-2.6,2.2-4.2s-.4-3.3-1.4-4.6ZM13.4,15.1c-.2.2-.4.2-.6.2s-.6-.1-.8-.4l-2.9-3.4c-.4-.4-.3-1.1.1-1.4.4-.4,1.1-.3,1.4.1l2.9,3.4c.4.4.3,1.1-.1,1.4Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.97315 22.0623L17.2506 15.9558L24.528 9.84929C28.9703 6.12177 35.5932 6.7012 39.3207 11.1435C43.0483 15.5858 42.4688 22.2087 38.0265 25.9362L30.7491 32.0427L23.4717 38.1492C19.0294 41.8767 12.4065 41.2973 8.67896 36.855C4.95144 32.4127 5.53087 25.7898 9.97315 22.0623Z"/><path d="M19.6885 21.8613L25.4261 28.6992"/>';

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

module.exports = Pills;
