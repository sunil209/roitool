<?php
namespace Postclick\Components\Roi\Recommendations;

use Postclick\Components\Roi\constants\PhpConstants;

class RCResultsContentModel
{ 
    
    public function getRecommendationResults( $contentData , $insightData , $keywords , $conversionUx , $securityScore , $qualityBenchmark )
    {       
        $contentData[0]['recommendation_results'] = $this->getDeviceCentricData( $contentData[0]['recommendation_results'] ?? [], $insightData[0] ?? []);
        $contentData[1] = $this->getMessageFitData( $contentData[1] ?? [], $insightData[1] ?? [] , $keywords);
        $contentData[2]['recommendation_results'] = $this->getPageFitData( $contentData[2]['recommendation_results'] ?? [], $insightData[2] ?? []);
        $contentData[3] = $this->getConversionData( $contentData[3] ?? [], $insightData[3] ?? [] , $conversionUx);
        $contentData[4]['recommendation_results'] = $this->getSecurityData( $contentData[4]['recommendation_results'] ?? [], $insightData[4] ?? [] , $securityScore);

        if( isset( $contentData[5] ) && !empty( $contentData[5] ) && isset( $insightData[5] ) && !empty( $insightData[5] ) ):
            $contentData[5] = $this->getQualityScoreData( $contentData[5] ?? [], $insightData[5] ?? [] ,  $qualityBenchmark);
        endif;

        $contentData = $this->addInsightData( $contentData , $insightData );
        
        return $contentData;        
    }

    private function getDeviceCentricData( $contentData , $insightData ) {
        $deviceCentricScore = $insightData['percentage'];
        $variableArray = [
            PhpConstants::DEVICE_CENTRIC_SCORE_VAR => $deviceCentricScore,
            PhpConstants::DEVICE_CENTRIC_GRADE_VAR => $this->getPerformanceGrade( $deviceCentricScore )
        ];
        return $this->replaceStaticVariable( $variableArray , $contentData );
    }

    private function getMessageFitData( $contentData , $insightData , $keywords ) {
        $messageFitScore = $insightData['percentage'];
        $resultsArray = [
            PhpConstants::MESSAGE_FIT_SCORE_VAR => $messageFitScore,
            PhpConstants::MESSAGE_FIT_KEYWORD_VAR => implode( ',' , $keywords )
        ];
        $recommendArray = [
            PhpConstants::MESSAGE_FIT_REC_KEYWORD_VAR => $keywords[0] ?? ""
        ];
        $contentData['recommendation_results'] = $this->replaceStaticVariable( $resultsArray , $contentData['recommendation_results'] );
        $contentData['recommendation_points'] = $this->replaceStaticVariable( $recommendArray , $contentData['recommendation_points'] );
        return $contentData;
    }

    private function getPageFitData( $contentData , $insightData ) {
        $pageFitScore = $insightData['percentage'];
        $variableArray = [
            PhpConstants::DEVICE_PAGE_SPEED_SCORE_VAR => $pageFitScore,
            PhpConstants::DEVICE_PAGE_SPEED_GRADE_VAR => $this->getPerformanceGrade( $pageFitScore )
        ];
        return $this->replaceStaticVariable( $variableArray , $contentData );
    }

    private function getConversionData( $contentData , $insightData , $conversionUxData ) {
        $conversionScore = $insightData['percentage'];
        $variableArray = [
            PhpConstants::DEVICE_CONVERSION_SCORE_VAR => $conversionScore
        ];
        $contentData['recommendation_results'] = $this->replaceStaticVariable( $variableArray , $contentData['recommendation_results'] );
        $contentData['recommendation_points'] = $this->addConversionUXList( $contentData['recommendation_points'] , $conversionUxData );

        return $contentData;
    }

    private function getSecurityData( $contentData , $insightData , $securityCalculatedScore ) {
        $securityScore = $insightData['percentage'];

        if( isset( $securityCalculatedScore ) && ( $securityCalculatedScore == 0 || $securityCalculatedScore == 1 ) ){
            $contentData .= PhpConstants::RC_SECURITY_HTTP_MESSAGE;
        }
        $variableArray = [
            PhpConstants::DEVICE_SECURITY_SCORE_VAR => $securityScore
        ];
        return $this->replaceStaticVariable( $variableArray , $contentData );
    }

    private function getQualityScoreData( $contentData , $insightData , $qualityBenchmark) {
        $qualityScore = $insightData['percentage'];

        if( isset( $qualityScore ) && $qualityScore  < 5 ){
            $contentData['recommendation_results'] .= PhpConstants::RC_QUALITY_SCORE_MESSAGE;
        }

        $variableArray = [
            PhpConstants::DEVICE_QUALITY_SCORE_VAR => $qualityScore,
            PhpConstants::DEVICE_QUALITY_BENCHMARK_VAR => $qualityBenchmark
        ];
        
        $contentData['recommendation_results'] = $this->replaceStaticVariable( $variableArray , $contentData['recommendation_results'] );
        $contentData['recommendation_points'] = $this->replaceStaticVariable( $variableArray , $contentData['recommendation_points'] );
        return $contentData;
    }

    private function replaceStaticVariable( $variableArray , $content ) {
        foreach( $variableArray as $key => $value ):
            $content = str_replace($key,$value,$content);
        endforeach;
        return $content;
    }

    private function getPerformanceGrade( $postClickScore )
    {
        switch ($postClickScore) {            
            case $postClickScore >= 75 && $postClickScore <= 100:
                return PhpConstants::RC_GOOD_MESSAGE;
                break;
            case $postClickScore > 50 && $postClickScore < 75:
                return PhpConstants::RC_AVERAGE_MESSAGE;
                break;
            default:
                return PhpConstants::RC_POOR_MESSAGE;
        }
    }

    private function addInsightData( $contentData , $insightData ){
        foreach( $insightData as $dataIndex => $dataValue ):
            $contentData[$dataIndex]['insightData'] = $dataValue;
        endforeach;
        return $contentData;
    }

    private function addConversionUXList( $contentData , $conversionUxData )
    {
    
        if( isset( $conversionUxData['socialCount'] ) && $conversionUxData['socialCount'] == 0){
            $contentData .= PhpConstants::RC_CONVERSION_SOCIAL_MESSAGE;
        }

        if( isset( $conversionUxData['uniqeInternalLinkCount'] ) && $conversionUxData['uniqeInternalLinkCount'] > 5 ){
            $contentData .= PhpConstants::RC_CONVERSION_UNIQUELINK_MESSAGE;
            $variableArray = [
                PhpConstants::DEVICE_CONVERSION_LINKS_VAR => $conversionUxData['uniqeInternalLinkCount']
            ];
            $contentData = $this->replaceStaticVariable( $variableArray , $contentData );
        }

        if( isset( $conversionUxData['contactInfoCount'] ) && $conversionUxData['contactInfoCount'] == 0){
            $contentData .= PhpConstants::RC_CONVERSION_PHONE_MESSAGE;
        }
        
       return $contentData;
    }
}
