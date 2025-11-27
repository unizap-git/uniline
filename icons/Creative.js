'use strict';

var React = require('react');

function Creative(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM9.2,5.3h5.7c.6,0,1,.4,1,1s-.4,1-1,1h-5.7c-.6,0-1-.4-1-1s.4-1,1-1ZM17.4,13.3l-2,2,.5,2.7c0,.4,0,.8-.4,1-.3.2-.7.3-1.1,0l-2.5-1.3-2.5,1.3c-.1,0-.3.1-.5.1s-.4,0-.6-.2c-.3-.2-.5-.6-.4-1l.5-2.7-2-2c-.3-.3-.4-.7-.3-1,.1-.4.4-.6.8-.7l2.8-.4,1.2-2.5c.2-.3.5-.6.9-.6h0c.4,0,.7.2.9.6l1.2,2.5,2.8.4c.4,0,.7.3.8.7.1.4,0,.8-.3,1Z"/>' : '<path d="M42 39V9.00003C42 7.34317 40.6569 6.00003 39 6.00003L9 6C7.34314 6 5.99999 7.34315 6 9.00001L6.00006 39C6.00006 40.6569 7.3432 42 9.00005 42H39C40.6569 42 42 40.6569 42 39Z"/><path d="M23.9994 18.3159L21.1038 24.2264L14.5264 25.1801L19.2911 29.8383L18.1521 36.3159L23.9994 33.1987L29.8479 36.3159L28.7173 29.8383L33.4737 25.1801L26.9328 24.2264L23.9994 18.3159Z"/><path d="M18.3159 12.6316H29.6843"/>';

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

module.exports = Creative;
