const generateRandomEmail = () => {
    const username = `user_${Math.floor(Math.random() * 10000)}`; // Random username
    const domain = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com']; // List of possible domains
    const randomDomain = domain[Math.floor(Math.random() * domain.length)]; // Randomly select a domain
  
    const email = `${username}@${randomDomain}`; // Construct the email address
    return email;
  };

  const generateRandomUsername = () => {
    const username = `user_${Math.floor(Math.random() * 10000)}`; // Generates a username like "user_1234"
    return username;
  };
  
  // Function to generate a random password
  const generateRandomPassword = () => {
    const password = `pass_${Math.floor(Math.random() * 10000)}`; // Generates a password like "pass_5678"
    return password;
  };

  module.exports = {
    generateRandomUsername,
    generateRandomPassword,
    generateRandomEmail
  };