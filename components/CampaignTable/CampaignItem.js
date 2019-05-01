import React, { Component, Fragment } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import autoBind from "react-autobind";
import CampaignModal from "./CampaignModal";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

class CampaignItem extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            showModal: false,
            modalData: ""
        };
    }

    toggleModal(data) {
        this.setState({ showModal: !this.state.showModal, modalData: data });
    }

    render() {
        const {
            data: { title, date, iconUrl, country },
            selected,
            intl: { messages }
        } = this.props;
        const daysDiff = day => {
            const date1 = new Date(day);
            const date2 = new Date();
            const diffTime = Math.abs(date2.getTime() - date1.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        };
        const daysMsg = () => {
            if (selected === "upcoming") {
                return (
                    <FormattedMessage id="daysLeft" {...messages.daysLeft} />
                );
            } else if (selected === "past") {
                return <FormattedMessage id="daysAgo" {...messages.daysAgo} />;
            }
            return <FormattedMessage id="daysStart" {...messages.daysStart} />;
        };
        const { showModal, modalData } = this.state;
        return (
            <Fragment>
                <li
                    className="makeFlex"
                    onClick={() => this.toggleModal(this.props.data)}
                >
                    <span className="makeFlex column hrtlCenter blackText textLeft font14">
                        <span>{date}</span>
                        <span>
                            <span>{daysDiff(date)}</span>
                            &nbsp;
                            <span>{daysMsg()}</span>
                        </span>
                    </span>
                    <span className="makeFlex vrtlCenter blueText font14">
                        <img src={iconUrl} className="campaignIcon" />
                        <span className="makeFlex column textLeft">
                            <span>{title}</span>
                            <span>{country}</span>
                        </span>
                    </span>
                    <span className="makeFlex column perfectCenter blueText font10">
                        <span className="rupeeSymbol">$+</span>
                        <FormattedMessage id="view" {...messages.view} />
                        <FormattedMessage id="pricing" {...messages.pricing} />
                    </span>
                    <span className="makeFlex perfectCenter font10 blueText actions">
                        <span className="makeFlex column disabled vrtlCenter">
                            <span className="csvIcon" />
                            <span>CSV</span>
                        </span>
                        <span className="makeFlex column disabled vrtlCenter">
                            <span className="reportIcon" />
                            <FormattedMessage
                                id="report"
                                {...messages.report}
                            />
                        </span>
                        <span className="makeFlex column vrtlCenter calendar">
                            <label
                                className="makeFlex column vrtlCenter"
                                htmlFor="daypicker"
                                onClick={event => event.stopPropagation()}
                            >
                                <span className="calendarIcon icon" />
                                <FormattedMessage
                                    id="schedule"
                                    {...messages.schedule}
                                />
                                <DayPickerInput id="daypicker" />
                            </label>
                        </span>
                    </span>
                </li>
                {showModal && (
                    <CampaignModal
                        data={modalData}
                        toggleModal={this.toggleModal}
                    />
                )}
            </Fragment>
        );
    }
}

export default injectIntl(CampaignItem);
