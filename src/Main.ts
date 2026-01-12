import * as Plugin from "iitcpluginkit";


class Shards_Observer implements Plugin.Class {

    init() {
        console.log("Shards_Observer " + VERSION);

        // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-require-imports
        require("./styles.css");

        // FILL ME
    }

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.Shards_Observer)
 */
export const main = new Shards_Observer();
Plugin.Register(main, "Shards_Observer");
