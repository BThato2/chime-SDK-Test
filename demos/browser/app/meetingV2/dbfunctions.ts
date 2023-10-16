  // TIME CHANGES
  document.addEventListener("DOMContentLoaded", function() {
    // Function to format the date
    function formatDate(date: any) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return monthNames[monthIndex] + ' ' + day + ', ' + year;
    }

      function formatTime(date: any) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = checkTime(minutes);
        return hours + ':' + minutes + ' ' + ampm;
    }
    
    function checkTime(i:any) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    
    function updateDateTime() {
        const now = new Date();
    
        // Update the content of the elements with class 'currentDate'
        const dateElements = document.querySelectorAll('.currentDate');
        dateElements.forEach(element => {
            element.textContent = formatDate(now);  // Assuming you have a formatDate function similar to formatTime
        });
    
        // Update the content of the elements with class 'currentTime'
        const timeElements = document.querySelectorAll('.currentTime');
        timeElements.forEach(element => {
            element.textContent = formatTime(now);
        });
    
        setTimeout(updateDateTime, 1000);
    }
    
    // Call the function to start the update loop
    updateDateTime();
  
  });
    // END TIME CHANGES

    

    
document.addEventListener('DOMContentLoaded', function () {
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  const calendarDates = document.getElementById('calendar-dates');
  const currentMonthElement = document.getElementById('current-month');

  // Sample JSON structure for events
  const events: { [key: string]: string } = {
    '2023-10-03': 'Teachserv Meeting',
    '2023-10-06': 'Meeting with Ryan',
    '2023-10-15': 'Meeting with Ryan',
    '2023-10-26': 'Meeting with Ryan',
    '2023-10-27': 'Meetings with team leads',
    // Add more events as needed
  };

  function generateCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    currentMonthElement.textContent =
      firstDay.toLocaleString('default', { month: 'long' }) + ' ' + currentYear;

    calendarDates.innerHTML = '';

    // Add padding for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const paddingElement = document.createElement('div');
      paddingElement.classList.add('calendar-day', 'inactive');
      calendarDates.appendChild(paddingElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateElement = document.createElement('div');
      dateElement.classList.add('calendar-day');
      dateElement.textContent = day.toString();

      // Check if there's an event for this day
      const eventDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(
        day
      ).padStart(2, '0')}`;
      if (events[eventDate]) {
        const eventElement = document.createElement('div');
        eventElement.classList.add('calendar-event');

        // eventElement.textContent = events[eventDate];
        dateElement.appendChild(eventElement);
        // Add an event listener to show the tooltip on click
        dateElement.addEventListener('click', (e) => showTooltip(e, events[eventDate]));

      }

      calendarDates.appendChild(dateElement);
    }
  }

  function showPreviousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar();
  }

  function showNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar();
  }

  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');

  prevMonthButton.addEventListener('click', showPreviousMonth);
  nextMonthButton.addEventListener('click', showNextMonth);

  generateCalendar();

    
  // if click #close-quiz button, then hide #myDIV
  // const closeQuiz = document.getElementById('close-quiz');
  // const quiz = document.getElementById('myDIV'); 

  // closeQuiz.addEventListener('click', function () {
  //   quiz.style.display = 'none';
  // }
  // );
});

function showTooltip(event: MouseEvent, content: string) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = content;
  tooltip.style.top = `${event.clientY + 10}px`;
  tooltip.style.left = `${event.clientX + 10}px`;
  tooltip.style.position = 'absolute';
  tooltip.style.zIndex = '100';
  document.body.appendChild(tooltip);


  // Hide tooltip on next click anywhere in the document
  document.addEventListener('click', function hideTooltip() {
    tooltip.remove();
    document.removeEventListener('click', hideTooltip);
  }, { once: true });
}

  const transcriptContainer = document.getElementById("transcript-container");
  
  // Load highlighted text from localStorage on page load
  const savedHighlight = localStorage.getItem("highlighted_text");
  if (!transcriptContainer) {
    console.error("Unable to find transcript-container.");
}  else {

  if (savedHighlight) {
    transcriptContainer.style.backgroundColor = savedHighlight;
  }

  transcriptContainer.addEventListener("mousedown", () => {
    // Apply the highlight color
    transcriptContainer.style.backgroundColor = '#ffff00';

    // Save the highlighted text to localStorage
    localStorage.setItem("highlighted_text", '#ffff00');
  });


}
  


// ********** VUE CODE **********
// ******************************
// ******************************

  