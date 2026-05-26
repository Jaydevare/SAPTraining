sap.ui.define([], function () {

    "use strict";

    return {

        getMachineStatus: function () {

            var aStatus = [
                "Running",
                "Maintenance",
                "Stopped",
                "Idle"
            ];

            return aStatus[
                Math.floor(
                    Math.random() *
                    aStatus.length
                )
            ];

        },

        getTemperature: function () {

            return (
                Math.floor(
                    Math.random() * 20
                ) + 60
            ) + "°C";

        }

    };

});