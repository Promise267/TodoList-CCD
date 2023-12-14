$(document).ready(function() {
  $('#addItemBtn').on('click', function() {

      var newItem = $('#itemInput').val();

      if (newItem.trim() !== '') {
          const taskItem = $('<li class="mt-5 flex justify-between items-center relative"><label class="inline-flex items-center"><input type="checkbox" class="form-checkbox w-0 h-0 opacity-0 absolute"><span class="checkmark"></span>' + newItem + '</label><button class="deleteItem bg-red-500 text-white px-2 py-1 rounded">Delete</button></li>');
          $('#itemList').append(taskItem);
          $('#itemInput').val('');
      }
  });

  $('#itemList').on('change', '.form-checkbox', function() {
      $(this).closest('li').toggleClass('completed', this.checked);
  });

  $('#itemList').on('click', '.deleteItem', function() {
      $(this).closest('li').remove();
  });
});
