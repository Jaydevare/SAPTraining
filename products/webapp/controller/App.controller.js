sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast, MessageBox) {
  "use strict";

  return Controller.extend("demo.prod.controller.Product", {

    sBaseUrl: "/sap/opu/odata4/sap/zui_product_014_04/srvd/sap/zui_product_014/0001/ZI_PRODUCT_014",

    onInit: function () {
      this.loadProducts();
    },
    loadProducts: function () {
      var oModel = new JSONModel();
      var that = this;
    },

    onSubmit: function () {

      var sProductId = this.byId("productId").getValue();
      var sProductName = this.byId("productName").getValue();
      var sPrice = this.byId("price").getValue();
      var sCurrency = this.byId("currency").getValue();

      var oPayload = {
        product_id: sProductId,
        product_name: sProductName,
        price: parseFloat(sPrice),
        currency: sCurrency
      };

      var that = this;

      $.ajax({
          url: this.sBaseUrl,
          method : "GET",
          headers: {
            "X-CSRF-Token": "Fetch"
          },

          success :function(data, textStatus, request){
            var sToken = request.getResponseHeader("X-CSRF-Token");

            $.ajax({

              url: that.sBaseUrl,
              method : "POST",
              contentType: "application/json",
              data: JSON.stringify(oPayload),

              headers: {
                "X-CSRF-TOKEN" : sToken,
                contentType : "application/json"
              },

              success : function() {
                MessageToast.show("Product created successfully!");
                that.loadProducts();
              },

              error : function(oError) {
                MessageBox.error("Error Failed");
                console.log(oError);
              }
            });
          },

          erro : function(oError) {
            MessageBox.error("Failed to fetch CSRF token");
            console.log(oError);
          }

      });
    },

  })
});

