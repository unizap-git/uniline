'use strict';

var React = require('react');

function ZeroKey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,8c-.8,0-1.5.7-1.5,1.5v5c0,.8.7,1.5,1.5,1.5s1.5-.7,1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5Z"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM15.5,14.5c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5v-5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5v5Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><rect x="19" y="14" width="10" height="20" rx="5"/>';

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

module.exports = ZeroKey;
