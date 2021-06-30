/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ThSideDrawer {
        "open": boolean;
        "sideOpen": () => Promise<void>;
        "title": string;
    }
}
declare global {
    interface HTMLThSideDrawerElement extends Components.ThSideDrawer, HTMLStencilElement {
    }
    var HTMLThSideDrawerElement: {
        prototype: HTMLThSideDrawerElement;
        new (): HTMLThSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "th-side-drawer": HTMLThSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface ThSideDrawer {
        "open"?: boolean;
        "title"?: string;
    }
    interface IntrinsicElements {
        "th-side-drawer": ThSideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "th-side-drawer": LocalJSX.ThSideDrawer & JSXBase.HTMLAttributes<HTMLThSideDrawerElement>;
        }
    }
}
