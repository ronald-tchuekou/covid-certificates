import React from 'react';
import { Footer } from '../src/components/footer';
import { TextInput } from '../src/components/input_text';
import { NavBar } from '../src/components/navBar';
import { Item } from './about';

export default function Subscribe() {
    const [name, setName] = React.useState({ value: '', error: false });
    const [first_name, setFirstName] = React.useState({ value: '', error: false });
    const [birthday, setBirthday] = React.useState({ value: '', error: false });
    const [born_at, setBornAt] = React.useState({ value: '', error: false });
    const [email, setEmail] = React.useState({ value: '', error: false });
    const [phone, setPhone] = React.useState({ value: '', error: false });
    const [individual_id, setIndividualId] = React.useState({ value: '', error: false });

    return (
        <div className="bg-white">
            <NavBar color="default" current={2} />

            <div className="row my-30 mx-0 p-0">
                <div className="col-12 col-m-9 col-l-8 col-center">
                    <div className="row p-0 m-0 container">
                        <div className="row m-0 p-0">
                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default">Name:</div>
                                <TextInput
                                    placeholder="Name"
                                    value={name.value}
                                    error={name.error}
                                    onValueChange={(value) => setName({ value: value, error: false })}
                                />
                            </div>

                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default">First name:</div>
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
                                <div className="text-default">Birthday:</div>
                                <TextInput
                                    placeholder="Birthday"
                                    value={birthday.value}
                                    error={birthday.error}
                                    onValueChange={(value) => setBirthday({ value: value, error: false })}
                                />
                            </div>

                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default">Born at:</div>
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
                                <div className="text-default">Email address:</div>
                                <TextInput
                                    placeholder="Email address"
                                    value={email.value}
                                    error={email.error}
                                    onValueChange={(value) => setEmail({ value: value, error: false })}
                                />
                            </div>

                            <div className="col-12 col-m-6 m-0 p-10">
                                <div className="text-default">Phone number:</div>
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
                                <div className="text-default">Individual Healthcare Identifier :</div>
                                <TextInput
                                    placeholder="Individual Healthcare Identifier"
                                    value={individual_id.value}
                                    error={individual_id.error}
                                    onValueChange={(value) => setIndividualId({ value: value, error: false })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
