'use strict';

var React = require('react');

function ReduceTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM9,17.8c0,.4-.5.7-.9.4l-2.3-2.3c-.3-.3,0-.9.4-.9h2.3c.3,0,.5.2.5.5v2.3ZM9,8.5c0,.3-.2.5-.5.5h-2.3c-.4,0-.7-.5-.4-.9l2.3-2.3c.3-.3.9,0,.9.4v2.3ZM18.1,15.9l-2.3,2.3c-.3.3-.9,0-.9-.4v-2.3c0-.3.2-.5.5-.5h2.3c.4,0,.7.5.4.9ZM17.8,9h-2.3c-.3,0-.5-.2-.5-.5v-2.3c0-.4.5-.7.9-.4l2.3,2.3c.3.3,0,.9-.4.9Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M17 30H12.4142C11.5233 30 11.0771 31.0771 11.7071 31.7071L16.2929 36.2929C16.9229 36.9229 18 36.4767 18 35.5858V31C18 30.4477 17.5523 30 17 30Z"/><path d="M30 31V35.5858C30 36.4767 31.0771 36.9229 31.7071 36.2929L36.2929 31.7071C36.9229 31.0771 36.4767 30 35.5858 30H31C30.4477 30 30 30.4477 30 31Z"/><path d="M31 18H35.5858C36.4767 18 36.9229 16.9229 36.2929 16.2929L31.7071 11.7071C31.0771 11.0771 30 11.5233 30 12.4142V17C30 17.5523 30.4477 18 31 18Z"/><path d="M18 17V12.4142C18 11.5233 16.9229 11.0771 16.2929 11.7071L11.7071 16.2929C11.0771 16.9229 11.5233 18 12.4142 18H17C17.5523 18 18 17.5523 18 17Z"/>';

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

module.exports = ReduceTwo;
