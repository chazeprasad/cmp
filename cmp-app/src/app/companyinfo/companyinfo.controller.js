class CompanyinfoController{
    constructor($scope, $mdBottomSheet,$mdSidenav, $mdMedia){
        'ngInject';

        this.$scope             = $scope;
        this.$mdBottomSheet     = $mdBottomSheet;
        this.$mdSidenav         = $mdSidenav;
        this.$mdMedia           = $mdMedia;

        this.logo = null;
        this.payload = {}
    }
    init(){
        this.menu = [
            {
                link : '',
                title: 'Company Information',
                icon: 'dashboard'
            },
            {
                link : '',
                title: 'Company Settings',
                icon: 'settings'
            },
            {
                link : '',
                title: 'Company Users',
                icon: 'group'
            }
        ];

        this.selectedMenu = this.menu[0];

    }
    toggleSidenav(menuId) {
        this.$mdSidenav(menuId).toggle();
    };
    onSubmit(){
        console.log(this.payload)
    }
}

export default CompanyinfoController
