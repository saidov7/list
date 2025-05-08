let malumotlararray = JSON.parse(localStorage.getItem('malumotlar')) || [];

const forma = document.getElementById('myForm');
const royxat = document.getElementById('dataList');

function royxat() {
  royxat.innerHTML = '';
  malumotlararray.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `Ism: ${item.ism}, Email: ${item.email} 
      <button class="del" onclick="del(${index})">O'chirish</button>`;
    royxat.appendChild(li);
  });
}

royxat();

forma.addEventListener('submit', function(e) {
  e.preventDefault();

  const ism = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const yangiobj = { ism, email };
  malumotlararray.push(yangiobj);

  localStorage.setItem('malumotlar', JSON.stringify(malumotlararray));

  royxat();

  forma.reset();
});

function del(index) {
  malumotlararray.splice(index, 1);
  localStorage.setItem('malumotlar', JSON.stringify(malumotlararray));
  royxat();
}
