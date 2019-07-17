/* global chrome*/
import React from 'react';

function ResetButton() {

    function callReset() {
        chrome.storage.sync.clear(function () {
            const error = chrome.runtime.lastError;
            if (error) {
                console.error(error);
            }
        });
    }

    return (
        <button onClick={callReset}>Reset chrome</button>
    );
}

export default ResetButton;