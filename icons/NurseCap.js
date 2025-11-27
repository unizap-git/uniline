'use strict';

var React = require('react');

function NurseCap(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.6,8.6c-1-1.1-4.6-4.6-10.6-4.6S2.4,7.5,1.4,8.6c-.4.4-.5,1-.2,1.5l3.7,8.7c.2.4.5.7.9.8.4.1.8.1,1.2,0,.9-.4,2.7-1.1,5.1-1.1s4.2.7,5.1,1.1c.2.1.4.2.7.2s.4,0,.6-.1c.4-.1.7-.5.9-.8l3.7-8.7c.2-.5.1-1.1-.2-1.5ZM14,13h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M24 10C12.7433 10 5.98524 16.7481 4.37521 18.5579C4.1348 18.8281 4.0869 19.2064 4.22726 19.5397L11.5526 36.9373C11.7887 37.4982 12.4705 37.7313 13.0196 37.4691C14.8237 36.6075 18.876 35 24 35C29.124 35 33.1763 36.6075 34.9804 37.4691C35.5295 37.7313 36.2113 37.4982 36.4474 36.9373L43.7727 19.5397C43.9131 19.2064 43.8652 18.8281 43.6248 18.5579C42.0148 16.7481 35.2568 10 24 10Z"/><path d="M20 24.001L28 24.001"/><path d="M24 20V28"/>';

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

module.exports = NurseCap;
