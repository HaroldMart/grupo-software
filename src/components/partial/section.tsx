import React, { ReactNode } from 'react';
import "../../components/static/css/partials/section.scss";

interface SectionProps {
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <section>
            section:{children}
        </section>
    );
};

export default Section;