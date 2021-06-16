const config = {
    recommendationToggleSelector : '.our-recommendation-wrap .our-recommendation',
    recommendationPointSelector : '.recommendation-points',
    recommendationToggleOpenClass : 'opened',
    recommendationPointHiddenClass : 'hide-page',
    recommendationContentWrapClass : 'roi-recommendation-content'
}
export default class RecommendationsHandler{

    /*
    *   This function will toggle the Recommendation Points.
    */
     initilize():void
     {
        const toggleElement =  document.querySelectorAll( config.recommendationToggleSelector );
        if( toggleElement.length > 0 ){
            toggleElement.forEach( element => {
                element.addEventListener( 'click' , (toggleEvent) =>{ 
                    element.parentElement.previousElementSibling.classList.toggle( config.recommendationPointHiddenClass );
                    element.parentElement.classList.toggle( config.recommendationToggleOpenClass );
                });               
            })
        }
     }

}