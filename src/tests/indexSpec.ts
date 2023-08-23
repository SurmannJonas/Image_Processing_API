// Import the 'app' module from the '../index' file
import app from '../index';
// Import the 'sharp' module from the '../utilities/sharpModule' file
import resizeImage from '../utilities/sharpModule';
// Import the 'supertest' module
import supertest from 'supertest';
// Create a request object using 'supertest' and pass in the 'app' module
const request = supertest(app);
// Import the 'path' module
import path from 'path';


// Start describing the test suite
describe('Endpoint Test', () => {
  // Start describing the test case
  it('should return the expected response', async () => {
    // Send a GET request to the '/api' endpoint
    const response = await request.get('/api');

    // Assert that the response status is 200
    expect(response.status).toBe(200);

    // Assert that the response text is equal to 'Main API Route'
    expect(response.text).toEqual('Main API Route');
  });
});



describe('Testing image processing', () => {
  // Define the input image path
  const inputImage = path.join(__dirname, '../../images/full/fjord.jpeg'); // Filename of input image
  const inputImageWrong = path.join(__dirname, '../../images/full/wrong_fjord.jpeg'); // Wrong filename of input image
  // Define the desired width and height for resizing
  const width = 500;
  const height = 500;

  it('Throws a missing input error if the wrong filename is provided', async () => {
    try {
      // Test that an error is thrown when the wrong filename is provided
      await resizeImage(inputImageWrong, width, height);
      fail('Promise should have been rejected'); // fail the test if the promise is not rejected
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        'Input file is missing: /Users/jonassurmann/Documents/Udacity/FullStack_JS/Image_Processing_API/images/full/wrong_fjord.jpeg'
      );
    }
  });

  it('Resolves successfully when provided the right filename, height, and width parameters', async () => {
    // Test that the image is successfully resized when provided with the correct filename, height, and width
    const result = await resizeImage(inputImage, width, height);
    expect(result).toBeDefined(); // assertion for resolved value
  });
});
