<template>
  <div class="app-main__inner">
    <div class="tab-content">
      <div
        class="tab-pane tabs-animation fade show active"
        id="tab-content-0"
        role="tabpanel"
      >
        <div class="row">
          <div class="col-12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Controls Types</h5>
                <form class="" @submit.prevent="submitForm()">
                  <div class="position-relative form-group">
                    <label for="exampleName" class="">Name</label
                    ><input
                      v-model="dataForm.name"
                      name="name"
                      id="exampleName"
                      placeholder="Name with a placeholder"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="position-relative form-group">
                    <label for="examplePrice" class="">Price</label
                    ><input
                      v-model="dataForm.price"
                      name="price"
                      id="examplePrice"
                      placeholder="Price placeholder"
                      type="number"
                      class="form-control"
                    />
                  </div>
                  <div class="position-relative form-group">
                    <label for="exampleSale" class="">Sale</label
                    ><input
                      v-model="dataForm.sale"
                      name="sale"
                      id="exampleSale"
                      placeholder="Sale placeholder"
                      type="number"
                      class="form-control"
                    />
                  </div>
                  <button class="mt-1 btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const params = router.currentRoute.value.params;
const dataForm = ref({
  name: '',
  price: '',
  sale: '',
});
const callApiItem = async () => {
  if (params.id === 'add') return;
  const response = await axios.get(`https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/${params.id}`);
  dataForm.value.name = response.data.name;
  dataForm.value.price = response.data.price;
  dataForm.value.sale = response.data.sale;
};
callApiItem();

const submitForm = async () => {
  console.log(dataForm.value);
  if (params.id === 'add') {
    const response = await axios.post('https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products', dataForm.value);
  } else {
    const response = await axios.put(`https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/${params.id}`, dataForm.value);
  }
  router.push({ name: 'table' });
};
</script>

<style lang="scss" scoped></style>
