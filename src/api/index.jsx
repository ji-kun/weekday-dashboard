const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const body = JSON.stringify({
 "limit": 12,
 "offset": 0,
});

export const requestOptions =  {
 method: "POST",
 headers: myHeaders,
 body,
};
