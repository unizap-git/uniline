'use strict';

var React = require('react');

function BatteryFailure(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,3v-1c0-.6.4-1,1-1h2c.6,0,1,.4,1,1v1h-4Z"/>   <path d="M16,3h-8c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h8c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM12,19c-.7,0-1.2-.6-1.2-1.2s.6-1.2,1.2-1.2,1.2.6,1.2,1.2-.6,1.2-1.2,1.2ZM13,14.3v.7c0,.6-.4,1-1,1s-1-.4-1-1v-1.5c0-.6.4-1,1-1s1-.6,1-1.2-.4-1.2-1-1.2-1,.6-1,1.2-.4,1-1,1-1-.4-1-1c0-1.8,1.3-3.2,3-3.2s3,1.5,3,3.2-.8,2.6-2,3.1Z"/>' : '<rect x="14" y="44" width="36" height="20" rx="2" transform="rotate(-90 14 44)"/><path d="M20 6L20 4C20 2.89543 20.8954 2 22 2L26 2C27.1046 2 28 2.89543 28 4L28 6L20 6Z"/><path d="M24 30V27C26.2091 27 28 24.9853 28 22.5C28 20.0147 26.2091 18 24 18C21.7909 18 20 20.0147 20 22.5"/><path d="M26 35.5C26 36.6046 25.1046 37.5 24 37.5C22.8954 37.5 22 36.6046 22 35.5C22 34.3954 22.8954 33.5 24 33.5C25.1046 33.5 26 34.3954 26 35.5Z"/>';

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

module.exports = BatteryFailure;
