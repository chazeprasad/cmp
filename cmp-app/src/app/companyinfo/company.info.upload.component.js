
class CompanyInfoUploadComponent {
    constructor($timeout){
        'ngInject'

        this.$timeout = $timeout
        this.name = 'companyInfoUpload';

        this.maxFileSize = 1;
        this.image = null;


    }
    $onInit(){
        console.log('onInit')
        this.setup();
    }
    reset(){
        if(this.image){
            this.image.croppie('destroy')
            this.image = null
        }
    }
    setup(){
        this.reset()

        $('#imageFile').on('change', (event) =>{
            var file, name, reader, size, type, input, scope;
            input = $('#imageFile');
            if (event != null) {
              event.stopPropagation();
              event.preventDefault();

              var file = null;
              if (event.dataTransfer) {// file drag and drop
                file = event.dataTransfer.files[0] || null;
              }else if ($(input)[0].files) {// file upload
                file = $(input)[0].files[0] || null;
              }
              if (!file) {
                return;
              }

              // uploadFileToUrl(file, scope.action);
              reader = new FileReader();
              reader.readAsDataURL(file, 'UTF-8');

            }
            var maxFileSize = 1;
            var checkSize = function(size){
              var _ref;
              if (((_ref = maxFileSize) === (void 0) || _ref === '') || (size / 1024) / 1024 < maxFileSize) {
                return true;
              } else {
                alert('File must be smaller than ' + maxFileSize + ' MB');
                return false;
              }
            }

            reader = new FileReader();
            reader.onload = (evt) => {
              if (checkSize(size)) {
                  file = evt.target.result;
                  if(this.image){
                      this.image.croppie('destroy')
                      this.image = null
                  }
                  var image = $('#imageWrap').croppie({
                      viewport: { width: 264, height: 88, type: 'square' },
                      // boundary: { width: 300, height: 300 },
                      showZoomer: false
                  });

                  this.image = image;
                  this.image.croppie('bind', {
                      url: file
                  }).then(function(){
                      console.log('jQuery bind complete');
                  });
                  if(this.image){
                      this.image.croppie('result', 'base64', {width:1025, height:400},'png', 1, false).then((img) => {
                          // console.log(img)
                          this.img = img

                      });
                  }
              }
            };
            // file = event.dataTransfer.files[0];
            name = file.name;
            type = file.type;
            size = file.size;
            reader.readAsDataURL(file);

        });
    }



}
let bindings =  {

        img : '='

    };

let templateUrl = 'companyinfo/_upload.html';
let controller = CompanyInfoUploadComponent;

export default {
    bindings: bindings,
    templateUrl:templateUrl,
    controller: controller
};
