import {isEmpty} from "./Utils";

export function login(config, force = false, hash = null) {
    let params = "?app=welcome&"
    if (force) {
        params += "force=true"
    }
    if (hash) {
        params += `&hash=${hash}`
    }
    let serverUrl = config.serverUrl;
    if (isEmpty(serverUrl)) {
        const local = window.location.hostname === "localhost";
        serverUrl = local ? "http://localhost:8080" :
            `${window.location.protocol}//${window.location.host}`
    }
    window.location.href = `${serverUrl}/api/v1/users/login${params}`;
}