// Once document is ready then you can proceed to mount the react js components, shorthand for $(document).ready()
$(function() {
  console.log( "ready!" );

  var apiTaskListUrl = '/api/tasks.json';

  // Initial call to populate the task data
  $.ajax({
    url: apiTaskListUrl,
    dataType: 'json',
    cache: false,
    success: function(data) {
      console.log('SUCCESS TASK taskData: ', data);
      console.log('getInitialState TaskComponent');

      // Data retrieved successfully so start rendering the TaskContainerComponent
      ReactDOM.render(
        <TaskContainerComponent url={apiTaskListUrl} taskData={data}/>,
        document.getElementById('mountTaskListComponent')
      );
    }.bind(this),
    error: function(xhr, status, err) {
     console.error(this.props.url, status, err.toString());
    }.bind(this)
  });

});