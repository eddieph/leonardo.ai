'use client'
import React from 'react';
import Header from '../_components/Header';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header/>
      {children}
    </section>
  )
}