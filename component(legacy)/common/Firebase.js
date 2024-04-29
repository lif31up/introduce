'use client'
import { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { logEvent, getAnalytics } from 'firebase/analytics'
import firebaseConfig from 'app/firebase'

export function logHandler(log) {
  const analytics = getAnalytics(app)
  logEvent(analytics, log)
}

export let app, analytics
export default function Firebase({}) {
  useEffect(() => {
    app = initializeApp(firebaseConfig)
    analytics = getAnalytics(app)
    logEvent(analytics, 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title,
    })
  }, [])
  return <></>
}
