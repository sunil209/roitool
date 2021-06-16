import * as FieldValidatorService from '../../../Generic/Form/JS/FieldValidatorService';
import { RoiAjaxActionHandles } from '../../../Generic/RoiSingleStep/JS/RoiAjaxActionHandles';
import  RoiAjaxHandler  from '../../../Generic/RoiSingleStep/JS/RoiAjaxRequest';
import {CookieService} from '../../services/index';


const needHelperConfig = {
    form: {
        id: 'pc-roi-need-help',
        emailId:'needHelpEmail',
        hiddenFieldSelector:'hiddenSelection',
        refEmailId : 'ref_email_address'
    },
    button:{
        class:'need-help-button'
    }
}
export default class NeedHelpHandler {

    cookieService = new CookieService;
    requestHandler = new RoiAjaxHandler;
    

    initializeFormHandler() {
      //  this.setHiddenFieldValue( optionSelected );
        const needHelpSubmitElement = document.querySelector('.'+needHelperConfig.button.class );

        if( needHelpSubmitElement ){

            needHelpSubmitElement.addEventListener('click', function(evt){

                const getInitialSelection = JSON.parse(this.cookieService.getCookie('formdata_step_1'));
                if (getInitialSelection.hasOwnProperty('email')) {
                    const getRefEmailId = document.getElementById(  needHelperConfig.form.refEmailId ); 
                    if(getRefEmailId){
                        getRefEmailId.value = getInitialSelection.email;
                    }
                }

                const needHelpFormElement = document.getElementById(  needHelperConfig.form.emailId );            
                const isFormValid =  FieldValidatorService.isInputValid(needHelpFormElement);
             
               if( isFormValid ){
                const formElement = document.getElementById(needHelperConfig.form.id);
                const getFormData = Object.fromEntries(new FormData(formElement).entries());
                this.requestHandler.sendFetchRequest( RoiAjaxActionHandles.SEND_NEED_HELP_REQUEST ,  getFormData )
                .then(res => {
                    setTimeout(function(){ 
                        const roiHelpPopup = document.getElementById('pc-roi-help-popup');
                        if(roiHelpPopup) {
                            roiHelpPopup.classList.add('pc-hide-step');
                        } 
                    }, 500);
                });

               }
            }.bind(this));
        }
    }

    setHiddenFieldValue( optionSelected ){
        if( optionSelected ){
            document.querySelector( '#' + needHelperConfig.form.hiddenFieldSelector ).value = optionSelected;
        }
    }
}