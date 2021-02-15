sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		/*
		set photograph converts the string in to base64 and adds a mime type as well to the binary string
		*/
		setPhotograph : function(image){
			
			return image ?  "data:image/png;base64," + image.substr(104) : image;
		},
		phoneNumberWithExtension: function(homeNumber, extension){
			return "m:"+ homeNumber+" - "+extension;
		},
		dateFormatter: function(dateStr){
			
			return dateStr ? new Date(dateStr).toLocaleDateString() : "Not Available";
		},
		getMyManagerName: function(details){
			if(details !== undefined){
			return	details.mTitleOfCourtesy + details.mFirstName + details.mLastName
			
			}
		}
	};
});