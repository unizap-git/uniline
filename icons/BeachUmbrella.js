'use strict';

var React = require('react');

function BeachUmbrella(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M17.8,2.6c-.9-.6-1.9-1-2.9-1.3,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.1,0,.2.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,1.6,3.2,1.9,6,.3,2.9-.6,5.4-.6,5.5-.2.4-.5.6-.9.6s-.2,0-.4,0c-.5-.2-.8-.8-.6-1.3,0,0,.8-2.2.5-4.6-.2-1.5-.8-3.2-1.3-4.3-.9.7-2.3,1.8-3.2,3.1-1.4,1.9-1.8,4.2-1.8,4.2,0,.5-.5.8-1,.8s-.1,0-.2,0c-.5,0-.9-.6-.8-1.1,0-.1.5-2.7,2.2-5.1,1.7-2.3,4.6-4.1,4.7-4.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,.1,0-1.2-.3-2.4-.4-3.6-.3C6.5,1.4,2.6,4.6,1.4,9.2c-.1.5.2,1.1.7,1.2l4.8,1.3,14.5,3.9c0,0,.2,0,.3,0,.2,0,.3,0,.5-.1.2-.1.4-.4.5-.6,1.2-4.6-.7-9.7-4.8-12.2Z"/>     <path d="M14.9,1.4s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0Z"/>   </g>   <path d="M2.3,9.4l4.8,1.3,4.8,1.3,4.8,1.3,4.8,1.3"/>   <path d="M2,22h20"/>   <path d="M12,12l-2.8,10"/>   <path d="M11.2,2c1.1,0,2.2,0,3.3.3,1,.3,1.9.7,2.7,1.2"/>' : '<path d="M14.3409 21.4119L24.0002 24.0001L33.6594 26.5883L43.3187 29.1765C45.6567 20.4506 41.8476 11.5259 34.5459 7.00012C32.9196 5.99211 31.12 5.20232 29.1765 4.68156C26.9383 4.08183 24.6869 3.88656 22.5001 4.05095C14.2628 4.67018 6.94074 10.3926 4.68164 18.8237L14.3409 21.4119Z"/><path d="M29.1762 4.6814C29.1762 4.6814 23.5355 8.34634 20.3095 12.6583C17.0836 16.9703 16.2725 21.9294 16.2725 21.9294"/><path d="M29.1768 4.6814C29.1768 4.6814 32.2293 10.6757 32.8671 16.023C33.5048 21.3702 31.7278 26.0705 31.7278 26.0705"/><path d="M4.68164 18.8237L14.3409 21.4119L24.0002 24.0001L33.6594 26.5883L43.3187 29.1765"/><path d="M4 44H44"/><path d="M24 24L18.5 43.9999"/><path d="M22.5 4.05095C24.6868 3.88656 26.9382 4.08183 29.1764 4.68156C31.1199 5.20232 32.9195 5.99211 34.5458 7.00012"/>';

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

module.exports = BeachUmbrella;
