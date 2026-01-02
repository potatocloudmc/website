import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFoundPage() {

    return (

        <>

            <Header />


            <main className={"section"}>
                <div className={"container"}>
                    <div className={"section-header"}>
                        <span className={"section-badge text-red-600"}>Error Page</span>
                        <h1 className={"section-title"}>404 Not Found</h1>
                        <p className="section-subtitle text-red-600">
                            Go <Link href={"/"}>Back</Link>
                        </p>
                    </div>

                </div>
            </main>

            <Footer />

        </>

    )

}