import {Injectable} from '@angular/core';
import {Network} from 'ionic-native';
import {Platform} from "ionic-angular";

@Injectable()
export class ConnectNetwork {

    private connected: boolean = false;


    constructor(public platform: Platform) {

        this.platform.ready().then(() => {

            Network.type === "none" ? this.connected = false : this.connected = true;

            Network.onDisconnect().subscribe(() => {
                this.connected = false;
            });

            Network.onConnect().subscribe(() => {
                this.connected = true;
            });
        });
    }

    isConnected() {
        return this.connected;
    }

}

