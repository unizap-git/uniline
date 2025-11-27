'use strict';

var React = require('react');

function SurveillanceCameras(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M43 6H23H5"/><path d="M23 23V6"/><path d="M8.42498 19.5798L40.3005 28.1209L38.5581 30.7598L34.5557 37.9696L32.8133 40.6085L4.80151 33.1028L8.42498 19.5798Z"/><path d="M38.5583 30.7598L42.422 31.7951L40.3515 39.5225L34.5559 37.9696"/>' : '<path d="M43 6H23H5"/><path d="M23 23V6"/><path d="M8.42498 19.5798L40.3005 28.1209L38.5581 30.7598L34.5557 37.9696L32.8133 40.6085L4.80151 33.1028L8.42498 19.5798Z"/><path d="M38.5583 30.7598L42.422 31.7951L40.3515 39.5225L34.5559 37.9696"/>';

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

module.exports = SurveillanceCameras;
