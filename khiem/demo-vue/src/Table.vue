<template>
  <div class="app-main__inner">
    <div class="row">
      <div class="col-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Simple table</h5>
            <table class="mb-0 table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Sales</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item, index in dataApi" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.sale }}%</td>
                  <td>{{ new Date(item.createdAt * 1000) }}</td>
                  <td style="display: flex;">
                    <div style="cursor: pointer;">
                      <i class="fa fa-fw" aria-hidden="true" title="Copy to use edit"></i>
                    </div>
                    <div @click="deleteItem(item.id)" style="cursor: pointer; margin-left: 10px;">
                      <i class="fa fa-fw" aria-hidden="true" title="Copy to use close"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const dataApi = ref([]);
const callApi = async () => {
  const response = await axios.get('https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products');
  dataApi.value = response.data;
  // console.log(response);
  // console.log(dataApi.value);
};
callApi()

const deleteItem = async (id) => {
  await axios.delete(`https://6419ba9ef398d7d95d47d12c.mockapi.io/demo/products/${id}`);
  callApi();
};

</script>

<style lang="scss" scoped></style>
