const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const requestOptions = (body) => {
  return {
 method: "POST",
 headers: myHeaders,
 body,
}}
