// Tab switching
document.querySelectorAll('.announcements .tab').forEach((btn, idx) => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.announcements .tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector('.announcement-list').style.display = idx === 0 ? 'block' : 'none';
        document.querySelector('.attendance-section').style.display = idx === 1 ? 'block' : 'none';
        document.querySelector('.courses-section').style.display = idx === 2 ? 'block' : 'none';
    });
});
document.querySelectorAll('.dropdown-toggle').forEach(function(text) {
    text.addEventListener('click', function(e) {
        const parent = text.closest('.dropdown-parent');
        document.querySelectorAll('.dropdown-parent').forEach(function(other) {
            if (other !== parent) other.classList.remove('open');
        });
        parent.classList.toggle('open');
        e.stopPropagation();
    });
});
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-parent').forEach(function(parent) {
        parent.classList.remove('open');
    });
});

// Module menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const sidebarContent = document.querySelector('.sidebar-content');
const sidebar = document.querySelector('.sidebar');
toggleBtn.addEventListener('click', function() {
    sidebarContent.style.display = 'none';
    sidebar.classList.add('closed');
    toggleBtn.style.display = 'none';
    showBtn.style.display = 'block';
});
const showBtn = document.createElement('button');
showBtn.className = 'menu-toggle';
showBtn.style.display = 'none';
showBtn.innerHTML = '<span class="menu-icon">&#9776;</span> Show Module Menu';
document.querySelector('main').insertBefore(showBtn, document.querySelector('.dashboard-cards'));
showBtn.addEventListener('click', function() {
    sidebarContent.style.display = 'block';
    sidebar.classList.remove('closed');
    toggleBtn.style.display = 'block';
    showBtn.style.display = 'none';
});

// CGPA eye toggle
const cgpaValue = document.getElementById('cgpa-value');
const toggleCgpaBtn = document.getElementById('toggle-cgpa');
const eyeIcon = document.getElementById('eye-icon');
let cgpaShown = false;
toggleCgpaBtn.addEventListener('click', function() {
    cgpaShown = !cgpaShown;
    eyeIcon.textContent = cgpaShown ? '🙈' : '👁️'; // toggle icon
    cgpaValue.textContent = cgpaShown ? '9.99' : '--'; // toggle value
});
