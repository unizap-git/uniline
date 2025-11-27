'use strict';

var React = require('react');

function MailReview(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,12v8.4c0,.6-.4,1.1-1,1.1H3c-.6,0-1-.5-1-1.1v-8.4l10,6.5,10-6.5Z"/>   <path d="M2,11.9l5-3.4M22,11.9l-5-3.4"/>   <path d="M17,1.5H7c-.6,0-1,.4-1,1v12.2c0,.7.3,1.3.9,1.7l4,2.6c.3.2.7.3,1.1.3s.8-.1,1.1-.3l4-2.6c.6-.4.9-1,.9-1.7V2.5c0-.6-.4-1-1-1ZM10,5.5h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1s.4-1,1-1ZM14,10.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44 24V40.8182C44 42.0232 43.1046 43 42 43H6C4.89543 43 4 42.0232 4 40.8182V24L24 37L44 24Z"/><path d="M4 23.784L14 16.8921M44 23.784L34 16.8921"/><path d="M34 5H14V29.4146C14 30.0916 14.3424 30.7226 14.91 31.0915L22.91 36.2915C23.5728 36.7223 24.4272 36.7223 25.09 36.2915L33.09 31.0915C33.6576 30.7226 34 30.0916 34 29.4146V5Z"/><path d="M20 13H24"/><path d="M20 19H28"/>';

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

module.exports = MailReview;
