"use client";

import React, { createContext, useContext, useState } from "react";

const MessageModalContext = createContext({
  showMessageModal: (type, title, message, options) => {},
});

export const useMessageModal = () => useContext(MessageModalContext);

export const MessageModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    type: "error",
    title: "",
    message: "",
    options: {},
  });

  const showMessageModal = (type, title, message, options) => {
    setModal({ isOpen: true, type, title, message, options });
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleConfirm = () => {
    modal.options?.onConfirm?.();
    closeModal();
  };

  const handleCancel = () => {
    modal.options?.onCancel?.();
    closeModal();
  };

  return (
    <MessageModalContext.Provider value={{ showMessageModal }}>
      {children}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.8)] backdrop-blur-xs- flex items-center justify-center">
          <div className="bg-white rounded-lg w-[90%] lg:w-[500px] min-h-[200px] p-5 flex flex-col justify-between shadow-xl">
            <div>
              <h2 className="text-xl font-bold text-black mb-2">{modal.title}</h2>
              <p className="text-gray-600">{modal.message}</p>
            </div>
            <div className="flex justify-end gap-2 mt-auto">
              {modal.options?.cancelText ? (
                <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800" onClick={handleCancel}>
                  {modal.options?.cancelText}
                </button>
              ) : null}

              {modal.options?.confirmText ? (
                <button
                  className={`px-4 py-2 rounded-md mt-10 ${
                    modal.type === "error"
                      ? "bg-red-500 text-white"
                      : modal.type === "success"
                        ? "bg-primary text-white"
                        : modal.type === "warning"
                          ? "bg-yellow-500 text-black"
                          : "bg-primary text-white"
                  }`}
                  onClick={handleConfirm}
                >
                  {modal.options?.confirmText}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </MessageModalContext.Provider>
  );
};
