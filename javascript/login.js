const studentButton = document.getElementById('studentButton');
const teacherButton = document.getElementById('teacherButton');
const studentLogin = document.getElementById('studentLogin');
const teacherLogin = document.getElementById('teacherLogin');

studentButton.addEventListener('click', () => {
  studentLogin.classList.remove('hidden');
  teacherLogin.classList.add('hidden');
});

teacherButton.addEventListener('click', () => {
  teacherLogin.classList.remove('hidden');
  studentLogin.classList.add('hidden');
});