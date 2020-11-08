"use strict";
exports.__esModule = true;
var react_1 = require("@testing-library/react");
var _1 = require(".");
describe('<Main />', function () {
    it('should render the heading', function () {
        var container = react_1.render(React.createElement(_1["default"], null)).container;
        expect(react_1.screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
    it('should render colors correctly', function () {
        var container = react_1.render(React.createElement(_1["default"], null)).container;
        expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
    });
});
