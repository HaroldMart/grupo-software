import React, { ReactNode } from 'react';
import "../../static/css/partials/section.scss";


interface SectionProps {
    children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    );
};
