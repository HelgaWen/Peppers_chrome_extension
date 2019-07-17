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
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return (
        <button onClick={callReset}>Reset chrome</button>
    );
}

export default ResetButton;