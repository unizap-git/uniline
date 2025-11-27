'use strict';

var React = require('react');

function NetworkDrive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40.5178 36.3161C43.8044 34.005 45.2136 29.8302 44.0001 26C42.7866 22.1698 39.0705 20.0714 35.0527 20.0745H32.7317C31.2144 14.1613 26.2082 9.79572 20.1435 9.0972C14.0787 8.39868 8.21121 11.5118 5.38931 16.9253C2.56741 22.3388 3.37545 28.9317 7.42115 33.5035"/><rect x="14" y="35" width="20" height="6"/><path d="M34 28L22 28"/><path d="M16 28H14"/>' : '<path d="M40.5178 36.3161C43.8044 34.005 45.2136 29.8302 44.0001 26C42.7866 22.1698 39.0705 20.0714 35.0527 20.0745H32.7317C31.2144 14.1613 26.2082 9.79572 20.1435 9.0972C14.0787 8.39868 8.21121 11.5118 5.38931 16.9253C2.56741 22.3388 3.37545 28.9317 7.42115 33.5035"/><rect x="14" y="35" width="20" height="6"/><path d="M34 28L22 28"/><path d="M16 28H14"/>';

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

module.exports = NetworkDrive;
