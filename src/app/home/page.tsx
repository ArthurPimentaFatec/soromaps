'use client'

import { Button } from "@/components/ui/button"
import React from "react"

export default function Page() {
    const [teste, setTeste] = React.useState("teste")

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {/* <Button
                value={teste}
            /> */}
        </div>
    )
}