declare function require(path: string): string;
import utils = require('./Utils');
var html = require('./Templates/Chart');

utils.registerTemplate(html);

class Chart {
    isVisible: any;
    greeting: string;

    constructor(message: string) {
        this.isVisible = ko.observable(false);
    }

    show(){
      this.isVisible(true);
    }

    buildCfg(data: any) {
      return {
        rangeSelector : {
            selected : 1
        },

        title : {
            text : 'AAPL Stock Price'
        },

        series : [{
            name : 'AAPL',
            data : data,
            tooltip: {
                valueDecimals: 2
            }
        }]
      };
    }
}




export = Chart;
