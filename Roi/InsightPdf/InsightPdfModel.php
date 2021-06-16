<?php

namespace Postclick\Components\Roi\InsightPdf;

use InstaWP\TemplateSystem\Component\AbstractComponentModel;

class InsightPdfModel extends AbstractComponentModel
{

    public function getBannerLogo(): array
    {
        return (array) get_field('banner_content', 'option');
    }

    public function getBannerContent(): array
    {
        return (array) get_field('slide_2_heading', 'option');
    }

    public function getSecondSlideStaticImage(): array
    {
        return (array) get_field('static_image_tab2', 'option');
    }

    public function getSecondSlideHeading(): array
    {
        return (array) get_field('slide_2_heading', 'option');
    }

    public function getSecondSlideLogos(): array
    {
        return (array) get_field('logo_with_text', 'option');
    }

    public function getThirdSlideContent(): array
    {
        return (array) get_field('slide_3_content', 'option');
    }

    public function getFifthSlideContent(): array
    {
        return (array) get_field('pdf_slide_5_content', 'option');
    }

    public function getPdfFooter(): array
    {
        return (array) get_field('pdf_footer', 'option');
    }

    public function getParamsListToInject(): array
    {
        return [
            'bannerLogo',
            'bannerContent',
            'secondSlideStaticImage',
            'secondSlideHeading',
            'secondSlideLogos',
            'thirdSlideContent',
            'fifthSlideContent',
            'pdfFooter'
        ];
    }
}