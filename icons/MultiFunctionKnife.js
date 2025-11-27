'use strict';

var React = require('react');

function MultiFunctionKnife(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,10.2l3.6,3.6c.8.8,2,.8,2.8,0,.8-.8.8-2,0-2.8l-6.4-6.4v5.7Z"/>   <path d="M9,13.7l-3.6-3.6c-.8-.8-2-.8-2.8,0-.8.8-.8,2,0,2.8l6.4,6.4v-5.7Z"/>   <path d="M12,1c-2.2,0-4,1.8-4,4v14c0,2.2,1.8,4,4,4s4-1.8,4-4V5c0-2.2-1.8-4-4-4ZM13,19c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM13,5.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5Z"/>' : '<path d="M30 10C30 6.68629 27.3137 4 24 4C20.6863 4 18 6.68629 18 10V38C18 41.3137 20.6863 44 24 44C27.3137 44 30 41.3137 30 38V10Z"/><path d="M30 20.3137L37.2426 27.5563C38.8047 29.1184 41.3374 29.1184 42.8995 27.5563C44.4616 25.9943 44.4616 23.4616 42.8995 21.8995L30 9V20.3137Z"/><path d="M18.0711 27.4142L10.8284 20.1716C9.26633 18.6095 6.73367 18.6095 5.17157 20.1716C3.60948 21.7337 3.60948 24.2663 5.17157 25.8284L18.0711 38.7279V27.4142Z"/><path d="M24 10V11"/><path d="M24 37V38"/>';

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

module.exports = MultiFunctionKnife;
