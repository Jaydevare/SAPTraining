sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {

    "use strict";

    return UIComponent.extend(
        "demo.comp.composite.Component",
        {

            metadata: {
                manifest: "json"
            },

            init: function () {

                UIComponent.prototype.init.apply(
                    this,
                    arguments
                );

                console.log(
                    "MachineMonitorComposite Initialized"
                );

            }

        }
    );

});