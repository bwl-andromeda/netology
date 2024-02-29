document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    function uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', form.action);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            console.log('Файл успешно загружен');
          } else {
            console.error('Произошла ошибка при загрузке файла');
          }
        }
      };
      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          progress.value = percentComplete / 100;
        }
      };
      xhr.send(formData);
    }
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
      const file = fileInput.files[0];
      if (file) {
        uploadFile(file);
      } else {
        console.error('Файл не выбран');
      }
    });
  });
  