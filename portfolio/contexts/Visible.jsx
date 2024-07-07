import { createContext, useState } from 'react';


export const VisibleContext = createContext();

const VisibleProvider = ({ children }) => {
    const [visible, setVisible] = useState(true);
    return (
        <VisibleContext.Provider value={{ visible, setVisible }}>
            {children}
        </VisibleContext.Provider>
    );
};

export default VisibleProvider