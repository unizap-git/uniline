'use strict';

var React = require('react');

function Ayurvedic(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,9H2c-.6,0-1,.4-1,1,0,4.4,2.6,8.3,6.7,10,0,.1.2.6.4,1.6,0,.5.5.9,1,.9h5.9c.5,0,1-.4,1-1,0-.9.1-1.3.2-1.4,4.1-1.7,6.9-5.7,6.9-10.1,0-1.2-.4-1-1-1h-.1ZM9.8,16.8c-.2.3-.4.4-.7.4s-.5-.2-.7-.4c-.5-.4-.9-.8-1.3-1.2-.4-.5-.7-1.1-.9-1.8-.2-.5,0-1.1.7-1.2.5-.2,1.1.1,1.2.7.1.5.3.9.6,1.2.2.3.5.6.9.9.4.3.5,1,.2,1.4h0Z"/>   <path d="M12.6,11c-.1,0-.3,0-.4-.1-.5-.2-.7-.8-.5-1.3,1.9-3.9,3-6.2,3.3-6.8.7-1.5,2.3-2.1,3.9-1.4.7.3,1.3.9,1.6,1.6.3.7.2,1.5,0,2.2-.3.5-1.1,2.3-2.6,5.3-.2.5-.8.7-1.3.5s-.7-.8-.5-1.3c1.5-3,2.3-4.8,2.6-5.3v-.6s-.2-.4-.5-.5-.9-.3-1.3.5c-.3.7-1.4,3-3.3,6.9-.2.4-.5.6-.9.6v-.3h-.1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 43C24.8653 43 26.8503 43 29.9551 43C30.0381 40.2631 30.4393 38.7582 31.1586 38.4852C38.6685 35.6357 44 28.434 44 20H4C4 28.2514 9.10319 35.3234 16.3568 38.2941C17.1151 38.6047 17.6815 40.1733 18.056 43C21.0857 43 23.067 43 24 43Z"/><path d="M14.4434 27.0225C14.803 28.2103 15.2786 29.191 15.8702 29.9646C16.4484 30.7209 17.1619 31.4223 18.0104 32.0688"/><path d="M25.2139 20.0264C28.9697 12.2748 31.177 7.70521 31.8358 6.31775C32.8851 4.10791 35.0156 3.57614 36.9808 4.41569C38.9459 5.25524 39.7411 7.65828 38.9162 9.33311C38.4068 10.3675 36.6766 13.9245 33.7258 20.004"/>';

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

module.exports = Ayurvedic;
