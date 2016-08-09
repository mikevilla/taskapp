var TaskRowComponent = React.createClass ({

  getInitialState: function() {
     console.log('getInitialState TaskComponent');
     return {taskRowData: this.props.taskRow};
  },

  componentDidMount: function() {
      console.log('componentDidMount TaskComponent');

      var propsTaskID = this.props.taskRow.id;

      // Event handlers, for now using jquery but later will move over to handle the event with reactjs. This is just a demo.
      $( ".completed_" + propsTaskID ).click(function() {
        var taskId = $(this).attr('data-id');
         console.log('One clicked', taskId);

         // send request to update this task as Completed
         var apiTaskCompletedUrl = '/api/tasks/update_task.json';
         $.ajax({
           url: apiTaskCompletedUrl,
           beforeSend:function (xhr) {
             xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
           },
           type:"POST",
           data: {id:taskId, status:'In Progress'},
           success:function(data) {
             console.log('SUCCESS TASK apiTaskCompletedUrl: ', data);
             window.location.replace("/completed");
           }.bind(this),
           error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
           }.bind(this)
         });
      });

      $( ".inprogress_" + propsTaskID).click(function() {
        var taskId = $(this).attr('data-id');
        console.log('One clicked', taskId);

        // send request to update this task as Completed
        var apiTaskCompletedUrl = '/api/tasks/update_task.json';
        $.ajax({
          url: apiTaskCompletedUrl,
          beforeSend:function (xhr) {
            xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
          },
          type:"POST",
          data: {id:taskId, status:'Completed'},
          success:function(data) {
            console.log('SUCCESS TASK apiTaskCompletedUrl: ', data);
            window.location.replace("/inprogress");
          }.bind(this),
          error: function(xhr, status, err) {
           console.error(this.props.url, status, err.toString());
          }.bind(this)
        });

      });

   },

  render: function() {

      console.log('render TaskComponent');
      console.log(this.props.taskRow);

      var status = this.props.taskRow.status.toLowerCase().replace(/ /g, ''),
        editUrl = "/tasks/" + this.props.taskRow.id + "/edit",
        statusClass = "checkmark awe-icon awe-icon-check " + status + "_" + this.props.taskRow.id ;

      return (
        <li>
               <i className={statusClass} data-id={this.props.taskRow.id}></i>
               <div>
                 <a href={editUrl}>
                   <i className="awe-icon awe-icon-arrow-right"></i>
                   <span className="task-title">{this.props.taskRow.title}</span>
                   <span>{this.props.taskRow.description}</span>
                   <span>{this.props.taskRow.priority}</span>
                   <span>{this.props.taskRow.status}</span>
                   <span>{this.props.taskRow.target}</span>
                 </a>
               </div>
        </li>
      );
  }
});


