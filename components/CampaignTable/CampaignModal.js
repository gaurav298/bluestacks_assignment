import React, { Component } from "react";

export default class CampaignModal extends Component {

    componentDidMount() {
        document.body.classList.add("bodyFixed");
    }

    componentWillUnmount() {
        document.body.classList.remove("bodyFixed");
    }

    render() {
        const {data, toggleModal} = this.props;
        return (
            <div className="modalContainer">
                <div className="modal">
                    <img src={data.iconUrl} className="modalIcon" />
                    <p className="title">{data.title}</p>
                    <p className="country">{data.country}</p>
                    <p className="date">Campaign Date: {data.date}</p>
                </div>
                <div className="backdrop" onClick={toggleModal} />
            </div>
        );
    }
}
