'use client'

import React from 'react'
import Button from '@/components/Button'
import { useState } from 'react'
import { signOut } from "next-auth/react"

const Page: React.FC = () => {

    const [status] = useState<string | null>(null)

    function resendEmailVerification() {
        throw new Error('Function not implemented.')
    }

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just
                emailed to you? If you didn't receive the email, we will gladly
                send you another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <div className="mt-4 flex items-center justify-between">
                <Button onClick={() => resendEmailVerification()}>
                    Resend Verification Email
                </Button>

                <button
                    type="button"
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => signOut()}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default Page
