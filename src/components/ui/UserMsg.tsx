"use client";

import { useEffect, useRef, useState } from "react";
import { eventBusService } from "./../../services/event-bus.service";
import styles from "./../../app/styles/components/ui/UserMsg.module.css"

// הגדרת טיפוס להודעה
interface Msg {
    txt: string;
    type: 'success' | 'error';
}

export function UserMsg() {
    const [msg, setMsg] = useState<Msg | null>(null);
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg: Msg) => {
            setMsg(msg);
            
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
            timeoutIdRef.current = setTimeout(closeMsg, 3000);
        });

        return () => {
            unsubscribe();
            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
        };
    }, []);

    function closeMsg() {
        setMsg(null);
    }

    if (!msg) return null;

    return (
        <section className={`${styles.userMsg} ${styles[msg.type]}`}>
            <button className={styles.closeBtn} onClick={closeMsg}>×</button>
            <span>{msg.txt}</span>
        </section>
    );
}