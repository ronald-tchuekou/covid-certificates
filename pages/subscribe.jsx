import React from 'react';
import { Footer } from '../src/components/footer';
import { DefaultHeader } from '../src/components/header';
import { TextInput } from '../src/components/input_text';
import { NavBar } from '../src/components/navBar';
import { SubscribeImage } from '../src/components/subscribe_img';

export default function Subscribe() {
    const [name, setName] = React.useState({ value: '', error: false });
    const [first_name, setFirstName] = React.useState({ value: '', error: false });
    const [birthday, setBirthday] = React.useState({ value: '', error: false });
    const [born_at, setBornAt] = React.useState({ value: '', error: false });
    const [email, setEmail] = React.useState({ value: '', error: false });
    const [phone, setPhone] = React.useState({ value: '', error: false });
    const [individual_id, setIndividualId] = React.useState({ value: '', error: false });

    /**
     * Fonction qu ipermet de sauvegarder les informations du formulaire.
     */
    function save_data() {
        // TODO
    }

    return (
        <div className="bg-white">
            <DefaultHeader />
            <NavBar color="default" current={2} />

            <div className="row my-30 mx-0 p-0">
                <div className="col-12 col-m-9 col-l-7 col-center">
                    <div className="row p-0 m-0 container">
                        <div className="row m-0 p-0">
                            <div className="col-4 col-center">
                                <div className="d-flex content-center items-center">
                                    <div style={{ width: 300 }}>
                                        <SubscribeImage />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-12 col-center my-10">
                                <h1 className="text-title">Subscription COVID-19 digital certificate</h1>
                                <p className="text-default_gray my-10">
                                    The certificates will be automatically addes to the global covid-19 certificate
                                    database, we also provide a QR code that will help you put it on your phone. The
                                    process lasts for 24h Once done you will receive a copy of your certificate
                                </p>
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default pl-10">Name:</div>
                                <TextInput
                                    placeholder="Name"
                                    value={name.value}
                                    error={name.error}
                                    onValueChange={(value) => setName({ value: value, error: false })}
                                />
                            </div>

                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default pl-10">First name:</div>
                                <TextInput
                                    placeholder="First name"
                                    value={first_name.value}
                                    error={first_name.error}
                                    onValueChange={(value) => setFirstName({ value: value, error: false })}
                                />
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default pl-10">Birthday:</div>
                                <TextInput
                                    placeholder="Birthday"
                                    value={birthday.value}
                                    error={birthday.error}
                                    onValueChange={(value) => setBirthday({ value: value, error: false })}
                                />
                            </div>

                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default pl-10">Born at:</div>
                                <TextInput
                                    placeholder="Born at"
                                    value={born_at.value}
                                    error={born_at.error}
                                    onValueChange={(value) => setBornAt({ value: value, error: false })}
                                />
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default pl-10">Email address:</div>
                                <TextInput
                                    placeholder="Email address"
                                    value={email.value}
                                    error={email.error}
                                    onValueChange={(value) => setEmail({ value: value, error: false })}
                                />
                            </div>

                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default pl-10">Phone number:</div>
                                <TextInput
                                    placeholder="Phone number"
                                    value={phone.value}
                                    error={phone.error}
                                    onValueChange={(value) => setPhone({ value: value, error: false })}
                                />
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-12 m-0 p-10">
                                <div className="text-default pl-10">Individual Healthcare Identifier :</div>
                                <TextInput
                                    placeholder="Individual Healthcare Identifier"
                                    value={individual_id.value}
                                    error={individual_id.error}
                                    onValueChange={(value) => setIndividualId({ value: value, error: false })}
                                />
                            </div>
                        </div>

                        <div className="row m-0 p-0">
                            <div className="col-12 col-center">
                                <p className="t-18 p-10">
                                    <span>Note:</span>&nbsp;
                                    <span className="text-danger">
                                        Please enter your telegram phone number, as a confirmation message will be sent
                                        to you.
                                    </span>
                                </p>
                                <button onClick={() => save_data()} className="btn contained-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
