"use client"; // חייב להישאר כאן!

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import styles from "./../../app/styles/components/layout/Contact.module.css";

// מקבלים את dict כ-Prop מהשרת (page.tsx)
export default function Contact({ dict }: { dict: any }) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(dict.sendingText); // משתמש בטקסט מהמילון

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus(dict.successMessage); // טקסט הצלחה מהמילון
            
            // איפוס הטופס אחרי שליחה מוצלחת
            (e.target as HTMLFormElement).reset();
            
            // העלמת הודעת ההצלחה אחרי 5 שניות
            setTimeout(() => setStatus(""), 5000);
          },
          (error) => {
            console.log(error.text);
            setStatus(dict.errorMessage); // טקסט שגיאה מהמילון
          }
        );
    }
  };

  return (
    <>
      {/* הסרתי את id="contact" בהנחה שעטפת את הרכיב ב-<section id="contact"> ב-page.tsx */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className={styles.contactInner}>
                <div className="row">
                  <div className="col-md-10">
                    <div className={styles.contactFormInner}>
                      
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={styles.contactField}
                      >
                        <h3 className={styles.title}>{dict.title}</h3>
                        <p>{dict.subtitle}</p>

                        <input
                          type="text"
                          name="name"
                          className={`form-control form-group ${styles.formControl}`}
                          placeholder={dict.namePlaceholder}
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          className={`form-control form-group ${styles.formControl}`}
                          placeholder={dict.emailPlaceholder}
                          required
                        />
                        <input
                          type="text"
                          name="subject"
                          className={`form-control form-group ${styles.formControl}`}
                          placeholder={dict.subjectPlaceholder}
                          required
                        />
                        <textarea
                          name="message"
                          className={`form-control form-group ${styles.formControl}`}
                          placeholder={dict.messagePlaceholder}
                          rows={4}
                          required
                        ></textarea>

                        <button
                          type="submit"
                          className={styles.contactFormSubmit}
                          disabled={status === dict.sendingText}
                        >
                          {status === dict.sendingText ? dict.sendingText : dict.sendButton}
                        </button>
                        
                        {status && status !== dict.sendingText && (
                          <p style={{ marginTop: '10px', color: status === dict.successMessage ? 'green' : 'red' }}>
                            {status}
                          </p>
                        )}

                      </form>
                    </div>
                  </div>
                </div>

                <div className={styles.contactInfoSec}>
                  <h4>{dict.contactInfoTitle}</h4>
                  
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
                    <span>+34 657 164 489</span>
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
                      {dict.location}
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