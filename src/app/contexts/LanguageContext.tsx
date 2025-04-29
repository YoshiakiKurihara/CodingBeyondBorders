// contexts/LanguageContext.tsx
'use client';
import React, { createContext, useReducer, useContext } from 'react';

// 状態型とアクション型
type Language = 'ja' | 'en';
type Action = { type: 'SET_LANGUAGE'; payload: Language };
type State = { language: Language };

// 初期状態
const initialState: State = { language: 'ja' };

// reducer
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return { language: action.payload };
        default:
            return state;
    }
};

// contextの定義
const LanguageContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Provider
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <LanguageContext.Provider value={{ state, dispatch }}>
            {children}
        </LanguageContext.Provider>
    );
};

// カスタムフック
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
