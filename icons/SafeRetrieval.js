'use strict';

var React = require('react');

function SafeRetrieval(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.8,3.6L12.3,1c-.2,0-.4,0-.6,0L3.2,3.6c-.4.1-.7.5-.7,1v5.3c0,6,3.7,11.2,9.2,13.1.1,0,.2,0,.3,0s.2,0,.3,0c5.5-1.9,9.2-7.2,9.2-13.1v-5.3c0-.4-.3-.8-.7-1ZM18.2,18.8c-.2.2-.4.2-.7.2s-.6-.1-.8-.3l-2.7-3.2c-.6.3-1.3.5-2,.5-2.5,0-4.5-2-4.5-4.5s2-4.5,4.5-4.5,4.5,2,4.5,4.5-.4,2-.9,2.7l2.7,3.1c.4.4.3,1-.1,1.4Z"/>   <path d="M12.3,22.9l-.7-1.9c4.7-1.6,7.8-6.1,7.8-11.2h2c0,6-3.7,11.2-9.2,13.1Z"/>' : '<path d="M7 9.12739L24.0082 4L41 9.12739V19.6424C41 30.6945 34.153 40.5063 24.0025 44C13.8492 40.5064 7 30.6923 7 19.6376V9.12739Z"/><path d="M24 30C27.866 30 31 26.866 31 23C31 19.134 27.866 16 24 16C20.134 16 17 19.134 17 23C17 26.866 20.134 30 24 30Z"/><path d="M29 29L35 36"/><path d="M41 19.6426C41 30.6946 34.153 40.5065 24.0024 44.0002"/>';

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

module.exports = SafeRetrieval;
