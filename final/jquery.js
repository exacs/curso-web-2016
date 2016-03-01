var tasks = [];
var newId = 0;

/**
 * Añade una nueva tarea a la lista de tareas
 * @param string task - tarea a añadir
 */
function newTask(task) {
  tasks = tasks.concat({id: newId, text:task, done:false, exist:true});
  newId++;
}

/**
 * Marca una tarea como realizada o sin realizar
 * @param number  task - Identificador de la tarea
 * @param boolean done - True si se quiere marcar la tarea como realizada.
 *                       False en caso contrario
 */
function setDone(task, done) {
  tasks = tasks.map(
    t => t.id===task ? {id:t.id, text:t.text, done:done, exist:t.exist} : t
  );
}

/**
 * Elimina una tarea
 * @param number  task - Identificador de la tarea
 */
function deleteTask(task) {
  tasks = tasks.map(
    t => t.id===task ? {id:t.id, text:t.text, done:t.done, exist:false} : t
  );
}

/**
 * Muestra en pantalla las tareas en el formato adecuado
 */
function render() {
  var ulNode = $('#task-list');

  // Vaciar task-list
  ulNode.html('');

  // Insertamos todos los elementos
  tasks.filter(
    item => item.exist
  ).forEach(function(item) {
    var liNode = $('<li></li>')
      .attr('task-id', item.id)
      .addClass('task')
      .addClass(item.done ? 'task-complete' : 'task-active');

    var checkboxNode = $('<input>')
      .attr('checked', item.done)
      .attr('task-id', item.id)
      .attr('type', 'checkbox')
      .change(function(event) {
        var task = parseInt($(event.target).attr('task-id'), 10);
        var done = event.target.checked;
        setDone(task, done);
        render();
      });

    var spanNode = $('<span></span>')
      .text(item.text);
    
    var buttonNode = $('<button></button>')
      .attr('class', 'destroy')
      .attr('task-id', item.id)
      .click(function(event) {
        var task = parseInt($(event.target).attr('task-id'), 10);
        deleteTask(task);
        render();
      });

    liNode
      .append(checkboxNode)
      .append(spanNode)
      .append(buttonNode);

    ulNode.append(liNode);
  });
}

function init() {
  /**
   * Evento disparado al pulsar la tecla enter en el cuadro de texto
   * "añadir nueva tarea"
   */
  $('#new-task').keyup(function(event) {
    if (event.which===13) {
      newTask(event.target.value);
      event.target.value = '';
      render();
    }
  });
  newTask('Soy una tarea completada');
  setDone(0, true);
  newTask('Y yo una sin completar');

  render();
}
