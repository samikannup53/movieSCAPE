// Streams Scroll Functionality
export const StreamsScroll = () => {
    const streamsSection = document.getElementById("streams");
    const topPosition = streamsSection.offsetTop; 
    window.scrollTo({ top: topPosition, behavior: "smooth" }); 
  };