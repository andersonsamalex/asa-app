import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      email: '',
      company: '',
      message: '',
      button: 'Submit'
    };
  }

  onFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }
  onSurNameChange(event) {
    this.setState({ surname: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onCompanyChange(event) {
    this.setState({ company: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    emailjs.init('user_nus2FK09zmH02ZzQ4VIVb');
    emailjs
      .sendForm(
        'service_t5qu188',
        'template_4n0g3z9',
        event.target,
        'user_nus2FK09zmH02ZzQ4VIVb'
      )
      .then(
        (result) => {
          console.log(result.text);
          this.resetForm();
          return <h2>Thank You! Your submission was sent.</h2>;
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  resetForm() {
    this.setState({
      firstname: '',
      email: '',
      surname: '',
      company: '',
      message: '',
      button: 'Submitted'
    });
  }

  render() {
    return (
      <div className="bg-dark text-light section" id="contact">
        <h2 className="p-5">Contact Me</h2>
        <div>
          <div className="container-lg">
            <div className="row">
              <div className="col-lg social-top">
                <div>
                  <div className="row align-items-center mb-4">
                    <div className="form-col">
                      <a
                        href="mailto:andersonsamalex@gmail.com"
                        className="m-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          className="bi bi-envelope-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="form-col">
                      <h5>andersonsamalex@gmail.com</h5>
                    </div>
                  </div>
                  <div className="row align-items-center my-4">
                    <div className="form-col">
                      <a
                        href="https://www.linkedin.com/in/sam-alex-anderson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="form-col">
                      <h5>linkedin.com/in/sam-alex-anderson</h5>
                    </div>
                  </div>
                  <div className="row align-items-center my-4">
                    <div className="form-col">
                      <a
                        href="https://twitter.com/AndersonSamAlex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          className="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="form-col">
                      <h5>twitter.com/AndersonSamAlex</h5>
                    </div>
                  </div>
                  <div className="row align-items-center my-4">
                    <div className="form-col">
                      <a
                        href="https://www.facebook.com/andersonsamalex/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="form-col">
                      <h5>facebook.com/andersonsamalex</h5>
                    </div>
                  </div>
                  <row className="row align-items-center my-4">
                    <div className="form-col">
                      <a
                        href="https://github.com/andersonsamalex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-github"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="form-col">
                      <h5>github.com/andersonsamalex</h5>
                    </div>
                  </row>
                </div>
              </div>
              <div className="col-md">
                <div>
                  <form
                    data-np-checked="1"
                    onSubmit={this.handleSubmit.bind(this)}
                  >
                    <div className="form-row">
                      <div className="form-group col-md">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">First Name</div>
                          </div>
                          <input
                            name='from_firstname'
                            type="text"
                            className="form-control"
                            id="input-fname"
                            required=""
                            data-np-checked="1"
                            onChange={this.onFirstNameChange.bind(this)}
                            value={this.state.firstname}
                          />
                        </div>
                      </div>
                      <div className="form-group col-md">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">Surname</div>
                          </div>
                          <input
                            name='from_surname'
                            type="text"
                            className="form-control"
                            id="input-lname"
                            required=""
                            data-np-checked="1"
                            onChange={this.onSurNameChange.bind(this)}
                            value={this.state.surname}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                          </div>
                          <input
                            name='email'
                            type="email"
                            className="form-control"
                            id="input-email"
                            placeholder="Email Address"
                            required=""
                            data-np-checked="1"
                            onChange={this.onEmailChange.bind(this)}
                            value={this.state.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">Company</div>
                          </div>
                          <input
                            name='company'
                            type="text"
                            className="form-control"
                            id="input-company"
                            required=""
                            data-np-checked="1"
                            onChange={this.onCompanyChange.bind(this)}
                            value={this.state.company}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">Message</div>
                          </div>
                          <textarea
                            name='message'
                            className="form-control h-150"
                            id="input-message"
                            required=""
                            onChange={this.onMessageChange.bind(this)}
                            value={this.state.message}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md">
                        <button
                          type="submit"
                          className="btn  btn-block btn-primary  mb-2"
                          id="input-submit"
                        >
                          {this.state.button}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg social-bottom">
                <div className="row justify-content-center mb-4">
                  <div className="form-col p-1">
                    <a href="mailto:andersonsamalex@gmail.com" className="m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="form-col p-1">
                    <a
                      href="https://www.linkedin.com/in/sam-alex-anderson/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="form-col p-1">
                    <a
                      href="https://twitter.com/AndersonSamAlex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="form-col p-1">
                    <a
                      href="https://www.facebook.com/andersonsamalex/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="form-col p-1">
                    <a
                      href="https://github.com/andersonsamalex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-github"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
