// Once document is ready then you can proceed to mount the react js components, shorthand for $(document).ready()
$(function() {
  console.log( "ready!" );

  var apiTaskListUrl = '/api/tasks.json',
    apiInProgressTaskListUrl = '/api/inprogress.json',
    apiCompletedTaskListUrl = '/api/completed.json',
    apiTaskUrl = "";

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

  console.log("Here: MIKE", apiTaskUrl);



  // Initial call to populate the task data
  $.ajax({
    url: apiTaskUrl,
    dataType: 'json',
    cache: false,
    success: function(data) {
      console.log('SUCCESS TASK taskData: ', data);
      console.log('getInitialState TaskComponent');

      // Sort the array
      switch(status) {
          case "Completed":
              data.sort(function(a,b){
                return new Date(b.priority) - new Date(a.priority);
              });
              break;
          case "In Progress":
              data.sort(function(a,b){
                return new Date(a.target) - new Date(b.target);
              });
              break;
          default:
            data.sort(function(a,b){
              return new Date(b.priority) - new Date(a.priority);
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

  $(".redirectCompleted").click(function() {
    window.location.replace("/completed");
  });

  $(".redirectInProgress").click(function() {
    window.location.replace("/inprogress");
  });

});


