import '../../_styles/components/Slack/Slack.css';
import React from 'react';
import { inviteEmail } from '../../actions/inviteActions';

export default function Slack() {

  function submitForm (e) {
    e.preventDefault();
    const target = e.target;
    const userEmail = target.email.value;
    inviteEmail(userEmail);
  }

  return(
    <div id="Slack">
      <h1 className="page-title">Join Us On Slack</h1>
      <p>Enter your email below to receive an invite to our slack channel.</p>
      <form onSubmit={submitForm} className="slack-invite-form">
        <input name="email" type="email" placeholder="example@gmail.com"/>
        <button className="global-btn" type="submit">Invite Me!</button>
      </form>
    </div>
  )
}
