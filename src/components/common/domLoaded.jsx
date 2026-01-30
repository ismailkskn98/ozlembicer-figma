'use client';
import React, { useEffect, useLayoutEffect } from 'react'

export default function DomLoaded() {

    useLayoutEffect(() => {
        const hash = window.location.hash
        if (!hash) return

        const id = hash.replace('#', '')

        setTimeout(() => {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }, 500)
    }, [])

    return (
        <></>
    )
}
