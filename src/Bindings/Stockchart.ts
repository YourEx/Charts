interface KnockoutBindingHandlers {
    prependText: KnockoutBindingHandler;
}

ko.bindingHandlers.prependText = {
  init(el: any, valueAccessor: any){
  },

  update(el: any, valueAccessor: any){
    var value = valueAccessor();
    var model = ko.unwrap(value);
    $(el).highcharts("StockChart", model.options);
  }
}
