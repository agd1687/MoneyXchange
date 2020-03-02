import React from 'react';

export default function Section({ title, backgroundColor = "bg-white", children }) {
    return (
        <section className={`border p-4 ${backgroundColor}`}>
            {!title ? null : <h3 className="text-secondary mb-3">{title}</h3>}
            {children}
        </section>
    );
}