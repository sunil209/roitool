<?php

namespace Postclick\Components\Roi\constants;

class PhpConstants
{
    public const POSTCLICK_MAX_SCORE = 100;
    public const MINIMUM_CPC= 0.10;
    public const USER_SELECTION_TYPE_A = 'pc-roi-option-step-a';


    public const ROI_STEP_THREE_KEYWORDFIELD = 'roi-search-terms-keywords';
    public const ROI_STEP_CONVERSIONUX = 'conversionUX';
    public const ROI_STEP_SECURITY = 'pc_security_fix';
    public const ROI_STEP_BENCHMARK = 'pc_benchmark';

    // Recommendation Message  
    public const RC_POOR_MESSAGE = "Poor";
    public const RC_AVERAGE_MESSAGE = "Needs improvement";
    public const RC_GOOD_MESSAGE = "Good";
    public const RC_CONVERSION_SOCIAL_MESSAGE = "<li>We didn't find any social proof on your landing page. Consider adding social proof to enhance credibility.</li>";
    public const RC_CONVERSION_UNIQUELINK_MESSAGE = "<li>Your Landing page should focus on one key goal, currently we found ".self::DEVICE_CONVERSION_LINKS_VAR." links and at a given point user should not be overwhelmed with choice over load so have 1-3 CTA at max and up to 5 links for entire experience.</li>";
    public const RC_CONVERSION_PHONE_MESSAGE = "<li>We couldn’t find contact details on your page. We recommend including a clickable phone number if you have an inbound team.</li>";
    public const RC_SECURITY_HTTP_MESSAGE = "<li>Your site is not secure. Secure your site immediately to help visitors trust your website.</li>";
    public const RC_QUALITY_SCORE_MESSAGE = "<li>Your Quality Scores are low, which means you are paying extra cost-per-click to Google. You need to review your account, campaigns, and ad group structure. By optimizing certain campaigns, you can reduce CPC by up to 50%.</li>";
    
    // Recommendation Data 
    public const DEVICE_CENTRIC_SCORE_VAR = '{{deviceScore}}';
    public const DEVICE_CENTRIC_GRADE_VAR = '{{deviceGrade}}';

    public const MESSAGE_FIT_SCORE_VAR = '{{messageFitScore}}';
    public const MESSAGE_FIT_KEYWORD_VAR = '{{messageFitKeyword}}';
    public const MESSAGE_FIT_REC_KEYWORD_VAR = '{{oneKeyword}}';
 
    public const DEVICE_PAGE_SPEED_SCORE_VAR = '{{pageSpeedScore}}';
    public const DEVICE_PAGE_SPEED_GRADE_VAR = '{{pageSpeedGrade}}';
    
    public const DEVICE_CONVERSION_SCORE_VAR = '{{conversionScore}}';
    public const DEVICE_CONVERSION_LINKS_VAR = '{{X}}';

    public const DEVICE_SECURITY_SCORE_VAR = '{{securityScore}}';

    public const DEVICE_QUALITY_SCORE_VAR = '{{qualityScore}}';
    public const DEVICE_QUALITY_BENCHMARK_VAR = '{{qualityBenchmark}}';

}
