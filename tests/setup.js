import 'react';
import 'react-native';
// import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
// import {JSDOM} from 'jsdom';
// const url = 'http://localhost';
// const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {url});
// const {window} = jsdom;

// function copyProps(src, target) {
//   Object.defineProperties(target, {
//     ...Object.getOwnPropertyDescriptors(src),
//     ...Object.getOwnPropertyDescriptors(target),
//   });
// }

// global.window = window;
// global.document = window.document;
// global.navigator = {
//   userAgent: 'node.js',
// };
// copyProps(window, global);

Enzyme.configure({adapter: new Adapter()});
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));