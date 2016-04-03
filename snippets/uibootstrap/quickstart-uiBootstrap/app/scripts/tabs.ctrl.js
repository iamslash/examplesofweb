'use strict';

angular.module('quickstart')
    .controller('TabsCtrl', function ($scope) {

        $scope.tabs = [{
            title: '제목 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ' +
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
                'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
                'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
                'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
            title: '제목 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ' +
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
                'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
                'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
                'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            active: true
        }, {
            title: '제목 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ' +
                'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
                'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
                'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
                'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            disabled: true
        }];

    });