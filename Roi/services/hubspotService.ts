import { RoiAjaxActionHandles } from '../../Generic/RoiSingleStep/JS/RoiAjaxActionHandles';
import { ApiConstants } from '../constants/apiConstants';
import { CookieService } from './cookieService';

export class HubspotService {

    hubSpotForm = ApiConstants.ROI_HUBSPOT_FORMID;
    successElementClass = ApiConstants.ROI_HUBSPOT_SUCCESS_CLASS;
    cookieService = new CookieService;

    hubspotFormEvents() {
        return new Promise((resolve) => {
            window.addEventListener('message', event => {
                if (event.data.id == this.hubSpotForm) {

                    if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
                        
                        if(event.data.id == 'b992d5ab-4e12-46c5-b2ac-1ccd4deaf533'){
                               // this.loadTimeInterval('XZMF3dtckyWpSt0DmgB4' , 3000);
                        }

                        if(event.data.id == '0a504066-62af-4ccb-ae1c-22792840ee37'){
                               // this.loadTimeInterval('eEk4jykxuN58Ep0y6rgb', 3000);
                        }

                    }

                    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                        const successElement = document.getElementsByClassName(this.successElementClass);
                        const userInitialSelection = this.getInitialSelection();

                        if (successElement && (userInitialSelection !== null && userInitialSelection !== RoiAjaxActionHandles.GOOGLE_ADS_FORM_ELEMENT)) {
                            successElement[0].innerText = "";
                            this.elementHideenAction();
                        }else if (successElement && (userInitialSelection !== null && userInitialSelection === RoiAjaxActionHandles.GOOGLE_ADS_FORM_ELEMENT)){
                            successElement[0].innerText = "";
                            successElement[0].classList.add('pc-loader');
                        }
                        resolve(event);
                    }
                }
            });
        });
    }

    elementHideenAction() {
        const hs_getUserOptionVal = document.getElementById('getSelectionOption').getAttribute('value');
        const hs_getSelectorNextOptionAndStep = '.' + hs_getUserOptionVal + '.pc-roi-step-2';
        const hs_nextOptionsStep = document.querySelector(hs_getSelectorNextOptionAndStep);

        const userInitialSelection = this.getInitialSelection();

        if (userInitialSelection !== null && userInitialSelection !== RoiAjaxActionHandles.GOOGLE_ADS_FORM_ELEMENT) {
            hs_nextOptionsStep.classList.remove('pc-hide-step');
            const hs_defaultClass = document.querySelector('.pc-inner-default-step');
            hs_defaultClass.classList.add('pc-hide-step');
        }
    }

    getInitialSelection() {
        return this.cookieService.getCookie('userOption');
    }


    loadZoomInfo(form_id : string) {
        window._zi = {formId: form_id};
        var zi = document.createElement('script');
        zi.type = 'text/javascript';
        zi.async = true;
        zi.src = 'https://ws-assets.zoominfo.com/formcomplete.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(zi, s);
    }


    loadTimeInterval(form_id : string , timeInterval: number){
        setTimeout(() => {
            this.loadZoomInfo(form_id);
        }, timeInterval);
    }

}