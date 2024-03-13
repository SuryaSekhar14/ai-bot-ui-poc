import axios from 'axios';

const apiUrl = '/api/chatbot'; // Replace with your actual API endpoint

const getBotResponse = async (userInput) => {
  try {
    // Simulating a random response with or without a link
    const hasLink = Math.random() > 0.5;
    const responseContent = hasLink ? 'This is a random response with a link.' : 'This is a random response without a link.';
    const responseLink = hasLink ? 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' : null;

    // Uncomment the following lines if you want to call an actual API
    // const apiResponse = await axios.post(apiUrl, { message: userInput });
    // const responseContent = apiResponse.data.content;
    // const responseLink = apiResponse.data.link;

    // Simulate an API response delay for a more realistic experience
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      content: responseContent,
      link: responseLink,
    };
  } catch (error) {
    console.error('Error fetching bot response:', error);

    // Return a specific bot response in case of an error
    return {
      content: 'Error fetching content from the API',
      link: 'https://stackoverflow.com/questions/66053039/cannot-read-property-scrollintoview-of-null',
    };
  }
};

export default getBotResponse;
