'use strict';

var React = require('react');

function NuclearPlant(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,22h20"/>   <path d="M6,7h12"/>   <path d="M12,4l.4-.4c.4-.4.9-.6,1.4-.6h.3c.5,0,1-.2,1.4-.6l.4-.4"/>   <path d="M20.6,17.5c0-.4-.1-.9-.3-1.3l-1.7-5c0-.3-.1-.5-.2-.8l-.4-3.5c0-.5-.5-.9-1-.9H7c-.5,0-.9.4-1,.9l-.4,3.5c0,.3,0,.5-.2.8l-1.7,5c-.1.4-.2.9-.3,1.3l-.4,4.4c0,.3,0,.6.3.8.2.2.5.3.7.3h16c.3,0,.6-.1.7-.3.2-.2.3-.5.3-.8l-.4-4.4ZM8.7,12.4c.9-.9,2-1.4,3.3-1.4s2.4.5,3.3,1.4c.4.4.4,1,0,1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-1-1-2.7-1-3.6,0-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4ZM11.6,19.1c-.2.4-.5.6-.9.6s-.3,0-.4,0c-.6-.2-1.1-.6-1.5-1-.8-.8-1.2-1.9-1.2-3.1s.4-1,1-1,1,.4,1,1,.2,1.3.7,1.7c.2.2.5.4.8.6.5.2.7.8.5,1.3ZM11,15.5c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1ZM15.3,18.6c-.4.4-.9.8-1.5,1-.1,0-.3,0-.4,0-.4,0-.8-.2-.9-.6-.2-.5,0-1.1.5-1.3.3-.1.6-.3.8-.6.4-.5.7-1.1.7-1.7s.4-1,1-1,1,.4,1,1c0,1.2-.4,2.3-1.2,3.1Z"/>' : '<path d="M4 44H44"/><path d="M12 14H36"/><path d="M14 14H24H34L34.8772 21.0175C34.9589 21.6709 35.1049 22.3147 35.3131 22.9394L38.6474 32.9422C38.8817 33.6452 39.0372 34.3721 39.1109 35.1095L40 44H8L8.88905 35.1095C8.96279 34.3721 9.11826 33.6452 9.35259 32.9422L12.6869 22.9394C12.8951 22.3147 13.0411 21.6709 13.1228 21.0175L14 14Z"/><path d="M24 8L24.8284 7.17157C25.5786 6.42143 26.596 6 27.6569 6H28.3431C29.404 6 30.4214 5.57857 31.1716 4.82843L32 4"/><path d="M17 31C17 32.8728 17.7354 34.5738 18.9333 35.83C19.5891 36.5178 20.3836 37.0722 21.2718 37.4484"/><path d="M31.0004 31C31.0004 32.8728 30.2649 34.5738 29.0671 35.83C28.4112 36.5178 27.6168 37.0722 26.7285 37.4484"/><path d="M18.9336 26.17C20.2085 24.8331 22.0071 24 24.0003 24C25.9935 24 27.7922 24.8331 29.067 26.17"/><circle cx="24" cy="31" r="2"/>';

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

module.exports = NuclearPlant;
