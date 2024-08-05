// const chai = await import('chai')
const chai = (...args) => import('chai').then(mod => mod.default(...args));

global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should;
