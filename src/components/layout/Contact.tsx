import Image from 'next/image';

import styles from "./../../app/styles/components/layout/Contact.module.css";

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className={styles.contactInner}>
                <div className="row">
                  <div className="col-md-10">
                    <div className={styles.contactFormInner}>
                      <form
                        action="https://formsubmit.co/your_email@gmail.com"
                        method="POST"
                        className={styles.contactField}
                      >
                        {/* הגדרות FormSubmit (אופציונלי) */}
                        <input type="hidden" name="_captcha" value="false" />

                        <h3 className={styles.title}>Contact Us</h3>
                        <p>
                          Feel Free to contact us any time. We will get back to
                          you as soon as we can!
                        </p>

                        <input
                          type="text"
                          name="name"
                          className={`form-control form-group ${styles.formControl}`}
                          placeholder="Name"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          className={`form-control form-group ${styles.formControl}`}
                          placeholder="Email"
                          required
                        />
                        <textarea
                          name="message"
                          className={`form-control form-group ${styles.formControl}`}
                          placeholder="Message"
                          rows={4}
                          required
                        ></textarea>

                        <button
                          type="submit"
                          className={styles.contactFormSubmit}
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className={styles.contactInfoSec}>
                  <h4>Contact Info</h4>
                  
                  {/* הוספתי ריווח קטן למקרה שה-CSS הקודם הסתמך על FontAwesome */}
                  <div
                    className={`d-flex align-items-center ${styles.infoSingle}`}
                    style={{ gap: '12px' }}
                  >
                    <Image 
                      src="/icons/contact-phone.svg" 
                      alt="Mobile Icon" 
                      width={20} 
                      height={20} 
                    />
                    <span>+31 657 164 489</span>
                  </div>
                  
                  <div
                    className={`d-flex align-items-center ${styles.infoSingle}`}
                    style={{ gap: '12px' }}
                  >
                    <Image 
                      src="/icons/mail.svg" 
                      alt="Email Icon" 
                      width={20} 
                      height={20} 
                    />
                    <span>lab@noesisanalysis.com</span>
                  </div>
                  
                  <div
                    className={`d-flex align-items-center ${styles.infoSingle}`}
                    style={{ gap: '12px' }}
                  >
                    <Image 
                      src="/icons/location.svg" 
                      alt="Map Icon" 
                      width={20} 
                      height={20} 
                    />
                    <span>
                      Madrid, España
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}