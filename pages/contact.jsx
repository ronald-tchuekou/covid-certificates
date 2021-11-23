import React from 'react';
import Head from 'next/head';
import { Banner } from '../src/components/banner';
import { Title } from '../src/components/bases';
import { ContactBannerImage } from '../src/components/contact_banner_image';
import { Footer } from '../src/components/footer';
import { SideBar } from '../src/components/side_bar';

export default function Contacts() {
    const side_contents = [
        {
            url: '#coronavirus',
            title: 'Coronavirus (COVID-19)',
        },
        {
            url: '#general-enquiries',
            title: 'General enquiries',
        },
        {
            url: '#complaints',
            title: 'Complaints',
        },
        {
            url: '#website-feedback',
            title: 'Website feedback',
        },
        {
            url: '#directory',
            title: 'Directory',
        },
        {
            url: '#assistance',
            title: 'Assistance',
        },
        {
            url: '#follow-us',
            title: 'Follow us',
        },
    ];

    return (
        <div className="bg-white">
            <Head>
                <title>COVID-19 Certificates</title>
                <meta name="description" content="COVID-19 Certificates" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner reverse color="white" current={3}>
                <div className="banner-item text">
                    <Title>Contact us</Title>
                    <p className="text-description t-18">
                        If you have a question or would like to give feedback, you can get in touch with us by email,
                        phone or by mail. You can also find us on social media.
                    </p>
                </div>
                <div className="banner-item">
                    <ContactBannerImage />
                </div>
            </Banner>

            <main className="container m-0">
                <div className="row m-0 p-0 bg-container">
                    <div className="col-0 col-m-4 m-0 p-0 overflow-hidden">
                        <SideBar contents={side_contents} />
                    </div>
                    <div className="col-12 col-m-8 m-0 p-0">
                        <div className="container-side bg-white p-10 text-default_dark">
                            <section id={side_contents[0].url.slice(1)} className="p-10">
                                <h1>Coronavirus (COVID-19)</h1>
                                <p className="my-10 t-18">Local outbreak information</p>
                                <p className="my-10 t-18">
                                    Check your local state or territory website for directives and travel restrictions.
                                </p>
                                <p className="my-10 t-18">
                                    Find information about or make an enquiry related to COVID-19.
                                </p>
                            </section>

                            <section id={side_contents[1].url.slice(1)} className="p-10">
                                <h1>General enquiries</h1>
                                <p className="my-10 t-18">
                                    For all other enquiries not related to coronavirus (COVID-19), use this form:
                                </p>
                                <div className="p-10">
                                    <p>Phone</p>
                                    <div className="p-10">
                                        <p>
                                            <span className="text-default">Switchboard</span>
                                            <span className="text-danger">02 6289 1555</span>
                                        </p>
                                        <p>
                                            <span className="text-default">Freecall</span>
                                            <span className="text-danger">1800 020 103</span>
                                        </p>
                                    </div>
                                    <p>Mail</p>
                                    <div className="p-10 text-default">
                                        <p>Department of Health </p>
                                        <p>GPO Box 9848</p>
                                        <p>Canberra ACT 2601</p>
                                        <p>Australia</p>
                                    </div>
                                </div>
                            </section>

                            <section id={side_contents[2].url.slice(1)} className="p-10">
                                <h1>Complaints</h1>
                                <p className="my-10 t-18">Online</p>
                                <div className="p-10">
                                    <p>Phone</p>
                                    <div className="p-10">
                                        <p>
                                            <span className="text-default">Switchboard</span>
                                            <span className="text-danger">02 6289 1555</span>
                                        </p>
                                        <p>
                                            <span className="text-default">Freecall</span>
                                            <span className="text-danger">1800 020 103</span>
                                        </p>
                                    </div>
                                    <p>Mail</p>
                                    <div className="p-10 text-default">
                                        <p>Department of Health </p>
                                        <p>GPO Box 9848</p>
                                        <p>Canberra ACT 2601</p>
                                        <p>Australia</p>
                                    </div>
                                </div>
                            </section>

                            <section id={side_contents[3].url.slice(1)} className="p-10">
                                <h1>{'Website feedback'}</h1>
                                <p className="my-10 t-18">
                                    {'Give us thoughts or feedback on how we can improve the website.'}
                                </p>
                            </section>

                            <section id={side_contents[4].url.slice(1)} className="p-10">
                                <h1>{'Directory'}</h1>
                                <p className="my-10 t-18">
                                    {
                                        'Contact details for individuals, groups, organisations and services relating to Health can be found in our directory.'
                                    }
                                </p>
                            </section>

                            <section id={side_contents[5].url.slice(1)} className="p-10">
                                <h1>{'Assistance'}</h1>
                                <div className="p-10">
                                    <p>National Relay Service</p>
                                    <div className="p-10">
                                        <p className="text-default">
                                            If you are deaf or have a hearing or speech impairment, you can use the
                                            National Relay Service to access any of the department’s listed phone
                                            numbers. You can visit the National Relay Service website or call 1300 555
                                            727.
                                        </p>
                                    </div>
                                    <p>Translating and Interpreting Service</p>
                                    <div className="p-10 text-default">
                                        <p>
                                            If you are a non-English speaker, you can use the Translating and
                                            Interpreting Service if you need to talk to someone in the department. To
                                            find out more, visit their website or call 131 450.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section id={side_contents[4].url.slice(1)} className="p-10">
                                <h1>{'Follow us'}</h1>
                                <div className="p-10 d-flex d-flex-r social-network">
                                    <a href="#twitter">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path
                                                d="M29.9985 3.65316C28.8947 4.25273 27.7087 4.65795 26.4638 4.84024C27.7346 3.90723 28.7103 2.42976 29.1698 0.669382C27.9617 1.54754 26.64 2.16626 25.2618 2.49881C24.1391 1.03369 22.5398 0.118042 20.7696 0.118042C17.3708 0.118042 14.6152 3.49354 14.6152 7.6568C14.6152 8.24776 14.6697 8.82307 14.7746 9.37498C9.65982 9.06048 5.12511 6.05919 2.08966 1.49804C1.56002 2.61149 1.25654 3.90665 1.25654 5.28809C1.25654 7.90369 2.34311 10.2111 3.99436 11.5631C3.01705 11.5256 2.06124 11.2023 1.20674 10.6201C1.20639 10.6516 1.20639 10.6832 1.20639 10.7149C1.20639 14.3676 3.32774 17.4147 6.14301 18.1073C5.23676 18.4092 4.28616 18.4534 3.36383 18.2365C4.14692 21.2316 6.41978 23.4111 9.11272 23.4721C7.00648 25.494 4.3528 26.6993 1.46956 26.6993C0.972737 26.6993 0.482941 26.6636 0.00146484 26.594C2.72499 28.733 5.95987 29.9811 9.43531 29.9811C20.7553 29.9811 26.9454 18.4934 26.9454 8.5311C26.9454 8.20412 26.9395 7.879 26.9276 7.55575C28.1324 6.48879 29.1723 5.16725 29.9985 3.65316Z"
                                                fill="#55ACEE"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#facebook">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                                            <path
                                                d="M35.4167 7.29178C35.4167 7.01551 35.3069 6.75056 35.1116 6.55521C34.9162 6.35986 34.6513 6.25011 34.375 6.25011H29.1667C26.544 6.11947 23.9762 7.03218 22.0244 8.78882C20.0726 10.5455 18.8954 13.0032 18.75 15.6251V21.2501H13.5417C13.2654 21.2501 13.0004 21.3599 12.8051 21.5552C12.6097 21.7506 12.5 22.0155 12.5 22.2918V27.7084C12.5 27.9847 12.6097 28.2497 12.8051 28.445C13.0004 28.6404 13.2654 28.7501 13.5417 28.7501H18.75V42.7084C18.75 42.9847 18.8597 43.2497 19.0551 43.445C19.2504 43.6404 19.5154 43.7501 19.7917 43.7501H26.0417C26.3179 43.7501 26.5829 43.6404 26.7782 43.445C26.9736 43.2497 27.0833 42.9847 27.0833 42.7084V28.7501H32.5417C32.7733 28.7534 32.9995 28.6794 33.1843 28.5398C33.3692 28.4002 33.5023 28.203 33.5625 27.9793L35.0625 22.5626C35.1039 22.4087 35.1095 22.2473 35.0788 22.0909C35.048 21.9345 34.9818 21.7873 34.8852 21.6605C34.7886 21.5337 34.6642 21.4308 34.5216 21.3596C34.379 21.2885 34.2219 21.251 34.0625 21.2501H27.0833V15.6251C27.1352 15.1094 27.3773 14.6316 27.7625 14.2849C28.1478 13.9382 28.6484 13.7475 29.1667 13.7501H34.375C34.6513 13.7501 34.9162 13.6404 35.1116 13.445C35.3069 13.2497 35.4167 12.9847 35.4167 12.7084V7.29178Z"
                                                fill="#55ACEE"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#linkedin">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path
                                                d="M11.5666 8.33329C11.5661 9.21735 11.2145 10.065 10.5891 10.6898C9.96365 11.3146 9.11562 11.6654 8.23157 11.665C7.34751 11.6645 6.49984 11.3129 5.87503 10.6875C5.25023 10.062 4.89946 9.21401 4.8999 8.32996C4.90034 7.4459 5.25196 6.59823 5.87739 5.97342C6.50283 5.34861 7.35085 4.99785 8.2349 4.99829C9.11896 4.99873 9.96663 5.35035 10.5914 5.97578C11.2162 6.60121 11.567 7.44924 11.5666 8.33329ZM11.6666 14.1333H4.9999V35H11.6666V14.1333ZM22.1999 14.1333H15.5666V35H22.1332V24.05C22.1332 17.95 30.0832 17.3833 30.0832 24.05V35H36.6666V21.7833C36.6666 11.5 24.8999 11.8833 22.1332 16.9333L22.1999 14.1333Z"
                                                fill="#55ACEE"
                                            />
                                        </svg>
                                    </a>

                                    <a href="#youtube">
                                        <svg width="38" height="27" viewBox="0 0 38 27" fill="none">
                                            <g clipPath="url(#clip0_27_3111)">
                                                <path
                                                    d="M36.3161 4.07227C36.1031 3.28517 35.6876 2.56759 35.1111 1.99099C34.5345 1.4144 33.8169 0.998902 33.0298 0.78588C30.1483 0 18.551 0 18.551 0C18.551 0 6.95307 0.0237881 4.07151 0.809668C3.2844 1.0227 2.56683 1.43822 1.99026 2.01484C1.41368 2.59147 0.998229 3.30908 0.785264 4.09621C-0.08634 9.21618 -0.424451 17.0178 0.809197 21.933C1.02218 22.7201 1.43765 23.4377 2.01422 24.0143C2.59079 24.5909 3.30835 25.0064 4.09545 25.2194C6.97701 26.0053 18.5746 26.0053 18.5746 26.0053C18.5746 26.0053 30.1721 26.0053 33.0535 25.2194C33.8406 25.0064 34.5582 24.5909 35.1348 24.0143C35.7114 23.4377 36.1269 22.7201 36.3399 21.933C37.2592 16.8058 37.5425 9.00904 36.3161 4.07242V4.07227Z"
                                                    fill="#FF0000"
                                                />
                                                <path
                                                    d="M14.8596 18.5751L24.4806 13.0026L14.8598 7.43005L14.8596 18.5751Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_27_3111">
                                                    <rect width="37.14" height="26.109" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>

                                    <a href="#pinterest">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <g clipPath="url(#clip0_27_3120)">
                                                <path
                                                    d="M0 20.0003C0 28.19 4.92469 35.2256 11.9717 38.3189C11.9155 36.9223 11.9617 35.2458 12.3198 33.7262C12.7044 32.1027 14.8933 22.8281 14.8933 22.8281C14.8933 22.8281 14.2544 21.5511 14.2544 19.6637C14.2544 16.6998 15.9722 14.4862 18.1116 14.4862C19.9308 14.4862 20.8097 15.8527 20.8097 17.4889C20.8097 19.3177 19.6433 22.0531 19.0434 24.5867C18.5423 26.7083 20.1072 28.4387 22.2002 28.4387C25.9895 28.4387 28.5417 23.5717 28.5417 17.8052C28.5417 13.4217 25.5894 10.1408 20.2195 10.1408C14.1527 10.1408 10.3731 14.6652 10.3731 19.7189C10.3731 21.4614 10.8869 22.6902 11.6916 23.6417C12.0616 24.0788 12.113 24.2545 11.9791 24.7564C11.8831 25.1244 11.6628 26.0103 11.5716 26.3614C11.4384 26.868 11.028 27.0491 10.5702 26.862C7.77578 25.7213 6.47438 22.6611 6.47438 19.2211C6.47438 13.5397 11.2659 6.72719 20.7684 6.72719C28.4044 6.72719 33.4302 12.2528 33.4302 18.1842C33.4302 26.03 29.0683 31.8914 22.6386 31.8914C20.4794 31.8914 18.4483 30.7242 17.7525 29.3984C17.7525 29.3984 16.5914 34.0066 16.3455 34.8964C15.9214 36.4384 15.0914 37.9797 14.3325 39.1809C16.1727 39.7251 18.0818 40.0013 20.0008 40.0011C31.0452 40.0011 40.0002 31.0466 40.0002 20.0003C40.0002 8.95453 31.0452 0 20.0008 0C8.95531 0 0 8.95453 0 20.0003Z"
                                                    fill="#CB1F27"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_27_3120">
                                                    <rect width="40" height="40" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
