import fullpage from 'fullpage.js/dist/fullpage.js';

const config = {
    fullFoldContainerClass: 'fp-section-content',
    fullFoldContainerID : '#infoGraphic',
    licenceKey : '31ED2D2F-0FFD4D06-B26B11BC-E1B58649'
};

export default class InfoGraphic {
    static init() {
        this.initializeLottifiles();
    }

    static initializeLottifiles(){
        new fullpage(config.fullFoldContainerID,
                        {
                            licenseKey: config.licenceKey,
                            verticalCentered: true,
                            fitToSection: false,
                            paddingTop: '80px',
                            paddingBottom: '20px',
                            onLeave: function(origin, destination, direction){

                                if( origin.item.id == 'info-graphic-section-1'){
                                    const player = document.getElementById('secondLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_2.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-2'){
                                    const player = document.getElementById('thirdLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_3.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-3'){
                                    const player = document.getElementById('fourthLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_4.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-4'){
                                    const player = document.getElementById('fifthLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_5.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-5'){
                                    const player = document.getElementById('sixthLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_6.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-6'){
                                    const player = document.getElementById('seventhLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_7.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-7'){
                                    const player = document.getElementById('eightLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_8.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-8'){
                                    const player = document.getElementById('ninethLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_9.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-9'){
                                    const player = document.getElementById('tenthLottie');
                                    if(player){
                                        player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_10.json");
                                    }
                                }
                                if( origin.item.id == 'info-graphic-section-10'){
                                    const playerGraphic_1 = document.getElementById('eleventhLottie_1');
                                    const playerGraphic_2 = document.getElementById('eleventhLottie_2');
                                    const playerGraphic_3 = document.getElementById('eleventhLottie_3');
                                    const playerGraphic_mob_1 = document.getElementById('eleventhLottie_1_mob');
                                    const playerGraphic_mob_2 = document.getElementById('eleventhLottie_2_mob');
                                    const playerGraphic_mob_3 = document.getElementById('eleventhLottie_3_mob');
                                    if(playerGraphic_1){
                                        playerGraphic_1.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_11_1.json");
                                    }
                                    if(playerGraphic_2){
                                        playerGraphic_2.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_11_2.json");
                                    }
                                    if(playerGraphic_3){
                                        playerGraphic_3.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_11_3.json");
                                    }
                                    if(playerGraphic_mob_1){
                                        playerGraphic_mob_1.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_11_1.json");
                                    }
                                    if(playerGraphic_mob_2){
                                        playerGraphic_mob_2.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_11_2.json");
                                    }
                                    if(playerGraphic_mob_3){
                                        playerGraphic_mob_3.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/animation_11_3.json");
                                    }
                                }
                               
                            },
                        }
            );
    }


    LoadLottiePlayer(Id:string , Data:string){
        const player = document.getElementById(Id);
        if(player){
            player.load("/wp-content/themes/postclick/src/Components/InfoGraphic/GraphicFold/LottieAnimations/"+Data+".json");
        }
    }

}