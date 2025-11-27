'use strict';

var React = require('react');

function FireExtinguisherOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,4c-2.8,0-5,2.2-5,5v12c0,1.1.9,2,2,2h6c1.1,0,2-.9,2-2v-12c0-2.8-2.2-5-5-5ZM13,17c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5Z"/>   <rect x="10" y="2.5" width="4.5" height="2"/>   <path d="M14.5,2.5l4.5-.5v3l-4.5-.5v-2Z"/>   <path d="M10,3.5c-1.5,0-3.8-.2-5,1-1.2,1.2-1,2.5-1,4.5"/>' : '<path d="M16 18C16 13.5817 19.5817 10 24 10C28.4183 10 32 13.5817 32 18V42C32 43.1046 31.1046 44 30 44H18C16.8954 44 16 43.1046 16 42V18Z"/><path d="M24 24V34"/><rect x="20" y="5" width="9" height="4"/><path d="M29 5L38 4V10L29 9V5Z"/><path d="M20 6.99981C17 6.99981 12.5 6.49981 10 8.99981C7.58343 11.4164 8.00004 13.9998 8.00004 17.9998"/>';

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

module.exports = FireExtinguisherOne;
