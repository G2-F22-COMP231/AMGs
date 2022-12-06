import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="">
          <center>
            <h1 className="heading ">Appointment with Mechanic</h1>
          </center>

          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" className="was-validated">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <div class="flex">
                        <label className="mr-2">Services: </label>
                        <div class="flex items-center mr-4">
                          <input
                            id="red-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="red-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Red
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="green-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="green-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Green
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="purple-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="purple-checkbox"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Diagnostic Services
                      </label>
                      <textarea
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="issue"
                          name="fav_issue"
                          defaultValue="issue"
                        />
                        <label htmlFor="issue" className="form-check-label">
                          Let mechanic figure what's the issue!
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="myCheck"
                      name="remember"
                      required
                    />
                    <label className="form-check-label" htmlFor="myCheck">
                      I agree on terms &amp; services
                    </label>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Check this checkbox to continue.
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default Form;
