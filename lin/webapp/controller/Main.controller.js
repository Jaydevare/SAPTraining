sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "demo/lib/business/MachineLogic",
    "sap/m/MessageToast"
], function (
    Controller,
    MachineLogic,
    MessageToast
) {

    "use strict";

    return Controller.extend(
        "demo.lib.lin.controller.Main",
        {

            onInit: function () {

                console.log(
                    "Library Loaded Successfully"
                );

            },

            onRefresh: function () {

                var sStatus =
                    MachineLogic.getMachineStatus();

                var sTemp =
                    MachineLogic.getTemperature();

                MessageToast.show(
                    "Status : " +
                    sStatus +
                    " | Temp : " +
                    sTemp
                );

            }

        }
    );

});