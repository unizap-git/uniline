'use strict';

var React = require('react');

function Upi(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g id="g126">     <path id="path128" d="M17.6,14.8h-1.1l1.6-5.6h1.1s-1.6,5.6-1.6,5.6Z"/>   </g>   <g id="g130">     <path id="path132" d="M15.9,12.5c.2,0,.4-.2.5-.4l.6-2.7c0-.2,0-.4-.3-.4h-6.3l-.3,1.1h5.6l-.3,1.2h-5.6l-.9,3.4h1.1l.6-2.3h5.3,0Z"/>   </g>   <g id="g134">     <path id="path136" d="M8.2,14.5c0,.2-.3.4-.5.4H1.9c-.2,0-.3,0-.4-.2v-.4l1.4-5.1h1.1l-1.3,4.5h4.5l1.3-4.5h1.1s-1.4,5.3-1.4,5.3Z"/>   </g>   <g id="g138">     <path id="path140" d="M21.1,9.2l1.4,2.8-3,2.8s1.6-5.6,1.6-5.6Z"/>   </g>   <g id="g142">     <path id="path144" d="M20.1,9.2l1.4,2.8-3,2.8s1.6-5.6,1.6-5.6Z"/>   </g>' : '<g>     <g id="g138">       <path id="path140" d="M42.4,24l-4.3,3.9,2.1-8s2.1,4.1,2.1,4.1Z" stroke-miterlimit="10"/>     </g>     <g id="g142">       <path id="path144" d="M41,24l-4.3,3.9,2.1-8s2.1,4.1,2.1,4.1Z" stroke-miterlimit="10"/>     </g>   </g>   <path d="M8.6,19l-2.3,8.2c0,.4,0,.7.5.7h8.7c.4,0,.5-.2.5-.4l2.5-8.6" stroke-miterlimit="10"/>   <path d="M19.1,29l2.5-9.1h9.3c.4,0,.7.4.5.7l-.7,2.9c0,.4-.4.5-.5.5h-9.6" stroke-miterlimit="10"/>   <line x1="35.5" y1="19" x2="32.8" y2="29" stroke-miterlimit="10"/>';

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

module.exports = Upi;
