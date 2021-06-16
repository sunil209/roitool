const config = {
    progressBar : 'pc-progress-bar',
    progressBarCounter : 'pc-percentage-counter',
};

export default class StepLoaderInitalizer {
        getWidth = 0;
        getInterval:any ;
        intialCounter:number;

        init(){
            this.getWidth = 1;
            this.intialCounter = 0;
            this.initializeStepLoader();
        }


        initializeStepLoader(){
            const getProgressBar = document.getElementById(config.progressBar);
            const getProgressBarCounterElement = document.getElementById(config.progressBarCounter);
            if(getProgressBar && getProgressBarCounterElement){
                    if (this.intialCounter == 0) {
                        this.intialCounter = 1;
                        this.getInterval = setInterval(this.getFrame, 800);
                    }
            }
        }

        getFrame(){
            const getProgressBarElement = document.getElementById(config.progressBar);
            const getProgressBarCounterElement = document.getElementById(config.progressBarCounter);
            
            if (this.getWidth >= 100) {
                clearInterval(this.getInterval);
                this.intialCounter = 0;
              } else {
                  if(isNaN(this.getWidth)){
                    this.getWidth = 1;
                  }
                this.getWidth = +this.getWidth+1;
                getProgressBarElement.style.width = this.getWidth + "%";
                getProgressBarCounterElement.innerHTML = this.getWidth + "%";
              }

        }
     
}