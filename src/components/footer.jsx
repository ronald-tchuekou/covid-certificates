import React from 'react';
import { Title } from './bases';
import { FooterImage } from './footer_image';
import { useRouter } from 'next/router';

export const Footer = (props) => {
    const router = useRouter();
    return (
        <footer>
            <div className="container py-20">
                <div className="row m-0 p-0">
                    <div className="col-12 col-m-12 col-l-3 ">
                        <div className="d-flex content-center w-100">
                            <div style={{ width: 200 }}>
                                <FooterImage />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-m-8 col-l-6 p-10">
                        <Title>COVID-19 digital certificates</Title>
                        <p className="p-10 t-18">
                            {"Find out how to get your COVID-19 vaccination certificate, update it if it's incorrect," +
                                "and show you are vaccinated even if you don't have a Medicare card"}
                        </p>
                        <button onClick={() => router.push('/subscribe')} className="btn contained-primary">
                            Subscribe
                        </button>
                    </div>
                    <div className="col-12 col-m-4 col-l-3">
                        <div className="navbar-nav">
                            <div className="navbar-nav-item">
                                <svg width="200" height="200" viewBox="0 0 35 35" fill="none">
                                    <path
                                        d="M1.03906 17.5C1.03906 24.6641 5.63281 30.7344 11.9766 32.9766V2.02344C5.63281 4.26562 1.03906 10.3359 1.03906 17.5Z"
                                        fill="#428BC1"
                                    />
                                    <path
                                        d="M33.8516 17.5C33.8516 10.3359 29.3125 4.26562 22.9141 2.02344V32.9766C29.3125 30.7344 33.8516 24.6641 33.8516 17.5Z"
                                        fill="#ED4C5C"
                                    />
                                    <path
                                        d="M11.9766 32.9766C13.6719 33.5781 15.5312 33.9062 17.4453 33.9062C19.3594 33.9062 21.2188 33.5781 22.9141 32.9766V2.02344C21.2188 1.42188 19.4141 1.09375 17.4453 1.09375C15.4766 1.09375 13.6719 1.42188 11.9766 2.02344V32.9766Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className={`navbar-nav-item `} onClick={() => router.push('/')}>
                                Home
                            </div>
                            <div className={`navbar-nav-item `} onClick={() => router.push('/subscribe')}>
                                Subscribe
                            </div>
                            <div className={`navbar-nav-item `} onClick={() => router.push('contact')}>
                                Contacts
                            </div>
                            <div className={`navbar-nav-item `} onClick={() => router.push('about')}>
                                About us
                            </div>
                            <div className={`navbar-nav-item text-danger`} onClick={() => router.push('support')}>
                                Support us
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-12 bg-primary_dark text-default text-center p-10">
                    Copyright 2021, roncoder and kevin , Tous les droits réservés
                </div>
            </div>
        </footer>
    );
};
