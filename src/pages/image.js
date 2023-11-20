const imagem = document.querySelector('img');
const inputUpload = document.querySelector('.input-upload');

inputUpload.addEventListener('change', () => {
        imagem.src = URL.createObjectURL(inputUpload.files[0]);

});
