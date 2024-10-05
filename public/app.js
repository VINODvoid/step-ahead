// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', async () => {
  // Fetch courses from the backend
  const response = await fetch('/api/v1/course/view-course');
  const courses = await response.json();

  // Get the sidebar element
  const sidebar = document.getElementById('sidebar');

  // Iterate over each course
  courses.forEach(course => {
    // Create a course title element
    const courseTitle = document.createElement('h2');
    courseTitle.innerText = course.title;
    sidebar.appendChild(courseTitle);

    // Create a list for modules
    const moduleList = document.createElement('ul');
    

    // Iterate over each module
    course.modules.forEach(module => {
      // Create a list item for the module
      const moduleItem = document.createElement('li');
      moduleItem.className+="modules"
      moduleItem.innerText = module.moduleTitle;

      // Create an inner list for videos
      const videoList = document.createElement('ul');

      // Iterate over each video
      module.videos.forEach(video => {
        // Create a list item for the video
        const videoItem = document.createElement('li');
        videoItem.classList+= "videos"
        videoItem.innerText = video.videoTitle;
        videoItem.style.cursor = 'pointer';

        // Add click event to play video
        videoItem.addEventListener('click', () => {
          const iframe = document.getElementById('youtube-video');
          iframe.src = `https://www.youtube.com/embed/${video.videoUrl}?controls=0&modestbranding=1`; // <-- Ensure this is just the video ID
        });

        videoList.appendChild(videoItem);
      });

      moduleItem.appendChild(videoList);
      moduleList.appendChild(moduleItem);
    });

    sidebar.appendChild(moduleList);
  });
});
