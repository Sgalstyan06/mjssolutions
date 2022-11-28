import { IFormInputs } from "../components/Form/Form";

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined}  Returns either the response, or throws an error
 */
const _checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  }

  throw new Error(
    `Network Request error: ${response.url} -> ${response.statusText}`,
  );
};

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */

const _parseJSON = (response: Response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.clone().json();
};

export const postContactData = (data: IFormInputs) => {
  return fetch("/api/contact-us", {
    body: JSON.stringify({
      contactData: data,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => _checkStatus(response))
    .then(_parseJSON)
    .catch((err) => {
      throw new Error(err);
    });
};
