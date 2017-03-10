/**
 * Created by ramor11 on 3/7/2017.
 */
require('./style.less');

class FourComponentCtrl implements ng.IComponentController {

    static $inject: Array<string> = ['$element'];

    constructor(private $element) {

    }

    $onInit() {


    }
}


export class FourComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.template = require('./four.html');
        this.controller = FourComponentCtrl
    }
}