<?php

namespace Postclick\Components\Roi\HowItWorks;

use InstaWP\TemplateSystem\Component\AbstractComponentModel;

class HowItWorksModel extends AbstractComponentModel
{
    public function getSection(): array
    {   
        return (array) get_field('expandable_tiles_section');
    }

    public function getExpandableTiles(): array
    {
        $expandableTiles = get_field('expandable_tiles');
        return is_array($expandableTiles) ? $expandableTiles : [];
    }

    public function areParamsValid(array $params): bool
    {
        return !empty($params['expandableTiles']) && is_array($params['expandableTiles']);
    }

    public function getParamsListToInject(): array
    {
        return [
            'section',
            'expandableTiles'
        ];
    }
}
