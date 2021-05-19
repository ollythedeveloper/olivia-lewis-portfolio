import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="App__contact">
            <h2>Contact</h2>
            <div class="group">
              <div class="item-double">
              <form class="form-txt left-side" action="https://formspree.io/f/xbjpzbzz" method="post">
               <label htmlFor="user-name">Name:</label>
               <input id="user-name" type="text" name="name"/>

               <label htmlFor="user-email">Email:</label>
               <input id="user-email" type="text" name="email"/>

               <label htmlFor="user-message">Message:</label>
               <textarea id="user-message" name="message"></textarea>
               <button type="submit">Submit</button>
              </form>
            </div>
              <div class="item left-side">
            <p>Check out my <a href="https://github.com/ollythedeveloper"> Github</a> and <a href="https://www.linkedin.com/in/olivia-lewis-10932183">LinkedIn</a>!</p><p>Contact me if you would like to collaborate! I look forward to hearing from you!</p>
            
            <p>Email: <a href="mailto:ollybaby12@gmail.com">ollybaby12@gmail.com</a></p>
            </div>
            </div>
           
        </div>
    )
}