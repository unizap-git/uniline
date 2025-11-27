'use strict';

var React = require('react');

function Pig(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M23,5.5c0-.9-.3-1.6-.8-2.2-1.5-1.5-4.3-.8-5.9.8-.1.1-.2.2-.3.3-2.5-1.2-5.5-1.2-7.9,0,0-.1-.2-.2-.3-.3-1.6-1.6-4.4-2.3-5.9-.8-.5.5-.8,1.3-.8,2.2,0,1.3.6,2.7,1.6,3.7.2.2.5.4.8.6-.3.9-.4,1.8-.4,2.7,0,5,4,9,9,9s9-4,9-9-.1-1.8-.4-2.6c.3-.2.6-.4.8-.7,1-1,1.6-2.4,1.6-3.7ZM20,7.8c-.3.3-.6.5-1,.7-.5.2-.7.8-.5,1.3.4.9.5,1.8.5,2.7,0,3.9-3.1,7-7,7s-7-3.1-7-7,.2-1.9.5-2.7c.2-.5,0-1.1-.5-1.3-.4-.2-.7-.4-1-.7-.6-.6-1-1.5-1-2.3s0-.6.2-.8c.2-.2.4-.2.8-.2.7,0,1.6.4,2.3,1t0,0c.2.2.4.4.5.7.1.2.4.4.6.5.3,0,.5,0,.8-.1,2.2-1.4,5.2-1.4,7.5,0,.2.1.5.2.8.1.3,0,.5-.2.6-.5.2-.3.4-.5.6-.7,1-1,2.6-1.3,3.1-.8.2.2.2.5.2.8,0,.8-.4,1.7-1,2.3Z"/>     <path d="M12,10c-2.8,0-5,2-5,4.5s2.2,4.5,5,4.5,5-2,5-4.5-2.2-4.5-5-4.5ZM10.5,15.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM13.5,15.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   </g>   <circle cx="8.5" cy="9" r="1"/>   <circle cx="15.5" cy="9" r="1"/>' : '<path d="M14.0538 9.64415C14.5962 10.1855 15.0733 10.8148 15.4678 11.4894C17.927 9.95189 20.8351 9.06302 23.9511 9.06302C27.0975 9.06302 30.0317 9.96926 32.5061 11.5345C32.9055 10.8428 33.3917 10.1975 33.9462 9.64418C36.4673 7.12825 40.8924 6.02041 42.937 8.06083C44.9816 10.1012 43.8715 14.5172 41.3504 17.0332C40.6016 17.7805 39.6848 18.4035 38.7122 18.8568C39.511 20.7563 39.9524 22.8424 39.9524 25.0315C39.9524 33.8507 32.7884 41 23.9511 41C15.1138 41 7.94978 33.8507 7.94978 25.0315C7.94978 22.8277 8.39715 20.7281 9.20621 18.8183C8.26404 18.3685 7.37746 17.7595 6.64959 17.0331C4.12849 14.5172 3.01837 10.1012 5.06298 8.06079C7.10758 6.02038 11.5327 7.12822 14.0538 9.64415Z"/><ellipse cx="24" cy="29" rx="8" ry="7"/><circle cx="17" cy="18" r="2"/><circle cx="21" cy="29" r="2"/><circle cx="31" cy="18" r="2"/><circle cx="27" cy="29" r="2"/>';

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

module.exports = Pig;
