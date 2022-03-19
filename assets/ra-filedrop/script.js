let RaFileDrop = {
  LoadDrop: function(zone) {
      var el = zone.closest(".ra-dropfile")
      var input = el.querySelector('#file')
      if (input.files[0]) {

      el.querySelector('#icon').classList.remove('fa-download');
      el.querySelector('#icon').classList.add('fa-file');

      el.querySelector('#title').innerText = input.files.item(0).name;
    }
  },

  LoadPage: function() {
    document.querySelectorAll(".ra-dropfile").forEach(function(el) {
      RaFileDrop.LoadDrop(el)
    });
  }
}

window.onload = function () {
  RaFileDrop.LoadPage()
}
