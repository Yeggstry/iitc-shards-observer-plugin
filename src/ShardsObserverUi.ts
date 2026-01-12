import "./styles.css";

/**
 * Manages the UI layer for the Shards Observer.
 * Separating the Dialog logic allows for easier event binding and content updates.
 */
export class ShardsObserverUI {
    /**
     * Constructs the HTML content for the dialog.
     * Keeping this in a separate method makes it easier to use template literals or external components.
     */
    private getTemplate(): string {
        return `
            <section class="shard-observer-dialog-container">
                <main class="shard-observer-dialog-main">
                    <p>Welcome! This is a work-in-progress :)</p>
                </main>
                <footer>
                    Plugin version: ${VERSION}<br />
                </footer>
            </section>
        `;
    }

    public show(): void {
        dialog({
            title: "Shards Observer",
            html: this.getTemplate(),
            id: "shards-observer",
        });
    }
}
