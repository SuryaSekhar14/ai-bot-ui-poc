import axios from 'axios';

const apiUrl = '';

const getBotResponse = async (userInput) => {
  try {
    // Simulating a random response with or without a link
    const hasLink = Math.random() > 0.5;
    const response = hasLink ? 'This is a random response with a link.' : 'This is a random response without a link.';
    const links = hasLink ? [{'name': 'Dummy PDF', 'link': 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}] : null;

    // Uncomment the following lines if you want to call an actual API
    // const apiResponse = await axios.get(`${apiUrl}?name=${userInput}`);
    // const { response, links } = apiResponse.data;

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      content: response,
      links: links || [],
    };
  } catch (error) {
    console.error('Error fetching bot response:', error);

    return {
      content: 'Error fetching content from the API, please check the logs for more details.',
      link: [],
    };
  }
};

export default getBotResponse;