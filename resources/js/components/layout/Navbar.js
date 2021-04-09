export default function () {
    const token = document.head.querySelector('meta[name="csrf-token"]');
    return (
        <header className="relative bg-white dark:bg-darker">
            <div className="flex items-center justify-between p-2 border-b dark:border-blue-800">
                <a
                    href="#"
                    className="inline-block text-2xl font-bold tracking-wider text-blue-700 uppercase dark:text-light"
                >
                    COVID-DB
                </a>
                <nav aria-label="Secondary" className="hidden space-x-2 md:flex md:items-center">
                    <div className="relative">
                        <form action="/logout" method="POST">
                            <input type="hidden" name="_token" value={token.content} />
                            <button type="submit">
                                Logout
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    );
}

