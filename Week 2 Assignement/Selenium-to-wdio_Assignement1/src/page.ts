import { browser } from '@wdio/globals'

/**
 * Main page object containing shared methods and functionality.
 */
export default class Page {
    /**
     * Opens a page by full URL or path.
     * @param path full URL or path to open
     */
    public async open(path: string) {
        // cast to any to avoid type mismatch with @wdio/globals Browser typings in this workspace
        return (browser as any).url(path)
    }

    /**
     * Maximizes the browser window.
     */
    public async maximizeWindow() {
        return (browser as any).maximizeWindow()
    }

    /**
     * Sets the implicit wait timeout (in milliseconds).
     * @param ms timeout in milliseconds
     */
    public async setImplicitWait(ms: number) {
        return (browser as any).setTimeout({ implicit: ms })
    }

    /**
     * Retrieves the current page title.
     * @returns title string
     */
    public async getTitle(): Promise<string> {
        return (browser as any).getTitle()
    }
}
