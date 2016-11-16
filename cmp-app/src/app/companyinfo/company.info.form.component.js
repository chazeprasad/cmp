class CompanyInfoFormComponent{
    constructor(){

        this.dis = true

    }
    $onInit(){
        console.log('Form onInit')

    }

    submit(){

        this.onSubmit();
    }
}

let bindings =  {

        formData : '=',
        onSubmit : '&'

    };

let templateUrl = 'companyinfo/_company.info.form.html';
let controller = CompanyInfoFormComponent;

export default {
    bindings: bindings,
    templateUrl:templateUrl,
    controller: controller
};
