'use strict';

var React = require('react');

function DiskOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.3,8.6c0-.3.2-.5.5-.5h10.8c.3,0,.5.2.5.5v7.3c0,3.2-2.6,5.9-5.9,5.9h0c-3.2,0-5.9-2.6-5.9-5.9v-7.3Z"/>   <path d="M16.5,1.2H7.7c-.5,0-1,.4-1,1v5.9c0,.5.4,1,1,1h8.8c.5,0,1-.4,1-1V2.2c0-.5-.4-1-1-1ZM11.6,5.6c0,.5-.4,1-1,1s-1-.4-1-1v-1c0-.5.4-1,1-1s1,.4,1,1v1ZM14.6,5.6c0,.5-.4,1-1,1s-1-.4-1-1v-1c0-.5.4-1,1-1s1,.4,1,1v1Z"/>   <path d="M6.3,15.9h11.8"/>' : '<path d="M12.7778 17.012C12.7778 16.4531 13.2309 16 13.7899 16H35.7658C36.3247 16 36.7778 16.4531 36.7778 17.012V32C36.7778 38.6274 31.4052 44 24.7778 44V44C18.1504 44 12.7778 38.6274 12.7778 32V17.012Z"/><rect x="15.7778" y="4" width="18" height="12"/><path d="M21.7778 9V11"/><path d="M27.7778 9V11"/><path d="M12.7778 32H36.7778"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 49 48',
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

module.exports = DiskOne;
