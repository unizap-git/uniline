'use strict';

var React = require('react');

function BytedanceMiniApp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM14.1,16.9l-.7.7c-.6.6-1.4.9-2.1.9s-1.5-.3-2.1-.9l-2.8-2.8c-.6-.6-.9-1.3-.9-2.1s.3-1.6.9-2.1l.7-.7c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.7.7c-.2.2-.3.4-.3.7s.1.5.3.7l2.8,2.8c.4.4,1,.4,1.4,0l.7-.7c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4ZM10.2,12.4l2.1-2.1c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-2.1,2.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4ZM17.7,13.4l-.7.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.7-.7c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-2.8-2.8c-.4-.4-1-.4-1.4,0l-.7.7c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l.7-.7c1.1-1.1,3.1-1.1,4.2,0l2.8,2.8c.6.6.9,1.3.9,2.1s-.3,1.6-.9,2.1Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M26.1215 21.8789L21.8789 26.1215"/><path d="M32.4851 26.8285L33.8993 25.4143C35.4614 23.8522 35.4614 21.3195 33.8993 19.7574L28.2425 14.1005C26.6804 12.5384 24.1477 12.5384 22.5856 14.1005L21.1714 15.5148"/><path d="M26.8282 32.4853L25.414 33.8995C23.8519 35.4616 21.3193 35.4616 19.7572 33.8995L14.1003 28.2427C12.5382 26.6806 12.5382 24.1479 14.1003 22.5858L15.5145 21.1716"/>';

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

module.exports = BytedanceMiniApp;
