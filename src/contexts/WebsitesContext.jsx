import { createContext, useState } from 'react';
import websites from '../utils/websites.json';

export const WebsitesContext = createContext({});

export function WebsitesContextProvider({ children, ...rest }) {
    const initialData = websites[0];

    const [title, setTitle] = useState(initialData.title);
    const [description, setDescription] = useState(initialData.description);
    const [image, setImage] = useState(initialData.imageUrl);
    const [link, setLink] = useState(initialData.link);

    return (
        <WebsitesContext.Provider value={{
            title,
            description,
            image,
            link,
            setTitle,
            setDescription,
            setImage,
            setLink,
        }}>
            {children}
        </WebsitesContext.Provider>
    );
};