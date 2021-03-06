import axios from "axios";

export const subscribeEmail = (
  email,
  onWrongFormat,
  onSend,
  onResponse,
  onError
) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) {
    onSend();
    axios
      .post("https://www.paddla.es/patricia/addMail.php", {
        email,
      })
      .then(response => {
        onResponse(response);
      })
      .catch(error => {
        onError(error);
      });
  } else {
    onWrongFormat();
  }
};

export const sendContactForm = data =>
  axios.post("https://www.paddla.es/patricia/sendMail.php", {
    ...data,
  });

export const voteCountry = data =>
  axios.post("https://www.paddla.es/patricia/addCountryVote.php", {
    ...data,
  });

export const getCountriesVotes = () =>
  axios.get("https://www.paddla.es/patricia/getCountryVotes.php");
