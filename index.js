const currentUser = 'Grace Hopper';
function WelcomeMessage (GraceHopper) {
    return 'Welcome to Flatbook,${GraceHopper}!' ;
}
function excitedWelcomeMessage(GraceHopper) {
    return `Welcome to Flatbook, ${GraceHopper.toUpperCase()}!`;
  }
function shortGreeting(GraceHopper)! {
    return `Welcome, ${GraceHopper.charAt(0)}!`;
  }
module.exports = {
    currentUser,
    welcomeMessage,
    excitedWelcomeMessage,
    shortGreeting,
  };
    // Write your code in this file!
