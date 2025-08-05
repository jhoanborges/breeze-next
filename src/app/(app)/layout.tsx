'use client'

import React from 'react'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

interface AppLayoutProps {
    children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation/>
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
