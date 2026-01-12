import * as Plugin from "iitcpluginkit";
import { ShardsObserverUI } from "./ShardsObserverUi";

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
    }
}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.Shards_Observer)
 */
export const main = new Shards_Observer();
Plugin.Register(main, "Shards_Observer");
