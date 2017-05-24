"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var _2 = require("../../actions/");
var _3 = require("../../");
var react_router_redux_1 = require("react-router-redux");
var testConfig = {
    '1': {
        id: '1',
        name: 'Home',
        routes: ['/main/home', '/', '/intro'],
        pathname: '/main/home',
        level: 0,
        childrenIds: [],
        parentId: null
    },
    '2': {
        id: '2',
        name: 'Assessments',
        routes: ['/main/assessments'],
        level: 1,
        pathname: '/main/assessments',
        childrenIds: ['6']
    },
    '9': {
        id: '9',
        name: 'Videos',
        routes: [new RegExp('/main/videos/[0-9]*')],
        level: 1,
        pathname: '/main/videos/',
        childrenIds: ['5']
    },
    '4': {
        id: '4',
        name: 'Library',
        routes: ['/main/library'],
        pathname: '/main/library',
        level: 1,
        childrenIds: []
    },
    '7': {
        id: '7',
        name: 'Resources',
        routes: ['/main/resources'],
        pathname: '/main/resources',
        level: 1,
        childrenIds: []
    },
    '5': {
        id: '5',
        name: 'Video',
        routes: [new RegExp('/main/video/[0-9]+')],
        level: 2,
        pathname: '/main/video',
        childrenIds: [],
    },
    '6': {
        id: '6',
        name: 'Assessment',
        routes: [new RegExp('/main/assessment/[0-9]+')],
        level: 2,
        pathname: '/main/assessment',
        childrenIds: ['8']
    },
    '8': {
        id: '8',
        name: 'Assessment Result',
        routes: [new RegExp('/main/assessmentresult/[0-9]+')],
        level: 2,
        pathname: '/main/assessmentresult',
        childrenIds: []
    }
};
var fakePushEvent = function (pathname) {
    return {
        type: react_router_redux_1.LOCATION_CHANGE,
        payload: {
            action: 'push',
            pathname: pathname
        }
    };
};
function initNavigationReducer() {
    var storeMock = {};
    storeMock.dispatch = jest.fn();
    var blankNext = jest.fn();
    _3.navigationCreateMiddleware(testConfig)(storeMock)(blankNext);
    var callArgs = storeMock.dispatch.mock.calls[0];
    //callArgs == The arguments past to storeMock.dispatch
    var action = callArgs[0].type;
    var config = callArgs[0].config;
    return _1.navigation(undefined, _2.init(config));
}
describe('Reducer Tests', function () {
    it('Test navigation logic when traversing config tree', function () {
        var storeMock = {};
        storeMock.dispatch = jest.fn();
        var blankNext = jest.fn();
        _3.navigationCreateMiddleware(testConfig)(storeMock)(blankNext);
        var callArgs = storeMock.dispatch.mock.calls[0];
        //callArgs == The arguments past to storeMock.dispatch
        var action = callArgs[0].type;
        var config = callArgs[0].config;
        var currentState = _1.navigation(undefined, {});
        expect(_1.navigatinDefaults).toEqual(currentState);
        //init tree
        currentState = _1.navigation(undefined, _2.init(config));
        currentState = _1.navigation(currentState, fakePushEvent('/main/home'));
        currentState = _1.navigation(currentState, fakePushEvent('/main/videos/1'));
        expect(currentState.paths.last.id).toEqual('1');
        expect(currentState.paths.current.id).toEqual('9');
        //go to page 2 of vidoes and check for correct "current and last states" 
        currentState = _1.navigation(currentState, fakePushEvent('/main/videos/2'));
        expect(currentState.paths.last.id).toEqual('9');
        expect(currentState.paths.last.pathname).toEqual('/main/videos/1');
        expect(currentState.paths.current.id).toEqual('9');
        expect(currentState.paths.current.pathname).toEqual('/main/videos/2');
        //go to child path "vidoe details for video 17"
        currentState = _1.navigation(currentState, fakePushEvent('/main/video/17'));
        expect(currentState.paths.last.id).toEqual('9');
        expect(currentState.paths.last.pathname).toEqual('/main/videos/2');
        expect(currentState.paths.current.id).toEqual('5');
        expect(currentState.paths.parent.id).toEqual('9');
        //go back to videos page 2 route then to page 1
        currentState = _1.navigation(currentState, fakePushEvent('/main/videos/2'));
        currentState = _1.navigation(currentState, fakePushEvent('/main/videos/1'));
        expect(currentState.paths.last.id).toEqual('9');
        expect(currentState.paths.last.pathname).toEqual('/main/videos/2');
        expect(currentState.paths.current.id).toEqual('9');
        expect(currentState.paths.current.pathname).toEqual('/main/videos/1');
        // then go to child path "vidoe details for video 34"
        currentState = _1.navigation(currentState, fakePushEvent('/main/video/34'));
        expect(currentState.paths.last.id).toEqual('9');
        expect(currentState.paths.last.pathname).toEqual('/main/videos/1');
        expect(currentState.paths.current.id).toEqual('5');
        expect(currentState.paths.current.pathname).toEqual('/main/video/34');
    });
    it('Should throw an error for unregistered paths', function () {
        var currentState = initNavigationReducer();
        expect(function () { _1.navigation(currentState, fakePushEvent('/main/asdfasd')); }).toThrowError(/Unregistered/);
    });
});
//# sourceMappingURL=index-test.js.map