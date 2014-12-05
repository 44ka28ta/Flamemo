interface NavigatorDeviceStorageAPI {
    getDeviceStorage (storageName: string): DeviceStorage;
}

interface DeviceStorage {
    default: bool;
    onchange: (ev: Event) => any;
    storageName: string;
    add (blob: Blob): DOMRequest;
    addNamed (blob: Blob, name: string): DOMRequest;
    available (): DOMRequest;
    delete (fileName: string): DOMRequest;
    enumerate (path?: string, options?: EnumerateOptions): DOMCursor;
    enumerateEditable (path?: string, options?: EnumerateOptions): DOMCursor;
    freeSpace (): DOMRequest;
    get (fileName: string): DOMRequest;
    getEditable (fileName: string): DOMRequest;
    usedSpace (): DOMRequest;
}

interface DOMRequest extends EventTarget {
    error: string;
    onerror: (ev: Event) => any;
    onsuccess: (ev: Event) => any;
    readyState: string;
    result: any;
}

interface EnumerateOptions {
    since: Date;
}

interface DOMCursor {
    done: bool;
    continue (): void;
}
