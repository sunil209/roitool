export class ApiService {

    getRequestInit: RequestInit;

    postRequestInit: RequestInit;
    

    constructor() {
        this.getRequestInit = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    postRequest(requestUrl: string, requestOptions: RequestInit) {
        return fetch(requestUrl, requestOptions).then(response => response.json())
        .then(result => { return result; })
        .catch(error => { return error; });
    }

    getRequest(requestUrl: string, queryParam: any) {
        const query = this.jsonToQueryString(queryParam);
        return fetch(requestUrl + query, this.getRequestInit).then(response => {return response.json()});          
    }

    getRequestHTML(requestUrl: string, queryParam: any) {
        const query = this.jsonToQueryString(queryParam);
        return fetch(requestUrl + query, this.getRequestInit).then(response => {return response.text();});          
    }

    private jsonToQueryString(query: any) {
        return '?' +
            Object.keys(query).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(query[key]);
            }).join('&');
    }
}