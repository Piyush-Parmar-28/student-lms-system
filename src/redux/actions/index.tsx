const isAuthorized= () => {
    return {
        type: "check"
    }
}

const doAuthorize= () => {
    return {
        type: "authorize"
    }
}

const undoAuthorize= () => {
    return {
        type: "unAuthorize"
    }
}

//  default is used to export a 'single component' as 'default component' from a module
export {isAuthorized, doAuthorize, undoAuthorize};