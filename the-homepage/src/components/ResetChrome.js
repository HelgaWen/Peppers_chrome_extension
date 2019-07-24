/* global chrome*/
import React from 'react';
import { ResetChromeButton } from '../styles/general';

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
        <ResetChromeButton onClick={callReset}>Reset extension</ResetChromeButton>
    );
}

export default ResetButton;