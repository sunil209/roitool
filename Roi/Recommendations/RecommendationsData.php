<?php
namespace Postclick\Components\Roi\Recommendations;

use Postclick\Components\Generic\Insights\InsightsModel;
use Postclick\Components\Roi\Recommendations\RCResultsContentModel;
use Postclick\Components\Roi\constants\PhpConstants;

class RecommendationsData
{
    private $rcResultsModel;
    protected $insightData;
    protected $keywords;
    protected $conversionUx;
    protected $securityScore;
    protected $qualityBenchmark;
    function __construct() {
        $this->rcResultsModel = new RCResultsContentModel();
    }

    public function getACFOptionData( $insightPdfResponse , $reportData ): array
    {   
        $backendData = get_field('postclick_recommendations', 'option');
        $this->extractReportData( $reportData );
        $insightData = $this->getRecommendationScore($insightPdfResponse);
        
        $backendData = $this->rcResultsModel->getRecommendationResults( $backendData , $insightData , $this->keywords , $this->conversionUx, $this->securityScore , $this->qualityBenchmark) ;
        return (array)  $backendData;
    }

    public function getRecommendationScore($insightData): array
    {
        $graphScore = [];
        $pdfResponse =  $insightData ?? []; 
        if( isset( $pdfResponse['graphPercentage'] ) && !empty($pdfResponse['graphPercentage']) ):
            $graphScore[0] = $pdfResponse['graphPercentage']['mobile_Class'];
            $graphScore[1] = $pdfResponse['graphPercentage']['message_Class'];
            $graphScore[2] = $pdfResponse['graphPercentage']['speed_Class'];
            $graphScore[3] = $pdfResponse['graphPercentage']['conversion_Class'];
            $graphScore[4] = $pdfResponse['graphPercentage']['security_Class'];
            if( isset( $pdfResponse['method'] ) && $pdfResponse['method'] == PhpConstants::USER_SELECTION_TYPE_A ):
                $graphScore[5] = $pdfResponse['graphPercentage']['quality_Class'];
            endif;
        endif;
        return (array) $graphScore ?? [];
    }

    public function extractReportData( $reportData ){
        
        if( isset(  $reportData)  && isset( $reportData[0] ) && !empty( $reportData[0] )):
            $decodeStepThreeData =  json_decode( $reportData[0]->step_three , true );
            $decodeStepCalculationData =  json_decode( $reportData[0]->calculation_data , true );

            $securityScore =  $decodeStepCalculationData[PhpConstants::ROI_STEP_SECURITY] ?? 0 ;
            $qualityBenchmark = $decodeStepCalculationData[PhpConstants::ROI_STEP_BENCHMARK] ?? 0 ;
            $conversionUx =  json_decode( $decodeStepCalculationData[PhpConstants::ROI_STEP_CONVERSIONUX] ?? "", true );
            $keywords = explode( ',' , $decodeStepThreeData[PhpConstants::ROI_STEP_THREE_KEYWORDFIELD] );
        endif;
        $this->securityScore = $securityScore ?? 0;
        $this->conversionUx = $conversionUx ?? [];
        $this->keywords = $keywords ?? [];
        $this->qualityBenchmark = $qualityBenchmark ?? 0;
    }

}
