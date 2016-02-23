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
    t => t.id===task ? {id:t.id, text:t.text, done:done, exist:t.exist} : t;
  });
}

/**
 * Elimina una tarea
 * @param number  task - Identificador de la tarea
 */
function deleteTask(task) {
  tasks = tasks.map(
    t =>t.id===task ? {id:t.id, text:t.text, done:t.done, exist:false} : t;
  });
}

/**
 * Muestra en pantalla las tareas en el formato adecuado
 */
function render() {
  var ulNode = document.getElementById('task-list');

  // Vaciar task-list
  ulNode.innerHTML = '';

  // Insertamos todos los elementos
  tasks.filter(
    item => item.exist;
  }).forEach(function(item) {
    var liNode      = document.createElement('li');
    var checkboxNode= document.createElement('input');
    var spanNode    = document.createElement('span');
    var buttonNode  = document.createElement('button');

    liNode.setAttribute('task-id', item.id);
    if (item.done) {
      liNode.setAttribute('class', 'task task-complete');
    } else {
      liNode.setAttribute('class', 'task task-active');
    }

    checkboxNode.checked = item.done;
    checkboxNode.setAttribute('task-id', item.id);
    checkboxNode.setAttribute('type', 'checkbox');
    checkboxNode.onchange = function(event) {
      var task = parseInt(event.target.getAttribute('task-id'), 10)
      var done = event.target.checked;
      setDone(task, done);
      render();
    }

    spanNode.textContent = item.text;

    buttonNode.setAttribute('class', 'destroy');
    buttonNode.setAttribute('task-id', item.id);
    buttonNode.onclick = function(event) {
      var task = parseInt(event.target.getAttribute('task-id'), 10)
      deleteTask(task);
      render();
    }

    liNode.appendChild(checkboxNode);
    liNode.appendChild(spanNode);
    liNode.appendChild(buttonNode);

    ulNode.appendChild(liNode);  
  });
}

function init() {
  /**
   * Evento disparado al pulsar la tecla enter en el cuadro de texto
   * "añadir nueva tarea"
   */
  document.getElementById('new-task').onkeyup = function(event) {
    if (event.keyCode===13) {
      newTask(event.target.value);
      event.target.value = '';
      render();
    }
  };
  newTask('Soy una tarea completada');
  setDone(0, true);
  newTask('Y yo una sin completar');

  render();
}
