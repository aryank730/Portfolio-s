import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="bg-ink min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <p className="font-mono text-sm text-accent mb-3">404</p>
                <h1 className="font-display text-3xl md:text-4xl text-text font-semibold mb-4">
                    This page doesn't exist
                </h1>
                <p className="text-muted mb-8">
                    The page you're looking for was moved, renamed, or never existed in the first place.
                </p>
                <NavLink
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-ink rounded-sm font-medium hover:brightness-110 transition"
                >
                    Back to home
                </NavLink>
            </div>
        </section>
    );
};

export default NotFound;