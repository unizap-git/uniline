'use strict';

var React = require('react');

function GlobeAmericas(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24,5.9C14,5.9,5.9,14,5.9,24s8.1,18.1,18.1,18.1,18.1-8.1,18.1-18.1S34,5.9,24,5.9ZM13.4,13c-6.1,5.9-6.2,15.6-.3,21.6,5.9,6.1,15.6,6.2,21.6.3,6.1-5.9,6.2-15.6.3-21.6-.6-.6-1.3-1.2-2-1.8-.6,1-1.5,1.9-2.4,2.5l-2.3,1.6.3.6c.4.7,0,1.6-.7,2-.4.2-.9.2-1.3,0l-1.1-.6c-.8-.4-1.8-.2-2.4.4l-.2.2c-.8.8-.8,2.1,0,3l.5.5c.5.5,1.2.7,1.8.6l2.2-.4c.6-.1,1.2,0,1.7.5l2.5,2.1c.6.5.9,1.3.7,2-.7,2.8-2.2,5.4-4.2,7.5l-1.3,1.3c-.6.6-1.6.8-2.4.4h-.3c-.7-.5-1.2-1.2-1.2-2v-2c0-.6-.2-1.1-.6-1.5l-2.5-2.5c-.6-.6-.8-1.6-.4-2.4l.7-1.4-3-3c-1.6-1.6-2.7-3.8-3.1-6l-.3-1.9h-.3Z" fill-rule="evenodd"/>' : '<path d="M12.1,10.3l.6,3.9c.4,2.5,1.6,4.8,3.4,6.6l3.3,3.3-.8,1.6c-.4.9-.3,1.9.4,2.6l2.7,2.7c.4.4.7,1,.7,1.6v2.2c0,.9.5,1.6,1.3,2l.3.2c.9.4,1.9.3,2.6-.4l1.5-1.5c2.2-2.2,3.8-5.1,4.6-8.2.2-.8,0-1.7-.7-2.2l-2.7-2.2c-.5-.4-1.2-.6-1.8-.5l-2.4.4c-.7.1-1.5-.1-2-.6l-.6-.6c-.9-.9-.9-2.3,0-3.2h0s.3-.3.3-.3c.7-.7,1.7-.9,2.6-.4l1.2.6c.8.4,1.8,0,2.2-.7.2-.5.2-1,0-1.5l-.3-.7,2.5-1.7c1.3-.9,2.4-2.1,3.1-3.5l.3-.6M12.1,10.3c-7.6,6.6-8.4,18-1.9,25.6,6.6,7.6,18,8.4,25.6,1.9,7.6-6.6,8.4-18,1.9-25.6-1-1.1-2.1-2.1-3.3-3M12.1,10.3c3.3-2.9,7.5-4.4,11.9-4.4,3.9,0,7.5,1.2,10.4,3.3"/>';

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

module.exports = GlobeAmericas;
