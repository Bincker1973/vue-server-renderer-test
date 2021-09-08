import {createApp} from "@/main";

export default (context: any) => {
    const {app, router} = createApp();
    return new Promise((resolve, reject) => {
        router.push(context.url)
        router.onReady(()=>{
            const matchedComponents = router.getMatchedComponents()
            if(!matchedComponents.length) return reject({code: 404});
            context.state = {hello: "hello world"};
            context.rootState = {root: "msg"};
            resolve(app)
        }, reject)
    });
}
