export class ApiConstants {

    public static ROI_ADMIN_API_URL = '/wp-admin/admin-ajax.php';

    public static ROI_HUBSPOT_FORMID = 'ac727563-71cd-494e-a18d-6241b1599f51';
    public static ROI_HUBSPOT_SUCCESS_CLASS = 'submitted-message';

    public static GOOGLE_API_KEY = 'AIzaSyCOHq5dUEryigUaHFR6NxS9NOl4YpkxMsM';

    public static GOOGLE_PAGESPEED_FIELD = 'lighthouseResult.categories.performance.score';
    public static GOOGLE_PAGESPEED_FIELD_SCREENSHOT = 'lighthouseResult.audits';
    public static GOOGLE_PAGESPEED_STRATEGY_DESKTOP = 'desktop';
    public static GOOGLE_PAGESPEED_STRATEGY_MOBILE = 'mobile';

    public static GOOGLE_PAGESPEED_API_URL = 'https://content-pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed';

    /* Chart Constants */
    public static CHART_TYPE_CONVERSION = 'conversion-chart';
    public static CHART_TYPE_COSTPERCLICK = 'cost-per-click-chart';

    /* Chart Constants */
    public static CHART_TYPE_CONVERSION_TEXT = '';
    public static CHART_TYPE_COSTPERCLICK_TEXT = 'Cost per Click';

    /* Cookies Constants */
    public static ROI_COOKIE_PARTIALLY = 'partiallyFilled';
    public static ROI_COOKIE_USEROPTION = 'userOption';
    public static ROI_COOKIE_CURRENTSTEP = 'currentStep';
    public static ROI_COOKIE_FORMDATA_STEP_1 = 'formdata_step_1';
    public static ROI_COOKIE_FORMDATA_STEP_2 = 'formdata_step_2';
    public static ROI_COOKIE_ADSEMAIL_STEP_2 = 'google_ads_email';
    public static ROI_COOKIE_FORMDATA_STEP_3 = 'formdata_step_3';
    public static ROI_COOKIE_STATIC_INDUSTRY = 'E-commerce';
    public static ROI_COOKIE_GA_MANAGER = 'ga_formData_manager';
    public static ROI_COOKIE_GA_MANAGER_LIST = 'ga_manager_list';
    public static ROI_COOKIE_GA_ACCOUNT_LIST = 'ga_account_list';
    public static ROI_COOKIE_GA_ACCOUNT_DROPDOWN_ID = 'roi-google-manager-account';
    public static ROI_COOKIE_GA_ACCOUNTLIST_DROPDOWN_ID = 'roi-manager-account-listing';


    /* Session Constant Name */
    public static ROI_SESSION_ID = 'session_id';

    // Validation Messages
    public static REQUIRED_MESSAGE = 'Please complete the required field';
    public static REQUIRED_URL = 'Please enter landing page URL';
    public static VALID_URL_MESSAGE = 'Please enter a valid URL';
    public static NON_EXISTING_URL_MESSAGE = 'This URL does not exists';
    public static MAX_KEYWORD_MESSAGE = 'Maximum seven keywords allowed';
    public static SINGLE_KEYWORD_MESSAGE = 'Please add at least 1 keyword';
    public static ONLY_NUMBER_MESSAGE = 'Please enter numeric value';

    /* Admin Request actions */

    public static ADMIN_GOOGLE_REFRESH_AUTH = 'google_refresh_auth';
    public static ADMIN_GOOGLE_SITE_LIST = 'google_site_list';
    public static ADMIN_KEYWORD_STATS = 'google_keyword_stats';
    public static NUMBER_MAX_LIMIT = '999999999999999';

    /* Ecommerce Field Label */
    public static ECOMMERCE_FIELD_LABEL_CLASS = '.average-contract-value'
    public static LANDINGPAGE_FIELD_LABEL_CLASS = '.average-landing-page'
    
}