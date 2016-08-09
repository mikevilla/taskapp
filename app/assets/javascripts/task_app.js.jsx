// Once document is ready then you can proceed to mount the react js components, shorthand for $(document).ready()
$(function() {
  console.log( "ready!" );

  var apiTaskListUrl = '/api/tasks.json',
    apiInProgressTaskListUrl = '/api/inprogress.json',
    apiCompletedTaskListUrl = '/api/completed.json',
    apiTaskUrl = "",
    sortBy = 'date';

  switch(status) {
      case "Completed":
          apiTaskUrl = apiCompletedTaskListUrl;
          break;
      case "In Progress":
          apiTaskUrl = apiInProgressTaskListUrl;
          break;
      case "All":
        apiTaskUrl = apiTaskListUrl;
        break;
      default:
        apiTaskUrl = "";
  }

  // Initial call to populate the task data
  refreshData(sortBy);

  $(".redirectCompleted").click(function() {
    window.location.replace("/completed");
  });

  $(".redirectInProgress").click(function() {
    window.location.replace("/inprogress");
  });

  $('.button-priority').click(function() {
    console.log('button-priority clicked');
    sortBy = 'priority';
    $('.button-priority').addClass('selected');
    $('.button-date').removeClass('selected');
    $('.taskContainerComponent').remove();
    refreshData(sortBy);
  });

  $('.button-date').click(function() {
    console.log('button-date clicked');
    sortBy = 'date';
    $('.button-date').addClass('selected');
    $('.button-priority').removeClass('selected');
    $('.taskContainerComponent').remove();
    refreshData(sortBy);
  });

  function refreshData (sortBy) {
    $.ajax({
      url: apiTaskUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {

        // Sort the array
        switch(sortBy) {
            case "priority":
                data.sort(function(a, b){return a.priority-b.priority});
                break;
            case "date":
                data.sort(function(a,b){
                  return new Date(a.target) - new Date(b.target);
                });
                break;
            default:
              data.sort(function(a,b){
                return new Date(a.priority) - new Date(b.priority);
              });
              break;
        }
        // Data retrieved successfully so start rendering the TaskContainerComponent
        ReactDOM.render(
          <TaskContainerComponent url={apiTaskUrl} taskData={data}/>,
          document.getElementById('mountTaskListComponent')
        );
      }.bind(this),
      error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  };

});


