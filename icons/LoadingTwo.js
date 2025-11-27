'use strict';

var React = require('react');

function LoadingTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 3.99994V11.9999"/><path d="M38.1421 9.85779L32.4852 15.5146"/><path d="M44 23.9999H36"/><path d="M38.1421 38.1421L32.4852 32.4852"/><path d="M24 43.9999V35.9999"/><path d="M9.85791 38.1421L15.5148 32.4852"/><path d="M4 23.9999H12"/><path d="M9.85791 9.85779L15.5148 15.5146"/><path d="M16.3467 5.5224L17.8774 9.21792"/><path d="M5.52246 16.3461L9.21798 17.8769"/><path d="M5.52246 31.6537L9.21798 30.123"/><path d="M16.3467 42.4777L17.8774 38.7822"/><path d="M31.6538 42.4777L30.123 38.7822"/><path d="M42.4777 31.6537L38.7822 30.123"/><path d="M42.4777 16.3461L38.7822 17.8769"/><path d="M31.6538 5.5224L30.123 9.21792"/>' : '<path d="M24 3.99994V11.9999"/><path d="M38.1421 9.85779L32.4852 15.5146"/><path d="M44 23.9999H36"/><path d="M38.1421 38.1421L32.4852 32.4852"/><path d="M24 43.9999V35.9999"/><path d="M9.85791 38.1421L15.5148 32.4852"/><path d="M4 23.9999H12"/><path d="M9.85791 9.85779L15.5148 15.5146"/><path d="M16.3467 5.5224L17.8774 9.21792"/><path d="M5.52246 16.3461L9.21798 17.8769"/><path d="M5.52246 31.6537L9.21798 30.123"/><path d="M16.3467 42.4777L17.8774 38.7822"/><path d="M31.6538 42.4777L30.123 38.7822"/><path d="M42.4777 31.6537L38.7822 30.123"/><path d="M42.4777 16.3461L38.7822 17.8769"/><path d="M31.6538 5.5224L30.123 9.21792"/>';

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

module.exports = LoadingTwo;
