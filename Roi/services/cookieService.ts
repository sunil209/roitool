import { ApiConstants } from '../constants/apiConstants'
export class CookieService {

    localStorage = localStorage;

    latestDate : Date;

    constructor(){
        this.latestDate = new Date();
    }

    setCookie(name: string, cookieValue: string) {  
        // Set it expire in 7 days
        this.latestDate.setTime(this.latestDate.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = name+"="+cookieValue+"; path=/";
    }
    
    getCookie(name: string) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
        return null; 
    }
       
    deleteCookie(name: string) {    
        // Set it expire in -1 days
        this.latestDate.setTime(this.latestDate.getTime() + (-1 * 24 * 60 * 60 * 1000));    
        // Set it
        document.cookie = name+"=; expires="+this.latestDate.toUTCString()+"; path=/";
    }

    clearFullCookie(){
        this.deleteCookie(ApiConstants.ROI_COOKIE_PARTIALLY);
        this.deleteCookie(ApiConstants.ROI_COOKIE_USEROPTION);
        this.deleteCookie(ApiConstants.ROI_COOKIE_CURRENTSTEP);
        this.deleteCookie(ApiConstants.ROI_COOKIE_FORMDATA_STEP_1);
        this.deleteCookie(ApiConstants.ROI_COOKIE_FORMDATA_STEP_2);
        this.deleteCookie(ApiConstants.ROI_COOKIE_FORMDATA_STEP_3);
        this.removeGACookies();
    }

    setCurrentSession(){
        this.setlocalStorageData( ApiConstants.ROI_SESSION_ID , this.latestDate.getTime() );
    }

    setlocalStorageData( $itemName:string, $itemValue:any ) {
        this.localStorage.setItem(  $itemName ,  $itemValue );
    }

    getLocalStorageData( $itemName:string ) {
       return this.localStorage.getItem($itemName);
    }

    localStoragePropertyExits( $itemName:string ){
        return this.localStorage.hasOwnProperty($itemName);
    }

    removeGACookies(){
        this.deleteCookie(ApiConstants.ROI_COOKIE_GA_MANAGER);
        this.deleteCookie(ApiConstants.ROI_COOKIE_GA_MANAGER_LIST);
        this.deleteCookie(ApiConstants.ROI_COOKIE_GA_ACCOUNT_LIST);
    }

}