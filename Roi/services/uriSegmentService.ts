export class UriSegmentService {

    storeCurrentUrl : String;
    constructor(){
        this.storeCurrentUrl = window.location.href;
    }

    getCurrentUrlSegment( currentUrl = this.storeCurrentUrl ):string[]{
        return currentUrl.split("/").filter(e => e);
    }

    getUrlProtocol(){
        return this.getCurrentUrlSegment()[0];
    }    

    getLastSegment() {
        const url = this.getCurrentUrlSegment();
        return url.length > 0 ? url[url.length - 1]: url;
    }

    getCurrentDispatcherPath(){
        const url = this.getCurrentUrlSegment();
         if (typeof url[2] !== 'undefined') {
            return url[2];
          } else {
            return url;
        }
    }

    hasProtocol( link:string ){
        if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    searchQueryString( urlString:string, searchString:string ){
        if( urlString && searchString ){
            const urlParams = new URLSearchParams(urlString);
            const myParam = urlParams.get(searchString);
            if( myParam ){
                return myParam;
            }
        }        
    }

    updateQueryStringValue(urlString:string, searchString:string, searchValue:string ){
        if(urlString && searchString && searchValue){
            let searchParams = new URLSearchParams(urlString);
            searchParams.set(searchString, searchValue);
            return searchParams.toString();
        }
    }
}