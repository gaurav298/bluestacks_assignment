import React from "react";
import { FormattedHTMLMessage } from "react-intl";
import FilterSection from "../FilterSection/FilterSection";

import "./CampaignSection.css";

const CampaignSection = (messages) => {
    return (
        <div className="campaignSection">
            <p className="campaignTitle">
                <FormattedHTMLMessage id="title" {...messages.title} />
            </p>
            <FilterSection />
        </div>
    );
};

export default CampaignSection;
