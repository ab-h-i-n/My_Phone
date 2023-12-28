const Apps_names = [
    { name: 'Android', icon: 'android' },
    { name: 'Alarm', icon: 'alarm' },
    { name: 'Book', icon: 'book' },
    { name: 'Camera', icon: 'camera' },
    { name: 'Mail', icon: 'email' },
    { name: 'Music', icon: 'music_note' },
    { name: 'Map', icon: 'map' },
    { name: 'Weather', icon: 'wb_sunny' },
    { name: 'Chat', icon: 'chat' },
    { name: 'Contacts', icon: 'contacts' },
    { name: 'Calendar', icon: 'event' },
    { name: 'Gallery', icon: 'photo_library' },
    { name: 'Settings', icon: 'settings' },
    { name: 'Phone', icon: 'phone' },
    { name: 'Browser', icon: 'public' },
    { name: 'Clock', icon: 'access_time' },
    { name: 'Notes', icon: 'note' },
    { name: 'Calculator', icon: 'calculate' },
    { name: 'File Manager', icon: 'folder' },
    { name: 'News', icon: 'article' },
    { name: 'Sports', icon: 'sports_soccer' },
    { name: 'Shopping', icon: 'shopping_cart' },
    { name: 'Travel', icon: 'flight' },
    { name: 'Food', icon: 'restaurant' },
    { name: 'Fitness', icon: 'fitness_center' },
    { name: 'Education', icon: 'school' },
    { name: 'Health', icon: 'local_hospital' },
    { name: 'Social Media', icon: 'public' },
    { name: 'Food Delivery', icon: 'local_pizza' },
    { name: 'Finance', icon: 'attach_money' },
    { name: 'Utilities', icon: 'build' },
    { name: 'Weather', icon: 'wb_sunny' },
    { name: 'Travel Booking', icon: 'flight_land' },
    { name: 'Car Rentals', icon: 'directions_car' },
    { name: 'Video Streaming', icon: 'video_library' },
    { name: 'Photo Editing', icon: 'edit' },
    { name: 'Social Network', icon: 'people' },
    { name: 'News Reader', icon: 'article' },
    { name: 'Podcasts', icon: 'mic' },
    { name: 'Language Learning', icon: 'language' },
    { name: 'Job Search', icon: 'work' },
    { name: 'ToDo List', icon: 'playlist_add' },
    // ... add more apps as needed
];

// Now, you can use this extended Apps_names array in your code.

  
const appsContainer = document.querySelector('.apps_screen .apps'); // Corrected class name

// Loop through the Apps_names array and create elements
Apps_names.forEach(app => {
    // Create the icon-box container
    const iconBox = document.createElement('div');
    iconBox.classList.add('icon-box');

    // Create the icon element
    const iconElement = document.createElement('div');
    iconElement.classList.add('icon');
    iconElement.innerHTML = `<i class="material-icons">${app.icon}</i>`;

    // Create the name element
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = app.name;

    // Append icon and name elements to icon-box
    iconBox.appendChild(iconElement);
    iconBox.appendChild(nameElement);

    // Append the icon-box to the .apps container
    appsContainer.appendChild(iconBox);
});


const phn_screen = document.querySelector('.screen');
const home_screen = document.querySelector('.home_screen');
const app_screen = document.querySelector('.apps_screen');

function handleScroll() {
    const scrollValue = phn_screen.scrollTop;

    // Calculate opacity based on the scroll position
    const maxScroll = 500; // Adjust this value based on when you want the effect to complete
    const opacityHome = Math.max(0, 1 - scrollValue / maxScroll); // Home screen fades out
    const opacityApp = Math.min(1, scrollValue / maxScroll); // App screen fades in

    // Apply opacity to home_screen and app_screen
    home_screen.style.opacity = opacityHome.toFixed(2); // Limiting decimal places for better performance
    app_screen.style.opacity = opacityApp.toFixed(2);
}

phn_screen.addEventListener('scroll', handleScroll);
