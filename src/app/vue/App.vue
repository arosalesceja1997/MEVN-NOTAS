<template>
  <div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addTask">
                <div class="form-group">
                  <input
                    v-model="task.nota"
                    type="text"
                    placeholder="titulo"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    v-model="task.descripcion"
                    cols="30"
                    rows="10"
                    class="form-control"
                    placeholder="Descripcion"
                  ></textarea>
                </div>
                <button class="btn btn-primary btn-block">Guardar</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Nota</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of allTask" :key="index">
                <th>{{ item.nota }}</th>
                <th>{{ item.descripcion }}</th>
                <th class="text-center">
                  <input
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    value="Del"
                    @click="deleteTask(item._id)"
                  />
                  <input
                    type="button"
                    class="btn btn-sm btn-outline-success"
                    value="Upt"
                    @click="updateTaskMethod(item._id)"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Nota {
  constructor(nota,descripcion){
    this.nota = nota;
    this.descripcion = descripcion
  }
}

export default {
  data() {
    return {
      task: new Nota(),
      // {
      //   nota: "",
      //   descripcion: ""
      // },
      allTask: [],
      update: false,
      updateTask: '',
    };
  },
  created() {
    this.getTask();
  },
  methods: {
    getTask() {
      fetch("/api/getNota")
        .then(response => response.json())
        .then(data => {
          this.allTask = data;
        });
    },
    addTask: function() {
      if (!this.update) {
        fetch("/api/newNota", {
          method: "POST",
          body: JSON.stringify(this.task),
          headers: {
            Accept: "*/*",
            "Content-type": "application/x-www-form-urlencoded",
            "Content-type": "application/json"
          }
        });
      } else {
        fetch("/api/putNota/" + this.updateTask, {
          method: "PUT",
          headers: {
            Accept: "*/*",
            "Content-type": "application/x-www-form-urlencoded",
            "Content-type": "application/json"
          },
          body: JSON.stringify(this.task)
        });
        this.update = false;
      }
      // .then(response => response.json())
      // .then(data => console.log(data));
      this.clearData();
      this.getTask();
    },
    deleteTask: function(id) {
      fetch("/api/deleteNota/" + id, {
        method: "DELETE",
        headers: {
          Accept: "*/*",
          "Content-type": "application/x-www-form-urlencoded",
          "Content-type": "application/json"
        }
      });
      this.getTask();
    },
    updateTaskMethod: function(id) {
      this.update = true;
      this.updateTask = id;
      // const data = this.allTask.find((item) => item == id);
      this.allTask.forEach(data => {
        if(data._id == id){
          this.task.nota = data.nota;
          this.task.descripcion = data.descripcion;
        }
      });
      // this.getTask();
    },
    clearData() {
      // this.task.nota = "";
      // this.task.descripcion = "";
      this.task = new Nota();
    }
  }
};
</script>
