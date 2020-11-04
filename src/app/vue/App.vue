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
                    v-model="task.title"
                    type="text"
                    placeholder="titulo"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    v-model="task.description"
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
          <h1 class="text-center">hola mundo</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    addTask: function () {
      console.log(this.task);
    },
  },
};
</script>
