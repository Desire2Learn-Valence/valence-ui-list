(function() {
	'use strict';

	describe('vui-list', function() {

		var list, item1, item2;

		beforeEach(function () {
			jasmine.addMatchers(vui.jasmine.dom.matchers);

			list = document.body.appendChild(document.createElement('ul'));
			list.className = 'vui-list';
			//list.style.color = 'green';

			item1 = list.appendChild(document.createElement('li' ));
			item1.appendChild(document.createTextNode('some stuff'));

			item2 = list.appendChild(document.createElement('li' ));
			item2.appendChild(document.createTextNode('some stuff'));

		});

		describe('selectors', function() {

			it('defines a ".vui-list" selector', function() {
				expect(document).toHaveCssSelector('.vui-list');
			});

			it('defines a ".vui-list > li" selector', function() {
				expect(document).toHaveCssSelector('.vui-list > li');
			});

			it('defines a ".vui-list.vui-compact > li" selector', function() {
				expect(document).toHaveCssSelector('.vui-list.vui-compact > li');
			});

			it('defines a ".vui-list.vui-no-separator > li" selector', function() {
				expect(document).toHaveCssSelector('.vui-list.vui-no-separator > li');
			});

			it('defines a ".vui-list > .vui-selected" selector', function() {
				expect(document).toHaveCssSelector('.vui-list > .vui-selected');
			});

			it('defines a ".vui-list > .vui-active" selector', function() {
				expect(document).toHaveCssSelector('.vui-list > .vui-active');
			});

			it('defines a ".vui-list > .vui-active.vui-selected" selector', function() {
				expect(document).toHaveCssSelector('.vui-list > .vui-active.vui-selected');
			});

		});

		describe('normal list', function() {

			it('to have 0px padding', function() {
				expect(list).toHavePadding('0px');
			});

			it('to have no list item markers', function() {
				expect(list).toHaveListStyleType('none');
				expect(list).toHaveListStyleImage('none');
				expect(list).toHaveListStylePosition('outside');
			});

			it('first item to have separator', function() {
				expect(item1).toHaveBottomBorderWidth('1px');
				expect(item1).toHaveBottomBorderColor('rgb(234, 234, 234)');
				expect(item1).toHaveBottomBorderStyle('solid');
				expect(item1).toHaveTopBorderWidth('0px');
				expect(item1).toHaveRightBorderWidth('0px');
				expect(item1).toHaveLeftBorderWidth('0px');
			});

			it('first item to not have separator', function() {
				expect(item2).toHaveBottomBorderWidth('1px');
				expect(item2).toHaveBottomBorderColor('rgba(0, 0, 0, 0)');
				expect(item2).toHaveBottomBorderStyle('solid');
			});

		});

		describe('compact list', function() {

			beforeEach(function() {
				list.className = 'vui-list vui-compact';
			});

			it('items to have 0px 10px padding', function() {
				expect(item1).toHaveTopPadding('0px');
				expect(item1).toHaveRightPadding('10px');
				expect(item1).toHaveBottomPadding('0px');
				expect(item1).toHaveLeftPadding('10px');
			});

		});

		describe('list with no separators', function() {

			beforeEach(function() {
				list.className = 'vui-list vui-no-separator';
			});

			it('first item not have separator', function() {
				expect(item2).toHaveBottomBorderWidth('1px');
				expect(item2).toHaveBottomBorderColor('rgba(0, 0, 0, 0)');
				expect(item2).toHaveBottomBorderStyle('solid');
			});

			it('last item to not have separator', function() {
				expect(item2).toHaveBottomBorderWidth('1px');
				expect(item2).toHaveBottomBorderColor('rgba(0, 0, 0, 0)');
				expect(item2).toHaveBottomBorderStyle('solid');
			});

		});

		describe('items', function() {

			it('items to have 7px 10px padding', function() {
				expect(item1).toHaveTopPadding('7px');
				expect(item1).toHaveRightPadding('10px');
				expect(item1).toHaveBottomPadding('7px');
				expect(item1).toHaveLeftPadding('10px');
			});

			it('to have background color when selected', function() {
				item1.className = 'vui-selected';
				expect(item1).toHaveBackgroundColor('rgb(232, 242, 252)');
				expect(item1).toHaveBottomBorderColor('rgb(245, 245, 245)');
			});

			it('to have background color when active', function() {
				item1.className = 'vui-active';
				expect(item1).toHaveBackgroundColor('rgb(231, 231, 231)');
			});

			it('to have background color when selected and active', function() {
				item1.className = 'vui-active vui-selected';
				expect(item1).toHaveBackgroundColor('rgb(211, 231, 250)');
			});


		});

	});

})();
