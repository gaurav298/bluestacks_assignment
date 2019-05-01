import React from "react";
import { FormattedMessage } from "react-intl";

import "./Header.css";

const Header = (messages) => {
    return (
        <div className="makeFlex header">
            <p className="title">
                <FormattedMessage
                    id="headerTitle"
                    {...messages.headerTitle}
                />
            </p>
            <p className="makeFlex betaSection">
                <span>BETA</span>
                <span className="hamburger makeFlex column">
                    <span />
                    <span />
                    <span />
                </span>
            </p>
        </div>
    );
};

export default Header;
