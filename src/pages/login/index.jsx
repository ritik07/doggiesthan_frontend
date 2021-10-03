import React from 'react'
import { Form, Input, Button } from 'antd';
import './style.css'
import CoverImg from '../coverimg';
import { AppController } from '../../appController/AppController';

export const Login = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <div>
          <CoverImg coverName={"Login"} />
        </div>
        <div>
          <Form id="login-form">
            <div className="cs-bp-10">
              <div className="cs-bp-5">Phone Number *</div>
              <Input type="email" />
            </div>
            <div className="cs-bp-10">
              <div className="cs-bp-5">Password *</div>
              <Input type="password" />
            </div>
            <div>
              <a id="forgot-password-link" href="/accounts/password-reset/">Forgotten password?</a>
            </div>
            <div class="app-form-full">
              <Button type="primary" id="login-button" >
                Log in
              </Button>
            </div>
            <div class="app-form-full">
              <a id="new-to-company-link" href="/users/buyer-registration/" class="app-cta-btn secondary">
                Sign Up
              </a>
            </div>
          </Form>
        </div>
      </div>
    </AppController>

    // <div className="app-static-wrapper">
    //     <div className="app-static-logo">
    //         asdasd
    //     </div>
    //     <Form id="login-form">
    //         <div className="app-form-full">
    //             <div className="app-form-label">Email *</div>
    //             <input type="email"></input>
    //         </div>
    //         <div className="app-form-full">
    //             <div className="app-form-label">Email *</div>
    //             <input type="email"></input>
    //         </div>
    //         <div class="app-form-full">
    //             <a id="forgot-password-link" href="/accounts/password-reset/">Forgotten password?</a>
    //         </div>
    //         <div class="app-form-full">
    // 			<button type="submit" id="login-button" class="app-cta-btn primary">
    // 				Log in
    // 			</button>
    //     	</div>
    //     	<div class="app-form-full">
    //             <a id="new-to-company-link" href="/users/buyer-registration/" class="app-cta-btn secondary">
    //                 Sign Up
    //             </a>
    //         </div>
    //     </Form>
    // </div>
  )
}
