
import { IConfig, InitConfig } from '../Settings/AppConfiguration';

export class ChatGTPStore {
    private Config: IConfig | undefined;
    private BaseUrl!:String;

    constructor() {

        InitConfig().then(x => {
            this.Config = x;
            this.BaseUrl = this.Config.ChatGPT.APIUrl;
            
        })
            .catch(err => { console.error(err) });

    }
}