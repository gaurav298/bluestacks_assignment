import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import autoBind from "react-autobind";
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_de from "react-intl/locale-data/de";
import Header from "./components/Header/Header";
import CampaignSection from "./components/CampaignSection/CampaignSection";

import messages_de from "./data/de.json";
import messages_en from "./data/en.json";

addLocaleData([...locale_en, ...locale_de]);

const messages = {
    de: messages_de,
    en: messages_en
};

class App extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            language: "en"
        }
    }

    changeLanguage() {
        const language = this.state.language === "en" ? "de" : "en";
        this.setState({language: language});
    }

    render() {
        const {language} = this.state;
        return (
            <IntlProvider locale={language} messages={messages[language]}>
                <Fragment>
                    <p className="changeLanguageLink"><a href="javascript:void(0);" onClick={this.changeLanguage}>Change Language</a></p>
                    <Header />
                    <CampaignSection />
                </Fragment>
            </IntlProvider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
