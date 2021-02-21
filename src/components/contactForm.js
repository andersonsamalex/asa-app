import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

function ContactForm(props) {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [button, setButton] = useState('Submit');

    const onFirstNameChange = (e) => {
        setFirstname(e.target.value);
    };
    const onSurNameChange = (e) => {
        setSurname(e.target.value);
    };
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onCompanyChange = (e) => {
        setCompany(e.target.value);
    };
    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
                'service_t5qu188',
                'template_4n0g3z9',
                e.target,
                'user_nus2FK09zmH02ZzQ4VIVb'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    resetForm();
                    return <h2>Thank You! Your submission was sent.</h2>;
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    const resetForm = () => {
        setFirstname('');
        setSurname('');
        setEmail('');
        setCompany('');
        setMessage('');
        setButton('Submitted');
    }
    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Form.Group>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name='from_firstname'
                        type="text"
                        id="input-fname"
                        required
                        value={firstname}
                        onChange={onFirstNameChange}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Surname</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        name='from_surname'
                        type="text"
                        id="input-lname"
                        required
                        value={surname}
                        onChange={onSurNameChange}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        name='email'
                        type="email"
                        id="input-email"
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={onEmailChange}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Company</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        name='company'
                        type="text"
                        id="input-company"
                        required
                        value={company}
                        onChange={onCompanyChange}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Message</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        name='message'
                        className="form-control h-150"
                        id="input-message"
                        required
                        value={message}
                        onChange={onMessageChange}
                    ></Form.Control>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Button
                    type="submit"
                    variant='primary'
                    className="btn  btn-block btn-primary  mb-2"
                    id="input-submit"
                >
                    {button}
                </Button>
            </Form.Group>
        </Form>
    );
}
export default ContactForm;