import Link from "next/link"

const Navbar = () => {
    return (
        <header className="fixed top-0 w-full h-16 shadow rounded-md z-50 bg-white">
            <div className="w-full h-full hidden sm:flex items-center px-4">
                <div className="flex-1">
                    <Link href="/">
                        <button className="btn shadow rounded-md">
                            <div>🏠</div>
                        </button>
                    </Link>
                </div>

                <div className="flex-1 flex justify-center gap-4">
                    <Link href="/">
                        <button className="btn shadow rounded-md">
                            <div>About</div>
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="btn shadow rounded-md">
                            <div>Features</div>
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="btn shadow rounded-md">
                            <div>Information</div>
                        </button>
                    </Link>
                </div>

                <div className="flex-1 flex justify-end">
                    <Link href="/en">
                        <button className="btn shadow rounded-md">
                            <div>Function</div>
                        </button>
                    </Link>
                </div>
            </div>
        </header >
    )
}
export default Navbar