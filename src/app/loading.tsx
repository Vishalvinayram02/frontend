"use client"

import { SSRProvider, Spinner } from "react-bootstrap"

export default function Loading()
{
    return <div>
        <SSRProvider>
        <Spinner animation="grow" variant="warning" />
        </SSRProvider></div>
}