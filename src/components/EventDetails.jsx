import React from "react";

export default function EventDetails() {
    return (
        <div className="flex flex-col gap-6 max-w-md">
            <img
                alt="Profile photo of a blonde woman with red lipstick and black top"
                className="rounded-full"
                height="60"
                width="60"
                src="https://storage.googleapis.com/a1aa/image/7a94f284-08d0-4c69-131b-74b63f2eefaa.jpg"
            />
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-600">Account name</span>
                <h2 className="font-bold text-lg">Event title</h2>
            </div>
            <div className="flex flex-col gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                    <i className="far fa-calendar-alt"></i>
                    <span>19:00 - 19:45, Monday, August 19, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="far fa-clock"></i>
                    <span>30 min</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="far fa-comment-alt"></i>
                    <span>Web conferencing details provided upon confirmation.</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="fas fa-globe"></i>
                    <span>Asia/Yerevan</span>
                </div>
            </div>
        </div>
    );
}
