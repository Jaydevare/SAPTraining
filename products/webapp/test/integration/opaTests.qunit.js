/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/prod/products/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
