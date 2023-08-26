
export interface ChatGPTConfig {
    APIUrl: String
}
export interface IConfig {
    ChatGPT: ChatGPTConfig
}

export const InitConfig = (prefix: String = "dev_") => {
    return import(`./${prefix}Config.json`).then(x=> x as IConfig);

}

