'use strict';

var React = require('react');

function Extend(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM8.8,18h-2.3c-.3,0-.5-.2-.5-.5v-2.3c0-.4.5-.7.9-.4l2.3,2.3c.3.3,0,.9-.4.9ZM9.1,6.9l-2.3,2.3c-.3.3-.9,0-.9-.4v-2.3c0-.3.2-.5.5-.5h2.3c.4,0,.7.5.4.9ZM18,17.5c0,.3-.2.5-.5.5h-2.3c-.4,0-.7-.5-.4-.9l2.3-2.3c.3-.3.9,0,.9.4v2.3ZM18,8.8c0,.4-.5.7-.9.4l-2.3-2.3c-.3-.3,0-.9.4-.9h2.3c.3,0,.5.2.5.5v2.3Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M35 12H30.4142C29.5233 12 29.0771 13.0771 29.7071 13.7071L34.2929 18.2929C34.9229 18.9229 36 18.4767 36 17.5858V13C36 12.4477 35.5523 12 35 12Z"/><path d="M12 13V17.5858C12 18.4767 13.0771 18.9229 13.7071 18.2929L18.2929 13.7071C18.9229 13.0771 18.4767 12 17.5858 12H13C12.4477 12 12 12.4477 12 13Z"/><path d="M13 36H17.5858C18.4767 36 18.9229 34.9229 18.2929 34.2929L13.7071 29.7071C13.0771 29.0771 12 29.5233 12 30.4142V35C12 35.5523 12.4477 36 13 36Z"/><path d="M36 35V30.4142C36 29.5233 34.9229 29.0771 34.2929 29.7071L29.7071 34.2929C29.0771 34.9229 29.5233 36 30.4142 36H35C35.5523 36 36 35.5523 36 35Z"/>';

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

module.exports = Extend;
