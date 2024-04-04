// import axios from 'axios';

// const apiUrl = 'https://dur-genai-poc-azfunction3.azurewebsites.net/api/dur_genai_azfunction_http_trigger3'; // Replace with your actual API endpoint

// const getBotResponse = async (userInput) => {
//   try {
//     // Simulating a random response with or without a link
//     // const hasLink = Math.random() > 0.5;
//     // const responseContent = hasLink ? 'This is a random response with a link.' : 'This is a random response without a link.';
//     // const responseLink = hasLink ? 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' : null;

//     // Uncomment the following lines if you want to call an actual API
//     const apiResponse = await axios.get(`${apiUrl}?name=${userInput}`);
//     console.log(apiResponse);
//     const responseContent = apiResponse.data.response;
//     const responseLink = apiResponse.data.link;

//     // Simulate an API response delay for a more realistic experience
//     // await new Promise(resolve => setTimeout(resolve, 1000));

//     return {
//       content: responseContent,
//       link: responseLink,
//     };
//   } catch (error) {
//     console.error('Error fetching bot response:', error);

//     // Return a specific bot response in case of an error
//     return {
//       content: 'Error fetching content from the API, please check the logs for more details.',
//       // link: 'https://stackoverflow.com/questions/66053039/cannot-read-property-scrollintoview-of-null',
//     };
//   }
// };

// export default getBotResponse;


import axios from 'axios';

const apiUrl = 'https://dur-genai-poc-azfunction3.azurewebsites.net/api/dur_genai_azfunction_http_trigger3'; // Replace with your actual API endpoint

const getBotResponse = async (userInput) => {
  try {
    console.log(`${apiUrl}?name=${userInput}`);
    const apiResponse = await axios.get(`${apiUrl}?name=${userInput}`);
    const responseData = apiResponse.data;

    // Extract content and links from the response data
    const { response, links } = responseData;
    console.log({ response, links })

    return {
      content: response,
      links: links || [], // Ensure links array exists and default to empty array
    };
  } catch (error) {
    console.error('Error fetching bot response:', error);

    // Return a specific bot response in case of an error
    return {
      content: 'Error fetching content from the API, please check the logs for more details.',
      links: [], // Ensure links array is always present, even in case of error
    };
  }
};

export default getBotResponse;