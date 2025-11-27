'use strict';

var React = require('react');

function Orthopedic(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.1,4.4c-.7-1.6-1.8-2.6-3-3.1-1.2-.4-2.6-.3-4,.3-1,.5-1.8,1.4-2.4,2.9-1.6-2.2-3.6-3.3-6.1-3.3s-3.5,1.2-4.1,2.2c-1.1,1.7-1.2,4.1-.6,5.3.7,1.4,1.4,2.1,3.7,3.8,0,8.7.6,9.2,1.1,9.6.4.3.8.4,1.2.4s.2,0,.4,0c1.1-.2,2.2-1.2,3.6-3.1l4.7,3c.3.2.7.2,1,0,.3-.2.5-.5.5-.9v-9c4-2.8,5.3-5.5,4.1-8.2ZM14.5,15.5c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0283 36L34.0026 42.9987V24C41.6769 18.7896 44.496 13.9783 42.4597 9.56594C39.4054 2.94746 34.4604 3.38382 31.0068 5.00174C28.7044 6.08035 27.0354 9.09334 25.9998 14.0407C22.9616 7.57467 18.6951 4.34165 13.2002 4.34165C4.95788 4.34165 4.29401 14.0648 5.47501 16.446C6.656 18.8273 7.77278 20.1122 13.0007 24C12.9255 35.5632 13.4061 41.7818 14.4426 42.6557C16.3435 44.1284 19.2054 41.9098 23.0283 36Z"/><path d="M27 25V31"/>';

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

module.exports = Orthopedic;
