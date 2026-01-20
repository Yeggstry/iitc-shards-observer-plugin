import * as Plugin from "iitcpluginkit";
import { ShardsObserverUI } from "./ShardsObserverUi";
import { Coordinates, haversineDistance } from "@ingress-shards/shards-core";

class Shards_Observer implements Plugin.Class {
    private ui: ShardsObserverUI;

    constructor() {
        this.ui = new ShardsObserverUI();
    }

    init() {
        IITC.toolbox.addButton({
            label: "Shards Observer",
            action: () => this.ui.show(),
        });

        const coords1: Coordinates = {
            latitude: 38.707008,
            longitude: -9.13564,
        };

        const coords2: Coordinates = {
            latitude: 35.223789,
            longitude: -80.841141,
        };

        const distance = haversineDistance(coords1, coords2);
        console.log(`Calculated distance: ${distance / 1000} km`);
    }
}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.Shards_Observer)
 */
export const main = new Shards_Observer();
Plugin.Register(main, "Shards_Observer");
