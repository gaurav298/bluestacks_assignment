import React, { Component, Fragment } from "react";
import autoBind from "react-autobind";
import CampaignTable from "../CampaignTable/CampaignTable";

import Filters from "../../data/FilterButtons.json";
import {campaigns} from "../../data/campaignData";
import "./FilterSection.css";

export default class FilterSection extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            selected: "upcoming",
        };
    }

    setSelected(val) {
        if (this.state.selected === val) {
            return;
        } else {
            this.setState({ selected: val });
        }
    }

    render() {
        const {selected} = this.state;
        return (
            <Fragment>
            <ul className="makeFlex filterButtons">
                {Filters.map(item => {
                    return (
                        <FilterButton
                            key={item.value}
                            data={item}
                            setSelected={this.setSelected}
                            selected={selected}
                        />
                    );
                })}
            </ul>
            <CampaignTable selected={selected} data={campaigns[selected]} />
            </Fragment>
        );
    }
}

const FilterButton = ({ data, setSelected, selected }) => {
    return (
        <li
            className={`${
                selected === data.value ? "selected" : ""
            } bold makeFlex vrtlCenter`}
        >
            <a
                href="javascript:void(0);"
                onClick={() => setSelected(data.value)}
            >
                {data.title}
            </a>
        </li>
    );
};
