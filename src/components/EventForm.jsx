import React from "react";

export default function EventForm() {
    return (
        <div className="flex flex-col gap-4 max-w-sm">
            <h3 className="font-semibold text-lg mb-2">Fill Your Details here -</h3>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Enter details
                    </label>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue="Khatchadour"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue="kh.israelyan@gmail.com"
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
                By proceeding, you confirm that you have read and agree to{" "}
                <a href="#" className="text-blue-600 underline">Calendly's Terms of Use</a> and{" "}
                <a href="#" className="text-blue-600 underline">Privacy Notice</a>.
            </p>

            <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded px-6 py-2 w-max transition-colors"
            >
                Submit
            </button>
        </div>
    );
}