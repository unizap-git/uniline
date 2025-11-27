'use strict';

var React = require('react');

function Tips(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C7,1,3,5,3,10s2.1,6.6,5.2,8.1l.3,3.5c0,.8.7,1.4,1.5,1.4h4.1c.8,0,1.4-.6,1.5-1.4l.3-3.5c3.1-1.5,5.2-4.6,5.2-8.1,0-5-4-9-9-9ZM13.6,21h-3.2l-.2-2.5h3.6l-.2,2.5ZM16,11.5c0,.3-.2.7-.5.9-.2,0-.3.1-.5.1s-.3,0-.4-.1l-2.6-1.3-2.6,1.3c-.3.2-.7.1-1,0-.3-.2-.5-.5-.5-.9v-3c0-.6.4-1,1-1s1,.4,1,1v1.4l1.6-.8c.3-.1.6-.1.9,0l1.6.8v-1.4c0-.6.4-1,1-1s1,.4,1,1v3Z"/>' : '<path d="M40 20C40 26.8077 35.7484 32.6224 29.7555 34.9336H24H18.2445C12.2516 32.6224 8 26.8077 8 20C8 11.1634 15.1634 4 24 4C32.8366 4 40 11.1634 40 20Z"/><path d="M29.7557 34.9336L29.0766 43.0831C29.0334 43.6014 28.6001 44 28.08 44H19.9203C19.4002 44 18.9669 43.6014 18.9238 43.0831L18.2446 34.9336"/><path d="M18 17V23L24 20L30 23V17"/>';

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

module.exports = Tips;
