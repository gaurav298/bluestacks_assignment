import React from "react";
import { FormattedMessage } from "react-intl";
import CampaignItem from "./CampaignItem";

import "./CampaignTable.css";

const CampaignTable = ({ data, selected }, messages) => {
    return (
        <ul className="campaignList">
            <li className="makeFlex">
                <FormattedMessage id="date" {...messages.date} />
                <FormattedMessage id="campaign" {...messages.campaign} />
                <FormattedMessage id="view" {...messages.view} />
                <FormattedMessage id="actions" {...messages.actions} />
            </li>
            {data.map(val => {
                return (
                    <CampaignItem
                        selected={selected}
                        data={val}
                        key={val.title}
                    />
                );
            })}
        </ul>
    );
};

export default CampaignTable;
