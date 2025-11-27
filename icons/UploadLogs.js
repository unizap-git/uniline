'use strict';

var React = require('react');

function UploadLogs(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 43.9998H10C8.89543 43.9998 8 43.1043 8 41.9998V5.99976C8 4.89519 8.89543 3.99976 10 3.99976H38C39.1046 3.99976 40 4.89519 40 5.99976V23.9998"/><path d="M35.5 43.9998V30.9998"/><path d="M31 34.4998L32.5 32.9998L35.5 29.9998L38.5 32.9998L40 34.4998"/><path d="M16 15.9998H32"/><path d="M16 23.9998H24"/>' : '<path d="M24 43.9998H10C8.89543 43.9998 8 43.1043 8 41.9998V5.99976C8 4.89519 8.89543 3.99976 10 3.99976H38C39.1046 3.99976 40 4.89519 40 5.99976V23.9998"/><path d="M35.5 43.9998V30.9998"/><path d="M31 34.4998L32.5 32.9998L35.5 29.9998L38.5 32.9998L40 34.4998"/><path d="M16 15.9998H32"/><path d="M16 23.9998H24"/>';

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

module.exports = UploadLogs;
