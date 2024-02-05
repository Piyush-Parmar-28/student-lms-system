const isAuthorized= () => {
    return {
        type: "check"
    }
}

const doAuthorize= (user: any) => {
    return {
        type: "authorize",
        myUser: user
    }
}

const undoAuthorize= () => {
    return {
        type: "unAuthorize"
    }
}

//  default is used to export a 'single component' as 'default component' from a module
export {isAuthorized, doAuthorize, undoAuthorize};