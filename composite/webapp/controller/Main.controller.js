sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    "use strict";

    return Controller.extend(
        "demo.comp.composite.controller.Main",
        {

            onInit: function () {

                console.log(
                    "Machine Dashboard Loaded"
                );

            }

        }
    );

});