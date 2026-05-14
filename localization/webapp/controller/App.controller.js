sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {

    "use strict";

    return Controller.extend("demo.local.localization.controller.App", {

        onPress: function() {

            MessageToast.show("Button Clicked");

        }

    });

});