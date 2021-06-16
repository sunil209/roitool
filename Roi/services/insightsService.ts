import {ApiService} from "./apiService";
import { ApiConstants } from "../constants/apiConstants";
import  { PageSpeed }  from "../interface/pageSpeed";

export class InsightsService {

    queryParam: PageSpeed;
    private apiService = new ApiService;

    constructor() {
        this.queryParam = {
            fields: ApiConstants.GOOGLE_PAGESPEED_FIELD,
            key: ApiConstants.GOOGLE_API_KEY
        };        
    }

    requestDesktopStrategy(siteRequestURL: string) {
        return new Promise((resolve, reject) =>{
            this.queryParam.url = siteRequestURL;
            this.queryParam.fields = this.queryParam.fields+','+ApiConstants.GOOGLE_PAGESPEED_FIELD_SCREENSHOT;
            this.queryParam.strategy = ApiConstants.GOOGLE_PAGESPEED_STRATEGY_DESKTOP;
            this.queryParam.screenshot = true;
            this.apiService.getRequest(ApiConstants.GOOGLE_PAGESPEED_API_URL, this.queryParam)
            .then(result => { resolve(result); })
            .catch(error => { reject(error); });
        });
    }
    
    requestMobileStrategy(siteRequestURL: string) {
        return new Promise((resolve, reject) =>{
            this.queryParam.url = siteRequestURL;
            this.queryParam.fields = ApiConstants.GOOGLE_PAGESPEED_FIELD;
            this.queryParam.strategy = ApiConstants.GOOGLE_PAGESPEED_STRATEGY_MOBILE;
            this.apiService.getRequest(ApiConstants.GOOGLE_PAGESPEED_API_URL, this.queryParam).then(result => { resolve(result); })
            .catch(error => { reject(error); });
        });
    }

    requestDesktopStrategyImage(siteRequestURL: string) {
        return new Promise((resolve, reject) =>{
            this.queryParam.url = siteRequestURL;
            this.queryParam.fields = ApiConstants.GOOGLE_PAGESPEED_FIELD_SCREENSHOT;
            this.queryParam.strategy = ApiConstants.GOOGLE_PAGESPEED_STRATEGY_DESKTOP;
            this.queryParam.screenshot = true;
            this.apiService.getRequest(ApiConstants.GOOGLE_PAGESPEED_API_URL, this.queryParam)
            .then(result => { resolve(result); })
            .catch(error => { reject(error); });
        });
    }
}