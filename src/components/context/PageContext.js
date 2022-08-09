import { createContext, useContext, useState } from 'react';

const PageContext = createContext();
const UpdatePageContext = createContext();

export const usePage = () => {
    return useContext(PageContext);
}

export const useUpdatePage = () => {
    return useContext(UpdatePageContext);
}

export const PageProvider = ({ value, children }) => {
    const [page, setPage] = useState(value);
    <PageContext.Provider value={page}>
        <UpdatePageContext.Provider value={setPage}>
            {children}
        </UpdatePageContext.Provider>
    </PageContext.Provider>
};

export default PageProvider;