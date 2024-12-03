
"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const onClickButton = () => {
        router.push("/");
    }
    return (
        <div>
            <div style={{margin: "auto", display: "flex", justifyContent: "center", marginTop: "20%"}}>
                The page you requested was not found...
            </div>
            <div>
                <button type={"button"} style={{margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center"}} onClick={onClickButton}>Return home!</button>
            </div>
        </div>
    );
}