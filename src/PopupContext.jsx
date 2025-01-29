import React, { createContext, useRef, useContext } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
	const popupRef = useRef();

	const openConsultation = () => {
		if (popupRef.current) {
			popupRef.current.openConsultationPopup();
		}
	};

	return <PopupContext.Provider value={{ popupRef, openConsultation }}>{children}</PopupContext.Provider>;
};

export const usePopup = () => useContext(PopupContext);
