'use strict';

var React = require('react');

function FontColor(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.1,21c-1.6,0-2.9-1.3-2.9-3s1.6-3.9,2.1-4.7l.8-1.3.8,1.3c.5.8,2.1,3.4,2.1,4.7s-1.3,3-2.9,3ZM17.1,15.9c-.5,1-.9,1.8-.9,2.1,0,.5.4,1,.9,1s.9-.4.9-1c0-.3-.4-1.2-.9-2.1ZM6.1,17h-1.1c-.6,0-1-.4-1-1s.4-1,1-1h.4l1.3-3.3c0,0,0-.1,0-.2l2.7-6.8c.2-.4.6-.7,1-.7s.9.3,1,.7l2.7,6.9s0,0,0,0l.6,1.5c.2.5,0,1.1-.6,1.3-.5.2-1.1,0-1.3-.6l-.4-.9h-4.3l-.8,2h.2c.6,0,1,.4,1,1s-.4,1-1,1h-1.7ZM9.1,11h2.7l-1.4-3.5-1.4,3.5Z"/>' : '<path d="m6.08169 15.9817 1.57292-4m-1.57292 4h-1.1m1.1 0h1.65m-.07708-4 2.72499-6.92967c.0368-.09379.1673-.09379.2042 0l2.725 6.92967m-5.65419 0h-.00607m.00607 0h5.65419m0 0 .6169 1.569m5.1104 4.453c0 1.1025-.8543 1.9963-1.908 1.9963s-1.908-.8938-1.908-1.9963c0-1.1026 1.908-4.1275 1.908-4.1275s1.908 3.0249 1.908 4.1275Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = FontColor;
