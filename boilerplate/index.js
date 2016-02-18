var tasks = [];
var newId = 0;

/**
 * Añade una nueva tarea a la lista de tareas
 * @param string task - tarea a añadir
 */
function newTask(task) {
  tasks.push({id: newId, text:task, done:false, exist:true});
  newId++;
}

/**
 * Marca una tarea como realizada o sin realizar
 * @param number  task - Identificador de la tarea
 * @param boolean done - True si se quiere marcar la tarea como realizada.
 *                       False en caso contrario
 */
function setDone(task, done) {
}

/**
 * Elimina una tarea
 * @param number  task - Identificador de la tarea
 */
function deleteTask(task) {
}

/**
 * Muestra en pantalla las tareas en el formato adecuado
 */
function render() {

}

function init() {
  /**
   * Evento disparado al pulsar la tecla enter en el cuadro de texto
   * "añadir nueva tarea"
   */
  // crear el evento

  /* Inicialización */
  newTask('Soy una tarea completada');
  setDone(0, true);
  newTask('Y yo una sin completar');

  render();
}
