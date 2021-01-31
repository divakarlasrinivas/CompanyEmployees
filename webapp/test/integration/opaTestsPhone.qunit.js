/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/basf/techInterview/test1/CompanyEmployees/test/integration/PhoneJourneys"
	], function () {
		QUnit.start();
	});
});
