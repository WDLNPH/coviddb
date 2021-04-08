import {NavLink} from "react-router-dom";

export default function () {
    return (
        <div className="flex-1 flex-col justify-center bg-gray-100 flex items-center">
            <div className="max-w-md">
                <div className="text-5xl font-dark font-bold">404</div>
                <p
                    className="text-2xl md:text-3xl font-light leading-normal"
                >Sorry we couldn't find this page. </p>
                <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                <NavLink to={'/'} className="mp-button">
                    Back to Homepage
                </NavLink>
            </div>
        </div>
    );
}
