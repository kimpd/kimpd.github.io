import React from 'react';

import Layout from "../components/Layout"
import Seo from "../components/Seo"

function ContactPage() {
  return (
    <Layout pageTitle="Contact">
      <Seo title="Contact" />
      <header class="post-header inner-sm">
        <h1 class="post-title underline">📧 Contact</h1>
      </header>
      <section id="contact-form" class="block block-form">
        <div class="block-content inner-sm">
          <p>문의할 내용을 보내주세요.</p>
          <form name='contactForm' id='contactForm' action='/thank-you' method='POST'>
            <div class="screen-reader-text">
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>
            <input type="hidden" name="form-name" value="contactForm" />
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Your email address" required />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <div class="form-select-wrap">
                <select id="subject" name="subject">
                  <option value="">Please select</option>
                  <option value="Error on the site">Planning</option>
                  <option value="Sponsorship">Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="7" placeholder="Your message"></textarea>
            </div>
            <div class="form-submit">
              <button type="submit" class="button">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage;
