'use strict';

var React = require('react');

function ShrimpTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M27.1,25h-12.1c-3.6,0-6.6-3-6.6-6.6v-3.2h11M27.1,25c3.6,0,6,3.7,4.6,7-.8,1.8-2.6,3-4.6,3h-5.5c-2.4,0-4.4,2-4.4,4.4v2.2h14.3M27.1,25l4.3-10.3M19.4,15.2c4.1-2.7,6.8-3.1,12.1-.5M19.4,15.2v9.8l-4.4,3.4M31.4,14.7c7-.5,12.2,5.2,10.4,12-.2.9-.5,1.8-.8,2.9,0,1.8,0,3.3-.1,4.6-.4,4.6-4.9,7.4-9.5,7.4M31.4,41.6l-2.6-6.9M31.8,28.4h9.6M19.4,6.4h-8.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4"/>' : '<path d="M27.1,25h-12.1c-3.6,0-6.6-3-6.6-6.6v-3.2h11M27.1,25c3.6,0,6,3.7,4.6,7-.8,1.8-2.6,3-4.6,3h-5.5c-2.4,0-4.4,2-4.4,4.4v2.2h14.3M27.1,25l4.3-10.3M19.4,15.2c4.1-2.7,6.8-3.1,12.1-.5M19.4,15.2v9.8l-4.4,3.4M31.4,14.7c7-.5,12.2,5.2,10.4,12-.2.9-.5,1.8-.8,2.9,0,1.8,0,3.3-.1,4.6-.4,4.6-4.9,7.4-9.5,7.4M31.4,41.6l-2.6-6.9M31.8,28.4h9.6M19.4,6.4h-8.8c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4"/>';

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

module.exports = ShrimpTwo;
