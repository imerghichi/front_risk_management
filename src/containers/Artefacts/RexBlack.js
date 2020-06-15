import React from "react";
import {Card} from "primereact/card";
function RexBlack() {
    return(
        <div>
            <h1>Rex Black records a set of failures as quality risks:</h1>
                    <Body/>

        </div>
    )
};
export function Body(){
    return(
        <p><span id="cch_f5434d3dfb9196" className="_mh6 _wsc"><br/>1. Functionality: failures that cause specific functions not to work. <br/>2. Load, capacity, and volume: failure to handle expected peak concurrent usage levels. <br/>3. Reliability/stability: failures that take down the system too frequently or keep it down too long. <br/>4. Stress, error handling, and recovery: failure due to beyond-peak or illegal conditions (e.g., the side effects of deliberately inflicted errors.) <br/>5. Date and time handling: failures in date or time math, formatting, scheduled events, and other time-dependent operations. <br/>6. Operations and maintenance: failures that endanger continuing operations, including backup/restore processes, patches and upgrades, and so on. <br/>7. Data quality: failures in processing, storing, or retrieving data. <br/>8. Performance: failure to complete tasks on a timely basis under expected loads. <br/>9. Localization: failures in specific locales, including character-set handling, language support, grammar, dictionary, thesaurus features, error, and help messages. <br/>10. Compatibility: failures with certain supported browsers, networks, operating systems, and other environment elements.<br/>11. Security/privacy: failures to protect the system and secured data from fraudulent or malicious misuse. <br/>12. Installation/migration: failures that prevent or impede deploying the system. <br/>13. Documentation: failures in installation and operating instructions for users or system administrators. <br/>14. Interfaces: failures in interfaces between components.</span>
        </p>
    )
};

export default RexBlack;
