"use client";
import { MessageModalProvider } from "@/context/MessageModalContext";

export const Providers = ({ children }) => {
    return (
        <MessageModalProvider>
            {children}
        </MessageModalProvider>
    );
}
