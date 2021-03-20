window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function handleToggle() {
  const toggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
