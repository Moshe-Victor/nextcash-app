"use client";

import { UserButton } from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {ChartColumnBigIcon} from "lucide-react";

export default function UserDropdown() {
    const router = useRouter();
    return (
        <UserButton
            showName
            appearance={{
                elements: {
                    userButtonOuterIdentifier: {
                        color: "white",
                    },
                },
            }}
        >
            <UserButton.MenuItems>
                <UserButton.Action
                    label="Dashboard"
                    labelIcon={<ChartColumnBigIcon size={16} />}
                    onClick={() => {
                        router.push("/dashboard");
                    }}
                />
            </UserButton.MenuItems>
        </UserButton>
    );
}