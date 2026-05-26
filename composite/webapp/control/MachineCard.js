sap.ui.define([
    "sap/ui/core/XMLComposite",
    "sap/m/MessageToast"
], function (XMLComposite, MessageToast) {

    "use strict";

    return XMLComposite.extend(
        "demo.comp.composite.control.MachineCard",
        {

            metadata: {

                properties: {

                    machineId: {
                        type: "string",
                        defaultValue: "MC-1001"
                    },

                    status: {
                        type: "string",
                        defaultValue: "Running"
                    },

                    temperature: {
                        type: "string",
                        defaultValue: "68°C"
                    }

                }

            },

            onRefreshPress: function () {

                // Random temperature
                var iTemp =
                    Math.floor(
                        Math.random() * 20
                    ) + 60;

                // Random status
                var aStatus = [
                    "Running",
                    "Maintenance",
                    "Stopped",
                    "Idle"
                ];

                var sRandomStatus =
                    aStatus[
                        Math.floor(
                            Math.random() *
                            aStatus.length
                        )
                    ];

                // Update UI
                this.setTemperature(
                    iTemp + "°C"
                );

                this.setStatus(
                    sRandomStatus
                );

                MessageToast.show(
                    "Machine Dashboard Refreshed"
                );

            }

        }
    );

});