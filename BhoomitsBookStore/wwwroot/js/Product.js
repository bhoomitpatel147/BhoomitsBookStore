var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/Product/GetAll"
        },
        "columns": [
            { "data": "title", "width": "15%", "class": "text-white bg-secondary" },
            { "data": "isbn", "width": "15%", "class": "text-white bg-secondary" },
            { "data": "listPrice", "width": "15%", "class": "text-white bg-secondary" },
            { "data": "author", "width": "15%", "class": "text-white bg-secondary" },
            { "data": "category.name", "width": "15%", "class": "text-white bg-secondary" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                 <div class="text-center text-white bg-secondary">
                     <a href="/Admin/Product/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer">
                         <i class="fas fa-edit"></i>&nbsp;
                      </a>
                  <a onclick=Delete("/Admin/Product/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                       <i class= "fas fa-trash-alt"></i>&nbsp;
                  </a>
                  </div>
                     `;
                },
            }
        ]
    });
}

function Delete(url) {
    swal({
        title: "Are you sure you want to delete?",
        text: "You will not be able to restore the data!",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            });
        }
    });
}
