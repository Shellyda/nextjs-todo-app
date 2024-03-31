"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IToast } from "./interfaces";

export const Toast = ({ testID }: IToast) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const toast = searchParams.get("toast");
  const type = searchParams.get("type");

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toast && type) {
      const timeout = setTimeout(() => {
        setShow(false);
        if (closeButtonRef.current) {
          closeButtonRef.current.click();
        }
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [toast, type]);

  useEffect(() => {
    if (!toast) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [toast]);

  if (!show) {
    return null;
  }

  return (
    <div
      id={testID}
      className={`${
        type === "completed" ? "bg-green-500" : "bg-red-500"
      } fixed bottom-5 right-5 p-4 text-white rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in`}
      role="alert"
    >
      <div className="flex items-center">
        <div
          className={`${
            type === "completed"
              ? "text-green-500 bg-green-100"
              : "text-red-500 bg-red-100"
          } flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-3`}
        >
          {type === "completed" ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1C5.037 1 1 5.037 1 10s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm4.707 7.707a1 1 0 0 0-1.414-1.414L9 11.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5-5z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="text-sm font-normal">
          {type === "completed"
            ? "This todo was completed successfully!"
            : "This todo was deleted!"}
        </div>
        <Link id="close-toast" href={pathname}>
          <button
            ref={closeButtonRef}
            type="button"
            className=" text-white hover:text-gray-100 focus:outline-none"
            style={{
              marginTop: "8px",
              marginLeft: "10px",
            }}
            data-dismiss-target={`#${testID}`}
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};
